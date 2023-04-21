var idpurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var facid = "1aab41af-e2a0-44dd-9715-b884d0c23e7f";
var unitid = "4d6366a7-fa41-422d-83f8-54ed146d9efc";
// post create unit
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "test",
  "friendlyName": "A first test unit",
  "organisation_id": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "facility_id": "1aab41af-e2a0-44dd-9715-b884d0c23e7f",
  "building_id": "e4a3606f-2c25-48ab-8bd7-c600757f9ea5",
  "description": "A first test unit",
  "floor_ref": "1"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/units", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get unit
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("${idpurl}/v1/units/:id", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get unit propreties
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("${idpurl}/v1/units/:id/properties", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//list unit properties
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 10,
  "orderBy": "createdOn",
  "order": "asc",
  "date": "2022-04-21"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/units/view/:id/properties", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get units by buildings
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 10,
  "buildingId": [
    "e4a3606f-2c25-48ab-8bd7-c600757f9ea5"
  ],
  "orderBy": "created_on",
  "order": "asc"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/units/building", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//list units
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 10,
  "order": "asc",
  "orderBy": "friendlyName"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/units/view", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get units by facility
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": 0,
  "size": 10,
  "enabled": true,
  "order": "asc",
  "orderBy": "surface",
  "facilityId": "b76d5a7b-b679-4a2c-a14e-e6bf12748c9d"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/units/facility", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update unit
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "updated unit",
  "friendlyName": "A first test unit",
  "organisation_id": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "facility_id": "1aab41af-e2a0-44dd-9715-b884d0c23e7f",
  "building_id": "e4a3606f-2c25-48ab-8bd7-c600757f9ea5",
  "description": "A first test unit",
  "floor_ref": "1"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/units/:unit-id", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//disable unit
var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/units/:unit-id", requestOptions, idpurl)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

//enable unit
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/units/:unit-id/enable", requestOptions, idpurl)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


//add unit property
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "surface": 77,
  "volume": 45,
  "numberOfPersons": 7,
  "percentage": 98.2,
  "shared": true,
  "quotity": 66,
  "fromTime": "1962-01-01T00:00:00Z",
  "toTime": "1968-01-01T00:00:00Z"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/units/:unit-id/properties", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//update unit property
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "surface": 99,
  "volume": 88,
  "numberOfPersons": 4,
  "percentage": 70.2,
  "shared": false,
  "quotity": 25,
  "start": "1972-01-01T00:00:00Z",
  "end": "2001-01-01T00:00:00Z"
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/units/${unitid}/properties/9ebafe42-cfae-4bff-9d6a-d342b2775e93", requestOptions, idpurl, orgid, unitid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//import units
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("file", fileInput.files[0], "building_unit_sample.csv");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/units/import/new", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//import unit properties
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var formdata = new FormData();
formdata.append("file", fileInput.files[0], "building_unit_properties_sample.csv");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/unit-properties/import/new", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
