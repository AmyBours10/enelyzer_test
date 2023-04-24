var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var metergroupid = "399f8cb6-b2ae-4960-8bfc-805464c72e57";

// create main meter group
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "facilityId": "1aab41af-e2a0-44dd-9715-b884d0c23e7f",
  "energySourceId": "",
  "description": "test group",
  "name": "test_source",
  "friendlyName": "test source"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters-groups", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//main meter groups tree
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "facilityId": "1aab41af-e2a0-44dd-9715-b884d0c23e7f"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters-groups/tree", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//search main meter groups
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "facilityId": "1aab41af-e2a0-44dd-9715-b884d0c23e7f"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters-groups/view", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//update main meter groups
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "facilityId": "1aab41af-e2a0-44dd-9715-b884d0c23e7f",
  "energySourceId": "",
  "description": "test group updated",
  "name": "test_source updated",
  "friendlyName": "test source updated"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters-groups/${metergroupid}", requestOptions, idpurl, orgid, metergroupid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//get main meter group
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters-groups/${metergroupid}", requestOptions, idpurl, orgid, metergroupid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//disable main meter group

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters-groups/${metergroupid}", requestOptions, idpurl, orgid, metergroupid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//enable main meter group
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters-groups/${metergroupid}/enable", requestOptions, idpurl, orgid, metergroupid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));