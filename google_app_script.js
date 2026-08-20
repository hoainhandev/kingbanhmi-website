function doPost(e) {
  try {
    var params = (e && e.parameter) || {};
    var formType = params.formType || 'franchise';

    if (formType === 'career') {
      return handleCareerPost(params);
    }

    return handleFranchisePost(params);
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
  }
  return ss.getActiveSheet();
}

function handleFranchisePost(params) {
  var sheet = getSheetByNameOrActive('Franchise');

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

  // Column order: Timestamp + franchise fields (see previous header comments A–AJ)
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
    Logger.log('Auto-reply email failed: ' + emailError.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleCareerPost(params) {
  var sheet = getSheetByNameOrActive('Career');

  var fullName = params.fullName || '';
  var dateOfBirth = params.dateOfBirth || '';
  var gender = params.gender || '';
  var phone = params.phone || '';
  var email = params.email || '';
  var address = params.address || '';
  var position = params.position || '';
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
  var cvUrl = '';

  if (fileBase64 && fileName) {
    try {
      cvUrl = saveCareerCvToDrive(fileName, mimeType, fileBase64, fullName);
    } catch (cvError) {
      Logger.log('CV save failed: ' + cvError.toString());
      cvUrl = 'CV_SAVE_ERROR: ' + cvError.toString();
    }
  }

  // Career sheet columns:
  // A: Timestamp
  // B: fullName
  // C: dateOfBirth
  // D: gender
  // E: phone
  // F: email
  // G: address
  // H: position
  // I: preferredBranch
  // J: employmentType
  // K: expectedSalary
  // L: availableStartDate
  // M: education
  // N: yearsOfExperience
  // O: lastWorkplace
  // P: experienceDescription
  // Q: canWorkNightsWeekends
  // R: hasFnBExperience
  // S: hearAboutUs
  // T: notes
  // U: privacyConsent
  // V: cvFileName
  // W: cvUrl
  sheet.appendRow([
    timestamp,
    fullName,
    dateOfBirth,
    gender,
    phone,
    email,
    address,
    position,
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
    fileName,
    cvUrl
  ]);

  var rowNumber = sheet.getLastRow();
  var response = { result: 'success', formType: 'career', row: rowNumber, cvUrl: cvUrl };

  try {
    if (email) {
      sendCareerAutoReplyEmail(email, fullName, position);
      response.emailSent = true;
    } else {
      response.emailSent = false;
      response.emailError = 'No email address provided';
    }
  } catch (emailError) {
    response.emailSent = false;
    response.emailError = emailError.toString();
    Logger.log('Career auto-reply email failed: ' + emailError.toString());
  }

  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

function saveCareerCvToDrive(fileName, mimeType, fileBase64, applicantName) {
  var folderName = 'KingBanhMi_Career_CVs';
  var folders = DriveApp.getFoldersByName(folderName);
  var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);

  var blob = Utilities.newBlob(
    Utilities.base64Decode(fileBase64),
    mimeType || 'application/octet-stream',
    fileName
  );

  var safeApplicant = (applicantName || 'applicant').replace(/[^\w\s.-]/g, '').trim() || 'applicant';
  var stampedName = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmmss') +
    '_' + safeApplicant + '_' + fileName;
  blob.setName(stampedName);

  var file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file.getUrl();
}

function sendCareerAutoReplyEmail(toEmail, fullName, position) {
  var displayName = fullName || 'Ứng viên';
  var safeName = escapeHtml(displayName);
  var safePosition = escapeHtml(position || 'vị trí đã chọn');
  var subject = 'Cảm ơn bạn đã ứng tuyển tại King Banh Mi';

  var htmlBody =
    '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; margin:0; padding:24px 0;">' +
      '<tr>' +
        '<td align="center" style="padding:0;">' +
          '<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid #e0e0e0;">' +
            '<tr>' +
              '<td bgcolor="#013a0f" align="center" style="background-color:#013a0f; padding:32px 24px; text-align:center;">' +
                '<img src="https://www.kingbanhmi.net/logo.png" alt="King Banh Mi" width="120" height="60" style="display:block; margin:0 auto 16px auto; border:0;" />' +
                '<p style="margin:0 0 8px 0; color:#FDB714; font-size:22px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; font-family:Arial,Helvetica,sans-serif;">CAREERS</p>' +
                '<p style="margin:0; color:#ffffff; font-size:13px; font-style:italic; font-family:Arial,Helvetica,sans-serif;">Born in Vietnam, Craved Everywhere.</p>' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td bgcolor="#FDB714" style="background-color:#FDB714; height:6px; line-height:6px; font-size:1px;">&nbsp;</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding:32px; font-family:Arial,Helvetica,sans-serif; color:#333333; font-size:15px; line-height:1.6;">' +
                '<p style="margin:0 0 16px 0; color:#013a0f;">Dear ' + safeName + ',</p>' +
                '<p style="margin:0 0 16px 0;">Cảm ơn bạn đã gửi hồ sơ ứng tuyển vị trí <strong style="color:#013a0f;">' + safePosition + '</strong> tại <strong style="color:#013a0f;">King Banh Mi</strong>.</p>' +
                '<p style="margin:0 0 16px 0;">Đội ngũ tuyển dụng của chúng tôi đã nhận được thông tin và sẽ xem xét hồ sơ. Nếu phù hợp, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>' +
                '<p style="margin:0 0 16px 0;">Best regards,</p>' +
                '<p style="margin:0 0 4px 0; color:#013a0f; font-weight:bold;">King Banh Mi Careers Team</p>' +
                '<p style="margin:0; color:#013a0f; font-weight:bold;">Born in Vietnam, Craved Everywhere.</p>' +
              '</td>' +
            '</tr>' +
          '</table>' +
          '<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%;">' +
            '<tr>' +
              '<td align="center" style="padding:16px 12px; font-family:Arial,Helvetica,sans-serif; color:#999999; font-size:12px; background-color:#f5f5f5;">' +
                'KING BANH MI &nbsp;|&nbsp; Born in Vietnam, Craved Everywhere. &nbsp;|&nbsp; Careers' +
              '</td>' +
            '</tr>' +
          '</table>' +
        '</td>' +
      '</tr>' +
    '</table>';

  MailApp.sendEmail({
    to: toEmail,
    subject: subject,
    htmlBody: htmlBody
  });
}

function sendFranchiseAutoReplyEmail(toEmail, fullName) {
  var displayName = fullName || 'Franchise Inquiry Applicant';
  var subject = 'Thank You for Your Interest in King Banh Mi Franchise';
  var safeName = escapeHtml(displayName);

  var htmlBody =
    '<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4; margin:0; padding:24px 0;">' +
      '<tr>' +
        '<td align="center" style="padding:0;">' +
          '<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid #e0e0e0;">' +
            '<tr>' +
              '<td bgcolor="#013a0f" align="center" style="background-color:#013a0f; padding:32px 24px; text-align:center;">' +
                '<img src="https://www.kingbanhmi.net/logo.png" alt="King Banh Mi" width="120" height="60" style="display:block; margin:0 auto 16px auto; border:0; outline:none; text-decoration:none;" />' +
                '<p style="margin:0 0 8px 0; color:#FDB714; font-size:22px; font-weight:bold; letter-spacing:1px; text-transform:uppercase; font-family:Arial,Helvetica,sans-serif; line-height:1.3;">FRANCHISE INQUIRY FORM</p>' +
                '<p style="margin:0; color:#ffffff; font-size:13px; font-style:italic; font-family:Arial,Helvetica,sans-serif; line-height:1.4;">Born in Vietnam, Craved Everywhere.</p>' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td bgcolor="#FDB714" style="background-color:#FDB714; height:6px; line-height:6px; font-size:1px; padding:0;">&nbsp;</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding:32px 32px 8px 32px; font-family:Arial,Helvetica,sans-serif; color:#333333; font-size:15px; line-height:1.6;">' +
                '<p style="margin:0 0 16px 0; color:#013a0f; font-size:15px; line-height:1.6;">Dear ' + safeName + ',</p>' +
                '<p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;">Thank you for your interest in becoming a <strong style="color:#013a0f;">King Banh Mi</strong> franchise partner. We have received your franchise inquiry form. Our franchise development team will review your information and contact you soon to discuss the next steps.</p>' +
                '<p style="margin:0 0 16px 0; color:#333333; font-size:15px; line-height:1.6;"><strong style="color:#013a0f;">King Banh Mi</strong> is expanding across the United States with a modern Vietnamese fast-casual restaurant and beverage concept built around authentic banh mi sandwiches, Vietnamese coffee, milk tea, sugarcane juice, and specialty beverages.</p>' +
                '<p style="margin:0; color:#333333; font-size:15px; line-height:1.6;">We look forward to learning more about your goals and market interest.</p>' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="padding:8px 32px 32px 32px; font-family:Arial,Helvetica,sans-serif; font-size:15px; line-height:1.6;">' +
                '<p style="margin:0 0 8px 0; color:#333333; font-size:15px; line-height:1.6;">Best regards,</p>' +
                '<p style="margin:0 0 4px 0; color:#013a0f; font-size:15px; font-weight:bold; line-height:1.6;">King Banh Mi Franchise Development Team</p>' +
                '<p style="margin:0 0 20px 0; color:#013a0f; font-size:15px; font-weight:bold; line-height:1.6;">Born in Vietnam, Craved Everywhere.</p>' +
                '<table cellpadding="0" cellspacing="0" border="0" style="margin:0;">' +
                  '<tr>' +
                    '<td align="center" bgcolor="#FDB714" style="background-color:#FDB714; border-radius:6px;">' +
                      '<a href="https://www.kingbanhmi.net/franchise" target="_blank" style="display:inline-block; padding:12px 24px; font-family:Arial,Helvetica,sans-serif; font-size:14px; font-weight:bold; color:#013a0f; text-decoration:none; line-height:1.4;">www.kingbanhmi.net/franchise</a>' +
                    '</td>' +
                  '</tr>' +
                '</table>' +
              '</td>' +
            '</tr>' +
          '</table>' +
          '<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; margin-top:0;">' +
            '<tr>' +
              '<td align="center" style="padding:16px 12px; text-align:center; font-family:Arial,Helvetica,sans-serif; color:#999999; font-size:12px; line-height:1.5; background-color:#f5f5f5;">' +
                'KING BANH MI &nbsp;|&nbsp; Born in Vietnam, Craved Everywhere. &nbsp;|&nbsp; Franchise Inquiry Form' +
              '</td>' +
            '</tr>' +
          '</table>' +
        '</td>' +
      '</tr>' +
    '</table>';

  MailApp.sendEmail({
    to: toEmail,
    subject: subject,
    htmlBody: htmlBody
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
