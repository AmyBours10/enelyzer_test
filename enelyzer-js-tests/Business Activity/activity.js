var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var activityid = "d26ec161-a0b7-4045-a702-c9e4260a3f40";

//create activity
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "friendlyName": "Test",
  "name": "test",
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/activities", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//get activity 
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/activities/${activityid}", requestOptions, idpurl, orgid, activityid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//disable activity
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/activities/${activityid}", requestOptions, idpurl, orgid, activityid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//enable activity
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/activities/${activityid}/enable", requestOptions, idpurl, orgid, activityid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//search activity
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 100,
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "includeDisabled": true
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/activities/search", requestOptions, idpurl, orgid, activityid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update activity
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "friendlyName": "Test edition",
  "name": "test edit",
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/activities/${activityid}", requestOptions, idpurl, orgid, activityid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));