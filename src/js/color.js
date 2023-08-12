const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");

function hexToRgb(hex) {
  if (!hex) return null;

  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

changeColorBtn.addEventListener("click", function () {
  const colorValue = colorInput.value;
  let rgb;

  // HEX値か色名かを判断
  if (colorValue.startsWith("#")) {
    rgb = hexToRgb(colorValue);
  } else {
    // 一時的なdivを作成して背景色を設定し、RGB値を取得する方法
    const tempDiv = document.createElement("div");
    tempDiv.style.display = "none";
    tempDiv.style.backgroundColor = colorValue;
    document.body.appendChild(tempDiv);
    rgb = getComputedStyle(tempDiv).backgroundColor.match(/\d+/g).map(Number);
    document.body.removeChild(tempDiv);
  }

  const gradientColor = `rgb(${Math.min(rgb[0] + 50, 255)}, ${Math.min(rgb[1] + 50, 255)}, ${Math.min(rgb[2] + 50, 255)})`;

  document.body.style.background = `linear-gradient(to right, ${colorValue}, ${gradientColor})`;
});
