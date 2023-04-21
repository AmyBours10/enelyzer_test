var idpurl = "https://staging-gateway.enprove.be";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("${idpurl}/v1/co2/calculations", requestOptions, idpurl)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));