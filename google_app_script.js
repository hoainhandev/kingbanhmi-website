/**
 * King Banh Mi — Google Apps Script (Franchise + Career forms)
 *
 * Deploy as Web App. Frontend posts FormData with formType = "franchise" | "career".
 *
 * Optional one-time setup in Apps Script editor:
 *   setupCareerHeaderRow()
 */

var CONFIG = {
  // Change this to your HR / recruiting inbox before deploy
  HR_NOTIFY_EMAIL: 'info@kingbanhmi.net',
  CAREER_SHEET_NAME: 'Career',
  FRANCHISE_SHEET_NAME: 'Franchise',
  CV_FOLDER_NAME: 'King Banh Mi - CV',
  BRAND_GREEN: '#013a0f',
  BRAND_YELLOW: '#FDB714',
  LOGO_URL: 'https://www.kingbanhmi.net/logo.png'
};

function doPost(e) {
  try {
    var params = (e && e.parameter) || {};
    var formType = params.formType || 'franchise';

    if (formType === 'career') {
      return handleCareer(params);
    }

    return handleFranchise(params);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheetByNameOrActive(preferredName) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (preferredName) {
    var named = ss.getSheetByName(preferredName);
    if (named) return named;
    // Create Career sheet automatically if missing
    if (preferredName === CONFIG.CAREER_SHEET_NAME) {
      var created = ss.insertSheet(preferredName);
      setupCareerHeaderRow_(created);
      return created;
    }
  }
  return ss.getActiveSheet();
}

/** Public: run once from Apps Script editor to style Career header row. */
function setupCareerHeaderRow() {
  var sheet = getSheetByNameOrActive(CONFIG.CAREER_SHEET_NAME);
  setupCareerHeaderRow_(sheet);
}

function setupCareerHeaderRow_(sheet) {
  var headers = [
    'Timestamp',
    'Full Name',
    'Date of Birth',
    'Gender',
    'Phone',
    'Email',
    'Address',
    'Interested Position',
    'Position Other',
    'Preferred Branch',
    'Employment Type',
    'Expected Salary',
    'Available Start Date',
    'Education',
    'Years of Experience',
    'Last Workplace',
    'Experience Description',
    'Nights/Weekends',
    'F&B Experience',
    'Hear About Us',
    'Notes',
    'Privacy Consent',
    'CV File Name',
    'CV Link'
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground(CONFIG.BRAND_GREEN)
    .setFontColor('#ffffff')
    .setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function handleFranchise(params) {
  var sheet = getSheetByNameOrActive(CONFIG.FRANCHISE_SHEET_NAME);

  var fullName = params.fullName || '';
  var phone = params.phone || '';
  var email = params.email || '';
  var cityState = params.cityState || '';
  var bestTimeToContact = params.bestTimeToContact || '';
  var preferredContact = params.preferredContact || '';
  var opportunityType = params.opportunityType || '';
  var desiredMarket = params.desiredMarket || '';
  var hasLocationInMind = params.hasLocationInMind || '';
  var locationDetails = params.locationDetails || '';
  var desiredOpenTimeline = params.desiredOpenTimeline || '';
  var availableCapital = params.availableCapital || '';
  var planningFinancing = params.planningFinancing || '';
  var preApprovedFinancing = params.preApprovedFinancing || '';
  var readyForFranchiseFee = params.readyForFranchiseFee || '';
  var hasRestaurantExperience = params.hasRestaurantExperience || '';
  var restaurantExperienceDetails = params.restaurantExperienceDetails || '';
  var hasOwnedBusiness = params.hasOwnedBusiness || '';
  var ownedBusinessType = params.ownedBusinessType || '';
  var currentlyOperatingBusiness = params.currentlyOperatingBusiness || '';
  var currentBusinessDetails = params.currentBusinessDetails || '';
  var ownerOperatorPlan = params.ownerOperatorPlan || '';
  var numberOfLocations = params.numberOfLocations || '';
  var whatAttracts = params.whatAttracts || '';
  var whatAttractsOther = params.whatAttractsOther || '';
  var whyWorkInMarket = params.whyWorkInMarket || '';
  var involvementLevel = params.involvementLevel || '';
  var hasPartnersInvestors = params.hasPartnersInvestors || '';
  var partnersDetails = params.partnersDetails || '';
  var willingToFollowStandards = params.willingToFollowStandards || '';
  var hearAboutUs = params.hearAboutUs || '';
  var hearAboutUsOther = params.hearAboutUsOther || '';
  var questionsComments = params.questionsComments || '';
  var applicantName = params.applicantName || '';
  var acknowledgment = params.acknowledgment || '';

  var timestamp = new Date();

  sheet.appendRow([
    timestamp,
    fullName,
    phone,
    email,
    cityState,
    bestTimeToContact,
    preferredContact,
    opportunityType,
    desiredMarket,
    hasLocationInMind,
    locationDetails,
    desiredOpenTimeline,
    availableCapital,
    planningFinancing,
    preApprovedFinancing,
    readyForFranchiseFee,
    hasRestaurantExperience,
    restaurantExperienceDetails,
    hasOwnedBusiness,
    ownedBusinessType,
    currentlyOperatingBusiness,
    currentBusinessDetails,
    ownerOperatorPlan,
    numberOfLocations,
    whatAttracts,
    whatAttractsOther,
    whyWorkInMarket,
    involvementLevel,
    hasPartnersInvestors,
    partnersDetails,
    willingToFollowStandards,
    hearAboutUs,
    hearAboutUsOther,
    questionsComments,
    applicantName,
    acknowledgment
  ]);

  var rowNumber = sheet.getLastRow();
  var response = { result: 'success', formType: 'franchise', row: rowNumber };

  try {
    if (email) {
      sendFranchiseAutoReplyEmail(email, fullName);
      response.emailSent = true;
    } else {
      response.emailSent = false;
      response.emailError = 'No email address provided';
    }
  } catch (emailError) {
    response.emailSent = false;
    response.emailError = emailError.toString();
    Logger.log('Franchise auto-reply failed: ' + emailError.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleCareer(params) {
  var sheet = getSheetByNameOrActive(CONFIG.CAREER_SHEET_NAME);

  // Ensure header exists if sheet was empty
  if (sheet.getLastRow() === 0) {
    setupCareerHeaderRow_(sheet);
  }

  var fullName = params.fullName || '';
  var dateOfBirth = params.dateOfBirth || '';
  var gender = params.gender || '';
  var phone = params.phone || '';
  var email = params.email || '';
  var address = params.address || '';
  var interestedPosition = params.interestedPosition || '';
  var interestedPositionOther = params.interestedPositionOther || '';
  var preferredBranch = params.preferredBranch || '';
  var employmentType = params.employmentType || '';
  var expectedSalary = params.expectedSalary || '';
  var availableStartDate = params.availableStartDate || '';
  var education = params.education || '';
  var yearsOfExperience = params.yearsOfExperience || '';
  var lastWorkplace = params.lastWorkplace || '';
  var experienceDescription = params.experienceDescription || '';
  var canWorkNightsWeekends = params.canWorkNightsWeekends || '';
  var hasFnBExperience = params.hasFnBExperience || '';
  var hearAboutUs = params.hearAboutUs || '';
  var notes = params.notes || '';
  var privacyConsent = params.privacyConsent || '';
  var fileName = params.fileName || '';
  var mimeType = params.mimeType || '';
  var fileBase64 = params.fileBase64 || '';

  var timestamp = new Date();
  var cvUrl = '—';
  var storedFileName = '—';

  if (fileBase64 && fileName) {
    try {
      var saved = saveCareerCvToDrive(fileName, mimeType, fileBase64, fullName);
      cvUrl = saved.url;
      storedFileName = saved.name;
    } catch (cvError) {
      Logger.log('CV save failed: ' + cvError.toString());
      cvUrl = 'CV_SAVE_ERROR: ' + cvError.toString();
      storedFileName = fileName;
    }
  }

  sheet.appendRow([
    timestamp,
    fullName,
    dateOfBirth,
    gender,
    phone,
    email,
    address,
    interestedPosition,
    interestedPositionOther,
    preferredBranch,
    employmentType,
    expectedSalary,
    availableStartDate,
    education,
    yearsOfExperience,
    lastWorkplace,
    experienceDescription,
    canWorkNightsWeekends,
    hasFnBExperience,
    hearAboutUs,
    notes,
    privacyConsent,
    storedFileName,
    cvUrl
  ]);

  var rowNumber = sheet.getLastRow();
  var response = {
    result: 'success',
    formType: 'career',
    row: rowNumber,
    cvUrl: cvUrl
  };

  try {
    if (email) {
      sendCareerAutoReplyEmail(email, fullName, interestedPosition, interestedPositionOther);
      response.emailSent = true;
    } else {
      response.emailSent = false;
      response.emailError = 'No email address provided';
    }
  } catch (emailError) {
    response.emailSent = false;
    response.emailError = emailError.toString();
    Logger.log('Career auto-reply failed: ' + emailError.toString());
  }

  try {
    if (CONFIG.HR_NOTIFY_EMAIL) {
      sendCareerHrNotifyEmail({
        fullName: fullName,
        email: email,
        phone: phone,
        interestedPosition: interestedPosition,
        interestedPositionOther: interestedPositionOther,
        preferredBranch: preferredBranch,
        employmentType: employmentType,
        cvUrl: cvUrl
      });
      response.hrNotified = true;
    }
  } catch (hrError) {
    response.hrNotified = false;
    response.hrError = hrError.toString();
    Logger.log('HR notify failed: ' + hrError.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

function saveCareerCvToDrive(fileName, mimeType, fileBase64, applicantName) {
  var folders = DriveApp.getFoldersByName(CONFIG.CV_FOLDER_NAME);
  var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(CONFIG.CV_FOLDER_NAME);

  var ext = '';
  var match = String(fileName).match(/(\.[a-zA-Z0-9]+)$/);
  if (match) ext = match[1];

  var safeName = String(applicantName || 'Applicant')
    .replace(/[^\w\s.-]/g, '')
    .replace(/\s+/g, '_')
    .trim() || 'Applicant';
  var dateStamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd');
  var stampedName = safeName + '_' + dateStamp + ext;

  var blob = Utilities.newBlob(
    Utilities.base64Decode(fileBase64),
    mimeType || 'application/octet-stream',
    stampedName
  );

  var file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return { url: file.getUrl(), name: stampedName };
}

function buildBrandedEmailShell(bannerTitle, bodyHtml, footerLabel) {
  return (
    '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; margin:0; padding:24px 0;">' +
      '<tr>' +
        '<td align="center" style="padding:0;">' +
          '<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid #e0e0e0;">' +
            '<tr>' +
              '<td bgcolor="' + CONFIG.BRAND_GREEN + '" align="center" style="background-color:' + CONFIG.BRAND_GREEN + '; padding:32px 24px; text-align:center;">' +
                '<img src="' + CONFIG.LOGO_URL + '" alt="King Banh Mi" width="80" height="80" style="display:block; margin:0 auto 16px auto; border:0; outline:none; text-decoration:none;" />' +
                '<p style="margin:0 0 8px 0; color:' + CONFIG.BRAND_YELLOW + '; font-size:22px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; font-family:Arial,Helvetica,sans-serif; line-height:1.3;">' + bannerTitle + '</p>' +
                '<p style="margin:0; color:#ffffff; font-size:13px; font-style:italic; font-family:Arial,Helvetica,sans-serif; line-height:1.4;">Born in Vietnam, Craved Everywhere.</p>' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td bgcolor="' + CONFIG.BRAND_YELLOW + '" style="background-color:' + CONFIG.BRAND_YELLOW + '; height:6px; line-height:6px; font-size:1px; padding:0;">&nbsp;</td>' +
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

function sendCareerAutoReplyEmail(toEmail, fullName, interestedPosition, interestedPositionOther) {
  var displayName = fullName || 'Applicant';
  var safeName = escapeHtml(displayName);
  var positionLabel = interestedPosition === 'Other' && interestedPositionOther
    ? interestedPositionOther
    : (interestedPosition || 'our talent pool');
  var safePosition = escapeHtml(positionLabel);
  var subject = 'Thanks for Applying to King Banh Mi';

  var bodyHtml =
    '<tr>' +
      '<td style="padding:32px 32px 8px 32px; font-family:Arial,Helvetica,sans-serif; color:#333333; font-size:15px; line-height:1.6;">' +
        '<p style="margin:0 0 16px 0; color:' + CONFIG.BRAND_GREEN + '; font-size:15px; line-height:1.6;">Dear ' + safeName + ',</p>' +
        '<p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;">Thank you for submitting your application to <strong style="color:' + CONFIG.BRAND_GREEN + ';">King Banh Mi</strong>. We have added your information to our talent pool' +
        (safePosition ? ' for <strong style="color:' + CONFIG.BRAND_GREEN + ';">' + safePosition + '</strong>' : '') + '.</p>' +
        '<p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;">When a suitable role opens up, our recruiting team will be in touch.</p>' +
        '<p style="margin:0; color:#333333; font-size:15px; line-height:1.6;">We look forward to the possibility of working together.</p>' +
      '</td>' +
    '</tr>' +
    '<tr>' +
      '<td style="padding:8px 32px 32px 32px; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:1.6;">' +
        '<p style="margin:0 0 8px 0; color:#333333; font-size:15px; line-height:1.6;">Best regards,</p>' +
        '<p style="margin:0 0 4px 0; color:' + CONFIG.BRAND_GREEN + '; font-size:15px; font-weight:bold; line-height:1.6;">King Banh Mi Careers Team</p>' +
        '<p style="margin:0 0 20px 0; color:' + CONFIG.BRAND_GREEN + '; font-size:15px; font-weight:bold; line-height:1.6;">Born in Vietnam, Craved Everywhere.</p>' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin:0;">' +
          '<tr>' +
            '<td align="center" bgcolor="' + CONFIG.BRAND_YELLOW + '" style="background-color:' + CONFIG.BRAND_YELLOW + '; border-radius:6px;">' +
              '<a href="https://www.kingbanhmi.net/careers" target="_blank" style="display:inline-block; padding:12px 24px; font-family:Arial,Helvetica,sans-serif; font-size:14px; font-weight:bold; color:' + CONFIG.BRAND_GREEN + '; text-decoration:none; line-height:1.4;">www.kingbanhmi.net/careers</a>' +
            '</td>' +
          '</tr>' +
        '</table>' +
      '</td>' +
    '</tr>';

  MailApp.sendEmail({
    to: toEmail,
    subject: subject,
    htmlBody: buildBrandedEmailShell('CAREERS', bodyHtml, 'Careers')
  });
}

function sendCareerHrNotifyEmail(info) {
  var positionLabel = info.interestedPosition === 'Other' && info.interestedPositionOther
    ? info.interestedPositionOther
    : info.interestedPosition;
  var subject = '[Career] New application — ' + (info.fullName || 'Applicant');
  var cvLine = info.cvUrl && info.cvUrl !== '—'
    ? '<p><strong>CV:</strong> <a href="' + escapeHtml(info.cvUrl) + '">' + escapeHtml(info.cvUrl) + '</a></p>'
    : '<p><strong>CV:</strong> —</p>';

  var htmlBody =
    '<p>A new talent-pool application has been submitted.</p>' +
    '<p><strong>Name:</strong> ' + escapeHtml(info.fullName || '') + '<br>' +
    '<strong>Email:</strong> ' + escapeHtml(info.email || '') + '<br>' +
    '<strong>Phone:</strong> ' + escapeHtml(info.phone || '') + '<br>' +
    '<strong>Area of interest:</strong> ' + escapeHtml(positionLabel || '') + '<br>' +
    '<strong>Preferred branch:</strong> ' + escapeHtml(info.preferredBranch || '') + '<br>' +
    '<strong>Employment type:</strong> ' + escapeHtml(info.employmentType || '') + '</p>' +
    cvLine;

  MailApp.sendEmail({
    to: CONFIG.HR_NOTIFY_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

function sendFranchiseAutoReplyEmail(toEmail, fullName) {
  var displayName = fullName || 'Franchise Inquiry Applicant';
  var subject = 'Thank You for Your Interest in King Banh Mi Franchise';
  var safeName = escapeHtml(displayName);

  var bodyHtml =
    '<tr>' +
      '<td style="padding:32px 32px 8px 32px; font-family:Arial,Helvetica,sans-serif; color:#333333; font-size:15px; line-height:1.6;">' +
        '<p style="margin:0 0 16px 0; color:' + CONFIG.BRAND_GREEN + '; font-size:15px; line-height:1.6;">Dear ' + safeName + ',</p>' +
        '<p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;">Thank you for your interest in becoming a <strong style="color:' + CONFIG.BRAND_GREEN + ';">King Banh Mi</strong> franchise partner. We have received your franchise inquiry form. Our franchise development team will review your information and contact you soon to discuss the next steps.</p>' +
        '<p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;"><strong style="color:' + CONFIG.BRAND_GREEN + ';">King Banh Mi</strong> is expanding across the United States with a modern Vietnamese fast-casual restaurant and beverage concept built around authentic banh mi sandwiches, Vietnamese coffee, milk tea, sugarcane juice, and specialty beverages.</p>' +
        '<p style="margin:0; color:#333333; font-size:15px; line-height:1.6;">We look forward to learning more about your goals and market interest.</p>' +
      '</td>' +
    '</tr>' +
    '<tr>' +
      '<td style="padding:8px 32px 32px 32px; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:1.6;">' +
        '<p style="margin:0 0 8px 0; color:#333333; font-size:15px; line-height:1.6;">Best regards,</p>' +
        '<p style="margin:0 0 4px 0; color:' + CONFIG.BRAND_GREEN + '; font-size:15px; font-weight:bold; line-height:1.6;">King Banh Mi Franchise Development Team</p>' +
        '<p style="margin:0 0 20px 0; color:' + CONFIG.BRAND_GREEN + '; font-size:15px; font-weight:bold; line-height:1.6;">Born in Vietnam, Craved Everywhere.</p>' +
        '<table cellpadding="0" cellspacing="0" border="0" style="margin:0;">' +
          '<tr>' +
            '<td align="center" bgcolor="' + CONFIG.BRAND_YELLOW + '" style="background-color:' + CONFIG.BRAND_YELLOW + '; border-radius:6px;">' +
              '<a href="https://www.kingbanhmi.net/franchise" target="_blank" style="display:inline-block; padding:12px 24px; font-family:Arial,Helvetica,sans-serif; font-size:14px; font-weight:bold; color:' + CONFIG.BRAND_GREEN + '; text-decoration:none; line-height:1.4;">www.kingbanhmi.net/franchise</a>' +
            '</td>' +
          '</tr>' +
        '</table>' +
      '</td>' +
    '</tr>';

  MailApp.sendEmail({
    to: toEmail,
    subject: subject,
    htmlBody: buildBrandedEmailShell('FRANCHISE INQUIRY FORM', bodyHtml, 'Franchise Inquiry Form')
  });
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
