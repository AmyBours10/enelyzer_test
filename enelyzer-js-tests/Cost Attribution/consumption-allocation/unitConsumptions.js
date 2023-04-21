var idpurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var facid = "1aab41af-e2a0-44dd-9715-b884d0c23e7f"

// get allocation consumptions
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/cost-attribution/allocations/consumptions/facilities/${facid}?sourceId=4", requestOptions, idpurl, orgid, facid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// get allocation consumptions graph
var myHeaders = new Headers();
mmyHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/cost-attribution/allocations/consumptions/facilities/${facid}/graph?sourceId=1", requestOptions, idpurl, orgid, facid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//allocation link meter
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "parentAssetType": "UNIT",
  "parentAssetId": "c86a500b-10f4-440c-80bb-269273950d5a",
  "meterId": "9",
  "energySourceId": "ef0d839a-35c9-4d12-8f68-eb96db41959f"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/cost-attribution/allocations/meters/link", requestOptions, idpurl, orgid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
