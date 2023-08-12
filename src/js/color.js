const colorInput = document.getElementById("colorInput");         //input=text
const changeColorBtn = document.getElementById("changeColorBtn"); // btn

// HEXをRGBに変換する関数
function hexToRgb(hex) {
  // 3文字のHEX色を6文字に変換するための正規表現
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  // 6文字のHEX色をRGBに変換する
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16), // 16進数を10進数に変換
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/*
  色の名前をRGBに変換する。
*/
function getRgbFromColorName(colorName) {
  // 一時的なdiv要素を作成して、背景色として色の名前を設定
  const tempDiv = document.createElement("div");
  tempDiv.style.display = "none";               // 画面上には非表示
  tempDiv.style.backgroundColor = colorName;
  document.body.appendChild(tempDiv);

  // 背景色のRGB値を取得
  const rgb = getComputedStyle(tempDiv).backgroundColor.match(/\d+/g).map(Number);
  document.body.removeChild(tempDiv); // 一時的なdiv要素を削除
  return rgb;
}

// changecolorBtn押下時の処理
changeColorBtn.addEventListener("click", function () {
  const colorValue = colorInput.value;  // 入力値の定数化
  let rgb;                              // 色の数値

  /*
    色コードで入力されたか、色の名前で入力されたかを判定し、
    名前の場合色コードに変換する
  */
  if (colorValue.startsWith("#")) {
    rgb = hexToRgb(colorValue);
  } else {
    rgb = getRgbFromColorName(colorValue);
  }

  // 入力された色をもとにして、明るさを増やして新しい色を作製
  const gradientColor = `rgb(${Math.min(rgb[0] + 150, 255)}, ${Math.min(rgb[1] + 150, 255)}, ${Math.min(rgb[2] + 150, 255)})`;

  // 背景色をグラデーションに変更
  document.body.style.background = `linear-gradient(to right, rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}), ${gradientColor})`;
});


// 次回やりたいこと

