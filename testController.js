var axios = require('axios');
const fs = require('fs');
async function test(sf_job_id) {

  // Read the content of the file
const content = fs.readFileSync('sample.pdf');

// Encode the content to base64
const base64Content = Buffer.from(content).toString('base64');

var config = {
  method: 'POST',
 //  url: 'https://demand.my.salesforce.com/services/data/v53.0/sobjects/EmailTemplate/00X8c0000034VbDEAU/',
  // url: 'https://demand.my.salesforce.com/services/data/v53.0/composite/tree/EmailTemplate/',  //post
  //url: 'https://demand.my.salesforce.com/services/data/v53.0/composite/sobjects',
  url: 'https://demand.my.salesforce.com/services/data/v53.0/sobjects/Attachment',
  headers: { 
    'Authorization': 'Bearer 00D8c000007TWVk!ARYAQNsD4KCBaEhw8VXNgnpUEOIegnrt2VtkUhJ458QnkFImo4Lvgzpar8eG6R.O3rVzEtAoJdU3z3upBTzeo1nhFsVktS24', 
    'Content-Type': 'application/json' 
  },
  data: { 
    "Name": "sample.pdf",
    "ParentId": "00X8c0000034VfoEAE", // the ID of the email template
    "Body": base64Content
}
}; 

axios(config)
.then(function (response) {
  console.log(response.data); 
})
.catch(function (error) {
  console.log(JSON.stringify(error.response.data));
}); 

}  










module.exports = {
    test
}
// {
//   "records": [
//     {
//       "attributes": {
//         "type": "EmailTemplate",
//         "referenceId": "1"
//       },
//       "DeveloperName": "eeeeewwq",
//       "FolderId": "00D8c000007TWVkEAO",
//       "TemplateType": "custom",
//       'Name': 'eeeewwq', 
//       'Description': 'This is my email template',  
//       'Subject': 'Hello ', 
//       //'RelatedEntityType': 'Contact', 
//       'UiType': 'Aloha',
//      // 'Body': 'Dears {!Contact.FirstName}, Thanks for your interest in our product.',
//       'HtmlValue': "<html><body><p>Dear {!Contact.FirstName},</p><p>Thanks for your interest's in our product.</p></body></html>",
//       'isActive': true

//     }
//   ] 
// }


// {
//   "records": [
//     {
//       "attributes": {
//         "type": "EmailTemplate",
//         "referenceId": "1"
//       },
//       "DeveloperName": "img pdf temp",
//       "FolderId": "00D8c000007TWVkEAO",
//       "TemplateType": "custom",
//       'Name': 'img pdf temp', 
//       'Description': 'This is my email template',  
//       'Subject': 'Hello ', 
//       //'RelatedEntityType': 'Contact', 
//       'UiType': 'Aloha',
//      // 'Body': 'Dears {!Contact.FirstName}, Thanks for your interest in our product.',
//       'HtmlValue': "<html><body><p>Dear {!Contact.FirstName},</p><p>Thanks for your interest's in our product.</p></body></html>",
//       'isActive': true

//     }
//   ] 
// }