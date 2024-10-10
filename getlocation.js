function getLocation() {
  const output = document.getElementById("geolocation");
  output.innerHTML = "获取地理位置中...";

  // 引入高德地图 Geolocation 插件
  AMap.plugin("AMap.Geolocation", function () {
    const geolocation = new AMap.Geolocation({
      enableHighAccuracy: true, // 是否使用高精度定位
      timeout: 10000, // 超时时间（单位：毫秒）
    });

    // 获取当前位置
    geolocation.getCurrentPosition(function (status, result) {
      if (status === "complete") {
        // 定位成功
        const latitude = result.position.lat; // 获取纬度
        const longitude = result.position.lng; // 获取经度
        output.innerHTML = `纬度: ${latitude}<br>经度: ${longitude}`;
      } else {
        // 定位失败，显示错误信息
        output.innerHTML = "无法获取位置信息，错误：" + result.message;
      }
    });
  });
}

// 使用高德地图 API 的定位方法，替换原有的 getGeolocation
