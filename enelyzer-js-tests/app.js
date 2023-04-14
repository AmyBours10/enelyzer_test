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

fetch('https://staging-idp.enprove.be/auth/realms/Enprove/protocol/openid-connect/token', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + jwtToken // include a previously obtained JWT token in the Authorization header
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Failed to get access token');
  }
  return response.json(); // parse the response as JSON
})
.then(data => {
  const accessToken = data.accessToken; // extract the access token from the response JSON
  // use the access token for subsequent requests
})
.catch(error => {
  console.error(error);
});






