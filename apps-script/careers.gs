/**
 * King Banh Mi — Careers talent-pool form (standalone Apps Script)
 *
 * Setup:
 * 1. Create a new Google Sheet for career applications.
 * 2. Extensions → Apps Script → paste this file → save.
 * 3. Update CONFIG.HR_EMAIL (and other values if needed).
 * 4. Run setupSheet() once from the editor (authorize when prompted).
 * 5. Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 * 6. Copy the web app URL into the site's VITE_CAREERS_SCRIPT_URL env variable.
 */

/** All deployment settings — update before going live. */
const CONFIG = {
  SHEET_NAME: 'Applications',
  DRIVE_FOLDER_NAME: 'King Banh Mi - CV',
  HR_EMAIL: 'REPLACE_ME@kingbanhmi.net',
  FROM_NAME: 'King Banh Mi Careers',
  LOGO_URL: 'https://kingbanhmi.net/logo.png',
  WEBSITE_URL: 'https://kingbanhmi.net',
  MAX_FILE_MB: 5,
};

const BRAND_GREEN = '#013a0f';
const BRAND_YELLOW = '#FDB714';

const APPLICATION_FIELD_KEYS = [
  'fullName',
  'dateOfBirth',
  'gender',
  'phone',
  'email',
  'address',
  'interestedPosition',
  'interestedPositionOther',
  'preferredBranch',
  'employmentType',
  'expectedSalary',
  'availableStartDate',
  'education',
  'yearsOfExperience',
  'lastWorkplace',
  'experienceDescription',
  'canWorkNightsWeekends',
  'hasFnBExperience',
  'hearAboutUs',
  'notes',
  'privacyConsent',
];

/** @type {Record<string, string>} */
var APPLICATION_FIELD_HEADERS = {
  fullName: 'Full Name',
  dateOfBirth: 'Date of Birth',
  gender: 'Gender',
  phone: 'Phone',
  email: 'Email',
  address: 'Address',
  interestedPosition: 'Interested Position',
  interestedPositionOther: 'Position Other',
  preferredBranch: 'Preferred Branch',
  employmentType: 'Employment Type',
  expectedSalary: 'Expected Salary',
  availableStartDate: 'Available Start Date',
  education: 'Education',
  yearsOfExperience: 'Years of Experience',
  lastWorkplace: 'Last Workplace',
  experienceDescription: 'Experience Description',
  canWorkNightsWeekends: 'Nights/Weekends',
  hasFnBExperience: 'F&B Experience',
  hearAboutUs: 'Hear About Us',
  notes: 'Notes',
  privacyConsent: 'Privacy Consent',
};

/**
 * Builds the ordered header row for the Applications sheet.
 * @returns {string[]}
 */
function getApplicationHeaderRow_() {
  var headers = ['Timestamp'];
  for (var i = 0; i < APPLICATION_FIELD_KEYS.length; i++) {
    headers.push(APPLICATION_FIELD_HEADERS[APPLICATION_FIELD_KEYS[i]]);
  }
  headers.push('CV Link', 'Language');
  return headers;
}

/**
 * One-time utility — run manually from the Apps Script editor.
 * Creates or updates the Applications sheet header row and styling.
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
  }

  var headers = getApplicationHeaderRow_();
  var existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  var hasHeader = existing[0] === 'Timestamp';

  if (!hasHeader) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange
    .setBackground(BRAND_GREEN)
    .setFontColor('#ffffff')
    .setFontWeight('bold')
    .setHorizontalAlignment('center');
  sheet.setRowHeight(1, 32);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
  sheet.setTabColor(BRAND_YELLOW);
}

/**
 * Web app POST entry point — receives JSON from the Careers form.
 * @param {GoogleAppsScript.Events.DoPost} e
 * @returns {GoogleAppsScript.Content.TextOutput}
 */
function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) || '{}';
    var data;
    try {
      data = JSON.parse(raw);
    } catch (parseError) {
      return jsonResponse_({ status: 'error', message: 'Invalid JSON payload.' });
    }

    var sheet = getOrCreateApplicationsSheet_();
    var timestamp = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      'yyyy-MM-dd HH:mm:ss'
    );

    var cvUrl = '—';
    if (data.fileBase64 && data.fileName) {
      try {
        cvUrl = saveCvToDrive_(data.fileName, data.mimeType, data.fileBase64, data.fullName);
      } catch (cvError) {
        Logger.log('CV save failed: ' + cvError.toString());
        cvUrl = 'CV_SAVE_ERROR: ' + cvError.toString();
      }
    }

    var row = [timestamp];
    for (var i = 0; i < APPLICATION_FIELD_KEYS.length; i++) {
      var key = APPLICATION_FIELD_KEYS[i];
      row.push(data[key] != null ? String(data[key]) : '');
    }
    row.push(cvUrl);
    row.push(normalizeLang_(data.lang));

    sheet.appendRow(row);

    try {
      if (data.email) {
        sendApplicantEmail_(data, cvUrl);
      }
      sendHrEmail_(data, cvUrl);
    } catch (emailError) {
      Logger.log('Email sending failed: ' + emailError.toString());
    }

    return jsonResponse_({ status: 'success' });
  } catch (error) {
    Logger.log('doPost error: ' + error.toString());
    return jsonResponse_({ status: 'error', message: error.toString() });
  }
}

/**
 * Web app GET entry point — health check for deployment verification.
 * @param {GoogleAppsScript.Events.DoGet} e
 * @returns {GoogleAppsScript.Content.TextOutput}
 */
function doGet(e) {
  return jsonResponse_({
    status: 'ok',
    service: 'King Banh Mi Careers',
    sheet: CONFIG.SHEET_NAME,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Saves an uploaded CV to Google Drive and returns a shareable view URL.
 * @param {string} fileName
 * @param {string} mimeType
 * @param {string} fileBase64
 * @param {string} fullName
 * @returns {string}
 */
function saveCvToDrive_(fileName, mimeType, fileBase64, fullName) {
  var maxBytes = CONFIG.MAX_FILE_MB * 1024 * 1024;
  var decoded = Utilities.base64Decode(fileBase64);
  if (decoded.length > maxBytes) {
    throw new Error('CV exceeds ' + CONFIG.MAX_FILE_MB + 'MB limit.');
  }

  var folder = getOrCreateDriveFolder_(CONFIG.DRIVE_FOLDER_NAME);
  var ext = '';
  var match = String(fileName).match(/(\.[a-zA-Z0-9]+)$/);
  if (match) ext = match[1];

  var safeName = String(fullName || 'Applicant')
    .replace(/[^\w\s.-]/g, '')
    .replace(/\s+/g, '_')
    .trim() || 'Applicant';
  var dateStamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd');
  var stampedName = safeName + '_' + dateStamp + ext;

  var blob = Utilities.newBlob(decoded, mimeType || 'application/octet-stream', stampedName);
  var file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file.getUrl();
}

/**
 * Sends the bilingual branded auto-reply to the applicant.
 * @param {Object} data
 * @param {string} cvUrl
 */
function sendApplicantEmail_(data, cvUrl) {
  var lang = normalizeLang_(data.lang);
  var built = buildApplicantEmail(data, lang);
  MailApp.sendEmail({
    to: data.email,
    subject: built.subject,
    body: built.plainText,
    htmlBody: built.htmlBody,
    name: CONFIG.FROM_NAME,
  });
}

/**
 * Sends an internal HR notification email.
 * @param {Object} data
 * @param {string} cvUrl
 */
function sendHrEmail_(data, cvUrl) {
  var built = buildHrEmail(data, cvUrl);
  MailApp.sendEmail({
    to: CONFIG.HR_EMAIL,
    subject: built.subject,
    body: built.plainText,
    htmlBody: built.htmlBody,
    name: CONFIG.FROM_NAME,
  });
}

/** @type {{ en: Object, es: Object }} */
var EMAIL_COPY = {
  en: {
    subject: "We've received your application — King Banh Mi",
    bannerTitle: 'CAREERS',
    greeting: 'Dear {name},',
    paragraph1:
      'Thank you for submitting your application to <strong>King Banh Mi</strong>. We have added your information to our talent pool{positionPhrase}.',
    paragraph2: 'When a suitable role opens up, our recruiting team will be in touch.',
    paragraph3: 'We look forward to the possibility of working together.',
    signOff: 'Best regards,',
    teamLine: 'King Banh Mi Careers Team',
    tagline: 'Born in Vietnam, Craved Everywhere.',
    ctaLabel: 'Visit King Banh Mi',
    footerLabel: 'Careers',
    positionFor: ' for <strong>{position}</strong>',
    positionDefault: '',
  },
  es: {
    subject: 'Hemos recibido su solicitud — King Banh Mi',
    bannerTitle: 'EMPLEO',
    greeting: 'Estimado/a {name},',
    paragraph1:
      'Gracias por enviar su solicitud a <strong>King Banh Mi</strong>. Hemos agregado su información a nuestro banco de talento{positionPhrase}.',
    paragraph2:
      'Cuando se abra un puesto adecuado, nuestro equipo de reclutamiento se pondrá en contacto con usted.',
    paragraph3: 'Esperamos con interés la posibilidad de trabajar juntos.',
    signOff: 'Atentamente,',
    teamLine: 'Equipo de Empleo de King Banh Mi',
    tagline: 'Born in Vietnam, Craved Everywhere.',
    ctaLabel: 'Visite King Banh Mi',
    footerLabel: 'Empleo',
    positionFor: ' para <strong>{position}</strong>',
    positionDefault: '',
  },
};

/**
 * Builds the branded applicant auto-reply email (HTML + plain text).
 * @param {Object} data
 * @param {string} lang
 * @returns {{ subject: string, htmlBody: string, plainText: string }}
 */
function buildApplicantEmail(data, lang) {
  var copy = EMAIL_COPY[lang] || EMAIL_COPY.en;
  var displayName = data.fullName || (lang === 'es' ? 'Solicitante' : 'Applicant');
  var safeName = escapeHtml_(displayName);
  var positionLabel = getPositionLabel_(data);
  var positionPhrase = '';
  if (positionLabel) {
    positionPhrase = copy.positionFor.replace('{position}', escapeHtml_(positionLabel));
  }

  var p1 = copy.paragraph1.replace('{positionPhrase}', positionPhrase);

  var bodyHtml =
    '<tr>' +
      '<td style="padding:32px 32px 8px 32px; font-family:Arial,Helvetica,sans-serif; color:#333333; font-size:15px; line-height:1.6;">' +
        '<p style="margin:0 0 16px 0; color:' + BRAND_GREEN + '; font-size:15px; line-height:1.6;">' +
          copy.greeting.replace('{name}', safeName) +
        '</p>' +
        '<p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;">' +
          p1.replace(/<strong>/g, '<strong style="color:' + BRAND_GREEN + ';">') +
        '</p>' +
        '<p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;">' + copy.paragraph2 + '</p>' +
        '<p style="margin:0; color:#333333; font-size:15px; line-height:1.6;">' + copy.paragraph3 + '</p>' +
      '</td>' +
    '</tr>' +
    '<tr>' +
      '<td style="padding:8px 32px 32px 32px; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:1.6;">' +
        '<p style="margin:0 0 8px 0; color:#333333; font-size:15px; line-height:1.6;">' + copy.signOff + '</p>' +
        '<p style="margin:0 0 4px 0; color:' + BRAND_GREEN + '; font-size:15px; font-weight:bold; line-height:1.6;">' + copy.teamLine + '</p>' +
        '<p style="margin:0 0 20px 0; color:' + BRAND_GREEN + '; font-size:15px; font-weight:bold; line-height:1.6;">' + copy.tagline + '</p>' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin:0;">' +
          '<tr>' +
            '<td align="center" bgcolor="' + BRAND_YELLOW + '" style="background-color:' + BRAND_YELLOW + '; border-radius:6px;">' +
              '<a href="' + CONFIG.WEBSITE_URL + '" target="_blank" style="display:inline-block; padding:12px 24px; font-family:Arial,Helvetica,sans-serif; font-size:14px; font-weight:bold; color:' + BRAND_GREEN + '; text-decoration:none; line-height:1.4;">' + copy.ctaLabel + '</a>' +
            '</td>' +
          '</tr>' +
        '</table>' +
      '</td>' +
    '</tr>';

  var htmlBody = buildBrandedEmailShell_(copy.bannerTitle, bodyHtml, copy.footerLabel);
  var plainPosition = positionLabel ? ' for ' + positionLabel : '';
  var plainText =
    copy.greeting.replace('{name}', displayName) + '\n\n' +
    stripHtml_(p1).replace('{positionPhrase}', plainPosition) + '\n\n' +
    copy.paragraph2 + '\n\n' +
    copy.paragraph3 + '\n\n' +
    copy.signOff + '\n' +
    copy.teamLine + '\n' +
    copy.tagline + '\n\n' +
    CONFIG.WEBSITE_URL;

  return {
    subject: copy.subject,
    htmlBody: htmlBody,
    plainText: plainText,
  };
}

/**
 * Builds the internal HR notification email (HTML + plain text).
 * @param {Object} data
 * @param {string} cvUrl
 * @returns {{ subject: string, htmlBody: string, plainText: string }}
 */
function buildHrEmail(data, cvUrl) {
  var positionLabel = getPositionLabel_(data);
  var subject = 'New application — ' + (data.fullName || 'Applicant') + ' (' + (positionLabel || 'General') + ')';
  var lang = normalizeLang_(data.lang);
  var cvCell = cvUrl && cvUrl !== '—'
    ? '<a href="' + escapeHtml_(cvUrl) + '">' + escapeHtml_(cvUrl) + '</a>'
    : '—';

  var rows = '';
  var plainLines = [];
  rows += summaryRow_('Full Name', data.fullName);
  plainLines.push('Full Name: ' + (data.fullName || ''));
  rows += summaryRow_('Email', data.email);
  plainLines.push('Email: ' + (data.email || ''));
  rows += summaryRow_('Phone', data.phone);
  plainLines.push('Phone: ' + (data.phone || ''));
  rows += summaryRow_('Date of Birth', data.dateOfBirth);
  plainLines.push('Date of Birth: ' + (data.dateOfBirth || ''));
  rows += summaryRow_('Gender', data.gender);
  plainLines.push('Gender: ' + (data.gender || ''));
  rows += summaryRow_('Address', data.address);
  plainLines.push('Address: ' + (data.address || ''));
  rows += summaryRow_('Area of Interest', positionLabel);
  plainLines.push('Area of Interest: ' + (positionLabel || ''));
  rows += summaryRow_('Preferred Branch', data.preferredBranch);
  plainLines.push('Preferred Branch: ' + (data.preferredBranch || ''));
  rows += summaryRow_('Employment Type', data.employmentType);
  plainLines.push('Employment Type: ' + (data.employmentType || ''));
  rows += summaryRow_('Expected Salary', data.expectedSalary);
  plainLines.push('Expected Salary: ' + (data.expectedSalary || ''));
  rows += summaryRow_('Available Start Date', data.availableStartDate);
  plainLines.push('Available Start Date: ' + (data.availableStartDate || ''));
  rows += summaryRow_('Education', data.education);
  plainLines.push('Education: ' + (data.education || ''));
  rows += summaryRow_('Years of Experience', data.yearsOfExperience);
  plainLines.push('Years of Experience: ' + (data.yearsOfExperience || ''));
  rows += summaryRow_('Last Workplace', data.lastWorkplace);
  plainLines.push('Last Workplace: ' + (data.lastWorkplace || ''));
  rows += summaryRow_('Experience Description', data.experienceDescription);
  plainLines.push('Experience Description: ' + (data.experienceDescription || ''));
  rows += summaryRow_('Nights/Weekends', data.canWorkNightsWeekends);
  plainLines.push('Nights/Weekends: ' + (data.canWorkNightsWeekends || ''));
  rows += summaryRow_('F&B Experience', data.hasFnBExperience);
  plainLines.push('F&B Experience: ' + (data.hasFnBExperience || ''));
  rows += summaryRow_('Hear About Us', data.hearAboutUs);
  plainLines.push('Hear About Us: ' + (data.hearAboutUs || ''));
  rows += summaryRow_('Notes', data.notes);
  plainLines.push('Notes: ' + (data.notes || ''));
  rows += summaryRow_('Privacy Consent', data.privacyConsent);
  plainLines.push('Privacy Consent: ' + (data.privacyConsent || ''));
  rows += summaryRow_('CV Link', cvCell, true);
  plainLines.push('CV Link: ' + (cvUrl && cvUrl !== '—' ? cvUrl : '—'));
  rows += summaryRow_('Language', lang);
  plainLines.push('Language: ' + lang);

  var htmlBody =
    '<p style="font-family:Arial,Helvetica,sans-serif; font-size:15px; color:#333333;">A new talent-pool application has been submitted.</p>' +
    '<table cellpadding="6" cellspacing="0" border="1" style="border-collapse:collapse; font-family:Arial,Helvetica,sans-serif; font-size:14px; color:#333333; width:100%; max-width:560px;">' +
      rows +
    '</table>';

  return {
    subject: subject,
    htmlBody: htmlBody,
    plainText: 'A new talent-pool application has been submitted.\n\n' + plainLines.join('\n'),
  };
}

/**
 * Wraps email body content in the branded King Banh Mi HTML shell.
 * @param {string} bannerTitle
 * @param {string} bodyHtml
 * @param {string} footerLabel
 * @returns {string}
 */
function buildBrandedEmailShell_(bannerTitle, bodyHtml, footerLabel) {
  return (
    '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; margin:0; padding:24px 0;">' +
      '<tr>' +
        '<td align="center" style="padding:0;">' +
          '<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid #e0e0e0;">' +
            '<tr>' +
              '<td bgcolor="' + BRAND_GREEN + '" align="center" style="background-color:' + BRAND_GREEN + '; padding:32px 24px; text-align:center;">' +
                '<img src="' + CONFIG.LOGO_URL + '" alt="King Banh Mi" width="80" height="80" style="display:block; margin:0 auto 16px auto; border:0; outline:none; text-decoration:none;" />' +
                '<p style="margin:0 0 8px 0; color:' + BRAND_YELLOW + '; font-size:22px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; font-family:Arial,Helvetica,sans-serif; line-height:1.3;">' + bannerTitle + '</p>' +
                '<p style="margin:0; color:#ffffff; font-size:13px; font-style:italic; font-family:Arial,Helvetica,sans-serif; line-height:1.4;">Born in Vietnam, Craved Everywhere.</p>' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td bgcolor="' + BRAND_YELLOW + '" style="background-color:' + BRAND_YELLOW + '; height:6px; line-height:6px; font-size:1px; padding:0;">&nbsp;</td>' +
            '</tr>' +
            bodyHtml +
          '</table>' +
          '<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; margin-top:0;">' +
            '<tr>' +
              '<td align="center" style="padding:16px 12px; text-align:center; font-family:Arial,Helvetica,sans-serif; color:#999999; font-size:12px; line-height:1.5; background-color:#f5f5f5;">' +
                'KING BANH MI &nbsp;|&nbsp; Born in Vietnam, Craved Everywhere. &nbsp;|&nbsp; ' + footerLabel +
              '</td>' +
            '</tr>' +
          '</table>' +
        '</td>' +
      '</tr>' +
    '</table>'
  );
}

/**
 * Returns the Applications sheet, creating it with headers if missing.
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function getOrCreateApplicationsSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    setupSheet();
  } else if (sheet.getLastRow() === 0) {
    setupSheet();
  }
  return sheet;
}

/**
 * Finds or creates a Drive folder by name.
 * @param {string} folderName
 * @returns {GoogleAppsScript.Drive.Folder}
 */
function getOrCreateDriveFolder_(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
}

/**
 * Normalizes the applicant language code to "en" or "es".
 * @param {string} lang
 * @returns {"en"|"es"}
 */
function normalizeLang_(lang) {
  return lang === 'es' ? 'es' : 'en';
}

/**
 * Resolves the display position label from submitted data.
 * @param {Object} data
 * @returns {string}
 */
function getPositionLabel_(data) {
  if (data.interestedPosition === 'Other' && data.interestedPositionOther) {
    return data.interestedPositionOther;
  }
  return data.interestedPosition || '';
}

/**
 * Builds one summary table row for HR email.
 * @param {string} label
 * @param {string} value
 * @param {boolean=} isHtml
 * @returns {string}
 */
function summaryRow_(label, value, isHtml) {
  var cellValue = isHtml ? value : escapeHtml_(value || '');
  return (
    '<tr>' +
      '<td style="font-weight:bold; background:#f9f9f9; width:38%;">' + escapeHtml_(label) + '</td>' +
      '<td>' + cellValue + '</td>' +
    '</tr>'
  );
}

/**
 * Returns a JSON ContentService response.
 * @param {Object} payload
 * @returns {GoogleAppsScript.Content.TextOutput}
 */
function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

/**
 * Escapes HTML special characters.
 * @param {string} text
 * @returns {string}
 */
function escapeHtml_(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Strips HTML tags for plain-text email fallback.
 * @param {string} html
 * @returns {string}
 */
function stripHtml_(html) {
  return String(html).replace(/<[^>]+>/g, '');
}
