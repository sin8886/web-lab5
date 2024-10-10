function getGeolocation() {
  const output = document.getElementById("geolocation");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showGeolocation, showError);
  } else {
    output.innerHTML = "Geolocation 不受支持。";
  }
}

function showGeolocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const output = document.getElementById("geolocation");

  output.innerHTML = `纬度: ${latitude}<br>经度: ${longitude}`;
}

function showError(error) {
  const output = document.getElementById("geolocation");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      output.innerHTML = "用户拒绝了获取地理位置的请求。";
      break;
    case error.POSITION_UNAVAILABLE:
      output.innerHTML = "位置信息不可用。";
      break;
    case error.TIMEOUT:
      output.innerHTML = "请求超时。";
      break;
    case error.UNKNOWN_ERROR:
      output.innerHTML = "未知错误。";
      break;
  }
}
