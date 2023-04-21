var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
//post create audit
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "sourceRoot": "test",
  "sourceLabel": "test",
  "groupId": "test",
  "groupName": "test",
  "roleId": "test",
  "roleName": "test",
  "userId": "test",
  "userName": "test",
  "action": "test",
  "timestamp": "2022-04-20T14:55:06.466740Z"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/audits", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//post publish audit
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "sourceRoot": "gamiseta",
  "sourceLabel": "test",
  "groupId": "test",
  "groupName": "test",
  "roleId": "test",
  "roleName": "test",
  "userId": "test",
  "userName": "test",
  "action": "test",
  "timestamp": "2022-04-20T14:55:06.466740Z"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/audits/publish", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//post search audits
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 100,
  "fromTime": "2021-04-20T14:55:06.466740Z",
  "toTime": "2022-04-20T14:55:06.466740Z"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/audits/search", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));