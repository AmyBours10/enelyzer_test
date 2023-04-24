var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";

//get pricing
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/organisations/${orgid}/pricings/{{pricing-id}}", requestOptions, idpurl, orgid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
// create pricing
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "applicationId": "3b11a53f-26be-43c8-9413-bfd9a263c6b3",
  "yearlyLicense": true,
  "yearlyLicensePrice": 1000
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/pricings", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//disable pricing
var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/organisations/${orgid}/pricings", requestOptions, idpurl, orgid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//enable pricing
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/organisations/${orgid}/pricings/{{pricing-id}}/enable", requestOptions, idpurl, orgid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//search pricings
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 100,
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "applicationId": "{{application-id}}"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/pricings/search", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update pricing
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "test edit",
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "position": 10
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/pricings/{{pricing-id}}", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));