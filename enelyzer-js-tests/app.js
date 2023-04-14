var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "enelyzer-webapp");
urlencoded.append("username", "john.doe@enprove.be");
urlencoded.append("password", "enproveuser123");
urlencoded.append("grant_type", "enproveuser123");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded.toString(), // Convert the URLSearchParams object to a string
  redirect: 'follow'
};

fetch("https://staging-idp.enprove.be/auth/realms/Enprove/protocol/openid-connect/token", requestOptions)
  .then(response => response.json()) // Parse the response as JSON
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
