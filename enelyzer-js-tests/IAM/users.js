var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var assetgroupid = "0cb1d68e-36e7-40c5-9042-e0d7bf8d9217";
var userid = "e589b6af-09bb-4be5-8615-24d0cf462a77";

// post create user
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "vivien@trust1team.com",
  "firstName": "test2FirstName",
  "lastName": "test2LastName",
  "realmId": "enprove"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/users", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// post invite user
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "gilles+7@trust1team.com",
  "firstName": "gilles",
  "lastName": "test",
  "roleId": "a02c3675-be3c-42aa-832e-b25472f3aaca",
  "customMessage": "hello good sir"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/invite", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//post re-invite user /resend invite

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "customMessage": "hello good sir"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/re-invite", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//user invite accept
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
var raw = "";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/accept", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//user invite decline
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var raw = "";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/decline", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//search user in organisation
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationIds": [],
  "roleIds": [],
  "assetGroupIds": [],
  "name": null,
  "includeDisabled": false,
  "from": 0,
  "size": 100
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/users/search", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//search users
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationIds": [
    "36ea2a9d-a8cf-48cd-a064-f9c02f4ba1b3"
  ],
  "roleIds": [
    "b7bdd2b8-e921-4193-8f54-5556557cf5d3"
  ],
  "from": 0,
  "size": 100
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/users/search", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update user
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "gilles@trust1team.com",
  "firstName": " Gilles ",
  "lastName": "Platteeuw",
  "phoneNumber": "+32485789456"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/users/${userid}", requestOptions, idpurl, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get user
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/users/${userid}", requestOptions, idpurl, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get current user
var myHeaders = new Headers();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/users/current", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//disable user
var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch("${idpurl}/v1/users/${userid}?permanently=false", requestOptions, idpurl, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//enable user
var requestOptions = {
  method: 'POST',
  redirect: 'follow'
};

fetch("${idpurl}/v1/users/${userid}/enable", requestOptions, idpurl, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//add asset group to user
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "assetGroupId": "0cb1d68e-36e7-40c5-9042-e0d7bf8d9217"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/asset-groups", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//remove asset group from user
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "assetGroupId": "0cb1d68e-36e7-40c5-9042-e0d7bf8d9217"
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/asset-groups", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//add organisation context to user
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "status": "ACTIVE",
  "roleId": "a02c3675-be3c-42aa-832e-b25472f3aaca"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/context", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// update organganisation context user
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "roleId": "a02c3675-be3c-42aa-832e-b25472f3aaca"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/context", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//remove user from organisation
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "roleId": "a02c3675-be3c-42aa-832e-b25472f3aaca"
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/context", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update account settings
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "language": "EN",
  "time": {
    "timezone": "Europe/Paris",
    "timeFormat": "hh:mm",
    "dateFormat": "dd-mm-yyyy",
    "dateTimeFormat": "dd-mm-yyyy hh:mm:ss"
  },
  "units": "SI",
  "changeNotifications": {
    "push": false,
    "sms": false,
    "email": false
  },
  "tagNotifications": {
    "push": false,
    "sms": false,
    "email": false
  },
  "newsNotifications": {
    "push": false,
    "sms": false,
    "email": false
  },
  "taskNotifications": {
    "push": false,
    "sms": false,
    "email": true
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/users/${userid}/settings", requestOptions, idpurl, orgid, userid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get system status
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/iam/system/status", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
