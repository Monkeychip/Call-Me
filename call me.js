function sendNotification() {
    // get the spreadsheet object
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // set the second sheet as active
  SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
  // fetch this sheet
  var sheet = spreadsheet.getActiveSheet();
  

// get cell where the number is located
var range = sheet.getRange('h5');
var range_value = range.getValues();

//Define Notification Details
      var recipients = ["555555555@vtext.com"];
  var subject = "CHINA PEAK waiting list is full";
      var body = sheet.getName() + " The number of participants is now " + range_value;
  //Check to see if column is A or B to trigger
      if (range_value = -1)
      { 
        
  //Send the Email
      MailApp.sendEmail(recipients, subject, body);
      }
  //End sendNotification
  Logger.log(range_value);
  }

 
