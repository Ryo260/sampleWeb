const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");

function hexToRgb(hex) {
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

function getRgbFromColorName(colorName) {
  const tempDiv = document.createElement("div");
  tempDiv.style.display = "none";
  tempDiv.style.backgroundColor = colorName;
  document.body.appendChild(tempDiv);
  const rgb = getComputedStyle(tempDiv).backgroundColor.match(/\d+/g).map(Number);
  document.body.removeChild(tempDiv);
  return rgb;
}

changeColorBtn.addEventListener("click", function () {
  const colorValue = colorInput.value;
  let rgb;

  if (colorValue.startsWith("#")) {
    rgb = hexToRgb(colorValue);
  } else {
    rgb = getRgbFromColorName(colorValue);
  }

  const gradientColor = `rgb(${Math.min(rgb[0] + 150, 255)}, ${Math.min(rgb[1] + 150, 255)}, ${Math.min(rgb[2] + 150, 255)})`;
  document.body.style.background = `linear-gradient(to right, rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}), ${gradientColor})`;
});
