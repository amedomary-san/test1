const name = document.getElementById('text');

name.innerText = 1;

navigator.permissions.query({name:'geolocation'}).then(function(result) {
  if (result.state === 'granted') {
    // showLocalNewsWithGeolocation();
    name.innerText = result;
  } else if (result.state === 'prompt') {
    // showButtonToEnableLocalNews();
    name.innerText = `2 = ${result}`;
  }
  // Don't do anything if the permission was denied.
});