var idpurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";


// create tenant
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "name": "testTenant2",
  "friendlyName": "fn testTenant2",
  "logo": "test",
  "contactMail": "test",
  "contactPhone": "test",
  "contactPerson": "test",
  "vat": "test",
  "addressLine1": "test",
  "addressLine2": "test",
  "postalCode": "test",
  "city": "test",
  "country": "test"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/123/tenants", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get tenant
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//list tenants

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 20,
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/search", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//import tenants
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("file", fileInput.files[0], "tenant_sample.csv");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/import/new", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//import contracts
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("file", fileInput.files[0], "contract_sample.csv");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/contracts/import/new", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//upload image

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("image", fileInput.files[0], "demo-image.png");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123/images/upload", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update tenant
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "name": "updated testTenant2",
  "friendlyName": "updated fn testTenant2",
  "logo": "updated test",
  "contactMail": "updated test",
  "contactPhone": "updated test",
  "contactPerson": "updated test",
  "vat": "updated test",
  "addressLine1": "updated test",
  "addressLine2": "updated test",
  "postalCode": "updated test",
  "city": "updated test",
  "country": "updated test"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//delete tenant
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//enable tenant
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123/enable", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//create contract
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "tenantId": "123",
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "unitId": "",
  "name": "test",
  "friendlyName": "test fn",
  "fromTime": "2008-01-03T00:00:00Z",
  "toTime": "2008-01-07T00:00:00Z",
  "description": "Test contrat2",
  "contractFiles": [
    "123",
    "123123"
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123/contracts", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update contract
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": "",
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "tenantId": "123",
  "unitId": "",
  "name": "test",
  "friendlyName": "test fn",
  "fromTime": "2004-01-03T00:00:00Z",
  "toTime": "2007-01-01T00:00:00Z",
  "description": "Test contract updated1",
  "contractFiles": [
    "123",
    "123123"
  ]
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123/contracts/:contractId", requestOptions, idpurl, orgid) //contract id has no variable
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//list tenants contracts
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 20,
  "tenantId": "123",
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/contracts/search", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//delete contract
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123/contracts/:contractId", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//enable contract
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123/contracts/:contractId", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//upload multiple files
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("document", fileInput.files[0], "Free_Test_Data_1MB_PDF.pdf");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/tenants/123/file/upload", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//export tenants
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/imports-exports/export/cost-attribution/tenants?organisationId=${orgid}", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//export contracts

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/imports-exports/export/contracts?organisationId=${orgid}", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));