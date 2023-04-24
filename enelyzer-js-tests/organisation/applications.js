var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";

//get application
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/applications/3ca2e1c9-12ff-448b-9167-6d03b26859a9", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//create application
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "test",
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "position": 1
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/applications", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//disable application
var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/organisations/${orgid}/applications/{{application-id}}/disable", requestOptions, idpurl, orgid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//enable application
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/organisations/${orgid}/applications/{{application-id}}/enable", requestOptions, idpurl, orgid)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
//search applications
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 100,
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/applications/search", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
//update application
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

fetch("${idpurl}/v1/organisations/${orgid}/applications/{{application-id}}", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));