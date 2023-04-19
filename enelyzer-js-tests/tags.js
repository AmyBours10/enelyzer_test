var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var buildingid = "e4a3606f-2c25-48ab-8bd7-c600757f9ea5";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";

// get tag tree
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/organisations/${orgid}/trees?treetype=tags", requestOptions, gatewayurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get units
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/tags/42/units", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//get meter by tag id
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/organisations/${orgid}/tags/49/meter", requestOptions, gatewayurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//tag data
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/tags/5/records?unit=%C2%B0C&from=11/03/2021, 02:00:00aef&till=13/16/2021, 23:00:00&groupingInterval=None", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//tag data copy
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/tags/5/records?unit=%C2%B0C&from=11/03/2021, 02:00:00&till=13/16/2021, 23:00:00&groupingInterval=None", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//tag annotations
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/annotations", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//delete annotation
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/annotations/10014", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//data export
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/tags/export-data?tagIds=5&from=7%20Jun,%202021&till=9%20Jun,%202021&tagIds=6", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//annatations download
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/annotations/download?from=2021/06/20&till=2021/08/21&tagIds=6", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//create annotation
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "expression": "temp1+temp1",
  "unit": "°C",
  "from": "2020-02-21T18:14:43.470Z",
  "till": "2022-02-21T18:14:43.470Z"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/tags/records", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//expression records
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "expression": "temp1+temp1",
  "unit": "°C",
  "from": "2020-02-21T18:14:43.470Z",
  "till": "2022-02-21T18:14:43.470Z"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/tags/records", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update annotation
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": 10011,
  "text": "test654654"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${gatewayurl}/v1/clients/70361904-0dd0-44ed-97da-26bf72c86471/annotations", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//IDP token
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "enelyzer-webapp");
urlencoded.append("username", "john.doe@enprove.be");
urlencoded.append("password", "enproveuser123");
urlencoded.append("grant_type", "password");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("${gatewayurl}/auth/realms/Enprove/protocol/openid-connect/token", requestOptions, gatewayurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//tag details
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));