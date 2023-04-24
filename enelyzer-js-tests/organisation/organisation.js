var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";

//get organisation
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/new/${orgid}", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//create organisation
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Organisation 5",
  "databaseName": "test"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/new/", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//add responsible
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "responsible": "test responsible"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/responsibles", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//remove responsible
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "responsible": "test responsible"
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/responsibles", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//disable organisation
var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/organisations/${orgid}", requestOptions, idpurl, orgid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//enable organisation
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/units/:unit-id/enable", requestOptions, idpurl, orgid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//search organisations
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 100
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/search", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update organisation
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Organisation 65465465",
  "databaseName": "org-db-1"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update organisation licence
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "description": "test license",
  "start": "2012-05-06",
  "end": "2013-02-03",
  "responsible": "test resp",
  "subscription": "whole package"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/license", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update organisation infos
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "ceo": "ceo test",
  "addressLine": "100 rue de la paix",
  "postalCode": "75000",
  "city": "Paris",
  "country": "France",
  "vat": "654987987",
  "phoneNumber": "+33456498798536",
  "logo": "test"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/infos", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

