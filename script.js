const img = document.querySelector('#qr-code');
const ssidInput = document.querySelector('.ssid');
const passwordInput = document.querySelector('.password');
const button = document.querySelector('#create-qr-code');

function update() {
  const wifi = `WIFI:T:WPA;S:${ssidInput.value};P:${passwordInput.value};;`;
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/`;
  const params = `size=164x164&data=${encodeURIComponent(wifi)}&bgColor=#FFFFFF&fgColor=#000000`;
  img.src = `${apiUrl}?${params}`;
}

ssidInput.addEventListener('input', update);
passwordInput.addEventListener('input', update);
button.addEventListener('click', update);