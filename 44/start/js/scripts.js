var resolution = window.screen.width + "x" + window.screen.height;

function sendInfo(url, info) {
  var img = document.createElement("img");

  img.src = url + "?resolution=" + info;
}

sendInfo("https://localhost/info/info.php", resolution);
