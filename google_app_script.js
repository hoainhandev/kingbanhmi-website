function doPost(e) {
  try {
    // ID của file Google Sheets để lưu data
    // Thay đổi ID này thành ID của spreadsheet thực tế của bạn
    // Ví dụ: https://docs.google.com/spreadsheets/d/1ABC123xxx.../edit -> ID là 1ABC123xxx...
    // Mặc định nó lấy file hiện tại mà script đang gắn vào
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Nếu script không đính kèm vào sheet nào, bạn có thể comment dòng trên và dùng dòng dưới:
    // var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID_HERE').getActiveSheet();

    // Lấy dữ liệu gửi từ frontend (được đóng gói nhờ FormData)
    var firstName = e.parameter.firstName || "";
    var lastName = e.parameter.lastName || "";
    var email = e.parameter.email || "";
    var phone = e.parameter.phone || "";
    var city = e.parameter.city || "";
    var state = e.parameter.state || "";
    var investmentRange = e.parameter.investmentRange || "";
    var message = e.parameter.message || "";
    
    // Timestamp lúc submit
    var timestamp = new Date();

    // Append 1 dòng mới vào dưới cùng của sheet
    // Lưu ý: Thứ tự các biến phải khớp với thứ tự các cột (A, B, C...) trong file Excel của bạn!
    sheet.appendRow([
      timestamp, 
      firstName, 
      lastName, 
      email, 
      phone, 
      city, 
      state, 
      investmentRange, 
      message
    ]);

    // Trả về JSON báo thành công (Tuy nhiên vì fetch API từ react gọi kèm mode 'no-cors' nên frontend không đọc được cái này, vẫn cần phải có để Google không báo lỗi)
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Nếu có lỗi, trả về lỗi báo error
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
