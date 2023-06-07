function updateOnlineStatus() {
document.getElementById('video').src = "HERE COMES THE YT LINK";
document.getElementById('video').style.backgroundImage = "";
}

function updateOfflineStatus() {
document.getElementById('video').style.backgroundImage = "url(PATH TO A CUSTOM ERROR IMAGE)";
document.getElementById('video').src = "";
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOfflineStatus); 