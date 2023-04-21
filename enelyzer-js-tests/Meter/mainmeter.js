var idpurl = "https://staging-gateway.enprove.be";
var apiurl = "https://staging-gateway.enprove.be";
var gatewayurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var meterid = "f37e4161-4108-4a8c-94e0-b38b51056bc0";


//create main meter
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "facilityId": "1aab41af-e2a0-44dd-9715-b884d0c23e7f",
  "installationType": "test",
  "mainMeterGroupId": "9f70d96f-0f63-4258-a3ac-c40c9a7c7c60",
  "energySourceId": "123",
  "ean": "12",
  "meterNumber": "123",
  "brand": "test",
  "model": "test",
  "responsible": "joske",
  "name": "test_source",
  "friendlyName": "test source",
  "meters": [
    {
      "tagId": "12",
      "name": "test",
      "friendlyName": "testt",
      "meterType": "CONSUMPTION"
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//enable main meter
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

fetch("${idpurl}/v1/organisations/${orgid}/main-meters/:id/enable", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//disable main meter
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters/:id", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//update main meter
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "organisationId": "00e28801-3fd2-4841-98cc-9bdcef094774",
  "facilityId": "1aab41af-e2a0-44dd-9715-b884d0c23e7f",
  "mainMeterGroupId": "399f8cb6-b2ae-4960-8bfc-805464c72e57",
  "energySourceId": "14c2c7d1-cd71-4c93-a81e-148dbdaf92fb",
  "installationType": "photovoltaic_panel",
  "name": "test",
  "friendlyName": "test",
  "meters": [
    {
      "tagId": "45",
      "friendlyName": "Elektriciteit_bord2 x",
      "name": "elek2_bord2",
      "meterType": "CONSUMPTION"
    }
  ]
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters/${meterid}/tags", requestOptions, idpurl, orgid, meterid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//get main meter
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/main-meters/:id", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));