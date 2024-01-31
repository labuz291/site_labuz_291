let page = document.querySelector('.index_body');
let themeButton = document.querySelector('.switch-theme');

themeButton.onclick = function() {
  themeButton.classList.toggle('light-theme');
  themeButton.classList.toggle('dark-theme');
};

let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');
