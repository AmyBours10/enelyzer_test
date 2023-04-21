var idpurl = "https://staging-gateway.enprove.be";
var orgid = "00e28801-3fd2-4841-98cc-9bdcef094774";
var facid = "1aab41af-e2a0-44dd-9715-b884d0c23e7f";
//get allocation reppartition keys
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/cost-attribution/allocations/repartitions/keys", requestOptions, idpurl)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


// get allocation reppartition
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/cost-attribution/allocations/repartitions/facilities/${facid}?buildingId=e4a3606f-2c25-48ab-8bd7-c600757f9ea5&sourceId=1&from=0&size=5", requestOptions, idpurl, orgid, facid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// get allocation reppartition by meterid
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("${idpurl}/v1/organisations/${orgid}/cost-attribution/allocations/repartitions/facilities/${facid}/meters/6", requestOptions, idpurl, orgid, facid)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
