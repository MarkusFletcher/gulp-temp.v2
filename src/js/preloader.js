// Preloader
let preloader = document.getElementById('preloader');
// let preloader = document.querySelector('preloader')

function hidePreloader() {
   preloader.classList.add('preloader_hide');
   setTimeout(function () {
      preloader.classList.add('preloader_hidden');
      preloader.classList.remove('preloader_hide');
   }, 500)
}

window.onload = function () {
   hidePreloader();
}
