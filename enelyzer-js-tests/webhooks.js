var idpurl = "https://staging-gateway.enprove.be";


// post meter reading webhook
var formdata = new FormData();
formdata.append("blah", "{\"jsonbody\": \"test\"}");
formdata.append("file", fileInput.files[0], "_.snowworld.com.chained.crt");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/webhooks/tasks/meter-reading", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// post test json parser
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "submissionId": "768a4d6f-724c-44f8-b8f8-608f6058681d",
  "accountId": 563,
  "formId": 4287,
  "formName": "Meter Reading Production",
  "formVersion": 4,
  "dispatchId": 17716,
  "emailRecipientsOnSubmit": "",
  "resubmit": false,
  "userId": 4169,
  "userName": "gilles@trust1team.com",
  "alerts": [],
  "formMetaData": {
    "deviceMetaData": {
      "appType": "web",
      "appVersion": "1.0.60.c",
      "device": "web"
    },
    "fieldMetaData": [
      {
        "fieldKey": "meterIndex",
        "timestamp": "2022-11-29T16:35:18+01:00"
      }
    ],
    "startFormTimeStamp": "2022-11-29T16:33:59+01:00",
    "endFormTimeStamp": "2022-11-29T16:35:20+01:00"
  },
  "updatedAt": "2022-11-29T16:35:20+01:00",
  "workflowData": {
    "stage": "Form Submit Actions"
  },
  "orgName": "DemoClient",
  "orgId": "70361904-0dd0-44ed-97da-26bf72c86471",
  "assetType": "BUILDING",
  "entityName": "Coach House",
  "entityId": "5e6b63ac-5ded-42e1-9d01-b0c412983550",
  "buildingLocation": {
    "longitude": 3.735975,
    "latitude": 51.0491128
  },
  "address": "Nieuwebosstraat 5, 9000 Gent, Belgium",
  "meterId": "6",
  "eanCorrect": 1,
  "meterIndex": 120,
  "exampleMeterPicture": "563_9d093e62-5a9f-4d8a-8346-988b74070612.jpeg",
  "newPicture": "563_768a4d6f-724c-44f8-b8f8-608f6058681d_8b27a5e7-abc1-4d91-9903-a373e458f795.jpeg",
  "enelyzerTaskId": "f8376e47-b199-4d62-a626-97202d3eb748",
  "submitId": "7ed7662a-b9ba-4f52-9966-d3ed24b63717"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/webhooks/tasks/TASK_INDEX/test", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// get recall
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/webhooks/tasks/recall-dispatched", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
// get complete
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/webhooks/tasks/complete?taskId&submittedDispatchId", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));