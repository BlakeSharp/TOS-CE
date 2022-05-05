const checkBtn = document.getElementById('button2');
const markBtn = document.getElementById('button1');
const settingsBtn = document.getElementById('SettingsButton');

let isSafe = null;

checkBtn.addEventListener('click', check);
markBtn.addEventListener('click', mark);
settingsBtn.addEventListener('click', settings);

function check () {
  alert(1);
};

function mark () { 
  alert(2);
};

function settings () {
  alert(3);
};