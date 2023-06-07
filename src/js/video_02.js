if (navigator.onLine) {
  document.getElementById('video').src = 'HERE COMES THE YT LINK';
  document.getElementById('video').style.backgroundImage = '';
} else {
  document.getElementById('video').style.backgroundImage =
    'PATH TO A CUSTOM ERROR IMAGE';
  document.getElementById('video').src = '';
}
