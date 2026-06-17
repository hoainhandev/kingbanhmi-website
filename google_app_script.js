function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Nếu script không đính kèm vào sheet nào, comment dòng trên và dùng dòng dưới:
    // var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE').getActiveSheet();

    var params = e.parameter || {};

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

    // Column order for sheet header row (A through AH):
    // A:  Timestamp
    // B:  fullName
    // C:  phone
    // D:  email
    // E:  cityState
    // F:  bestTimeToContact
    // G:  preferredContact
    // H:  opportunityType
    // I:  desiredMarket
    // J:  hasLocationInMind
    // K:  locationDetails
    // L:  desiredOpenTimeline
    // M:  availableCapital
    // N:  planningFinancing
    // O:  preApprovedFinancing
    // P:  readyForFranchiseFee
    // Q:  hasRestaurantExperience
    // R:  restaurantExperienceDetails
    // S:  hasOwnedBusiness
    // T:  ownedBusinessType
    // U:  currentlyOperatingBusiness
    // V:  currentBusinessDetails
    // W:  ownerOperatorPlan
    // X:  numberOfLocations
    // Y:  whatAttracts
    // Z:  whatAttractsOther
    // AA: whyWorkInMarket
    // AB: involvementLevel
    // AC: hasPartnersInvestors
    // AD: partnersDetails
    // AE: willingToFollowStandards
    // AF: hearAboutUs
    // AG: hearAboutUsOther
    // AH: questionsComments
    // AI: applicantName
    // AJ: acknowledgment
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
    var response = { result: 'success', row: rowNumber };

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
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendFranchiseAutoReplyEmail(toEmail, fullName) {
  var displayName = fullName || 'Franchise Inquiry Applicant';
  var subject = 'Thank You for Your Interest in King Banh Mi Franchise';

  var htmlBody =
    '<p>Dear ' + escapeHtml(displayName) + ',</p>' +
    '<p>Thank you for your interest in becoming a <strong>King Banh Mi</strong> franchise partner. ' +
    'We have received your franchise inquiry form. Our franchise development team will review your information ' +
    'and contact you soon to discuss the next steps.</p>' +
    '<p><strong>King Banh Mi</strong> is expanding across the United States with a modern Vietnamese fast-casual ' +
    'restaurant and beverage concept built around authentic banh mi sandwiches, Vietnamese coffee, milk tea, ' +
    'sugarcane juice, and specialty beverages.</p>' +
    '<p>We look forward to learning more about your goals and market interest.</p>' +
    '<p>Best regards,<br>' +
    '<strong>King Banh Mi Franchise Development Team</strong><br>' +
    'Born in Vietnam, Craved Everywhere.<br>' +
    '<a href="https://www.kingbanhmi.net/franchise">www.kingbanhmi.net/franchise</a></p>';

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
