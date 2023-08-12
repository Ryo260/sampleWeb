// 1次作製
// // DOM要素の取得
// const colorInput = document.getElementById("colorInput");
// const changeColorBtn = document.getElementById("changeColorBtn");

// // ボタンのクリックイベントを設定
// changeColorBtn.addEventListener("click", function(){
//   const colorValue = colorInput.value // 入力された色の値を取得
//   document.body.style.background = colorValue; // 背景色を変更
// });

// 2次作成
const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");

// HEX値をRGB値に変換する関数
function hexToRgb(hex){
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m,r,g,b){
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ?{
    r: parseInt(result[1],16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// ボタンのクリックイベントを設定
changeColorBtn.addEventListener("click", function(){
  const colorValue = colorInput.value; // 入力された色の値を取得 ariaValueMaxとvalueの違いは？
  let rgb = hexToRgb(colorValue);

  // 入力がRGBの場合は、この処理をスキップ
  if(!rgb) {
    rgb = getComputedStyle(document.body).getPropertyValue(colorValue).trim().slice(4,-1).split(', ').map(Number);
  }

  // 色の明るさを変える
  const gradientColor = `rgb(${Math.min(rgb[0] + 50, 255)}, ${Math.min(rgb[1] + 50, 255)}, ${Math.min(rgb[2] + 50, 255)})`; // よくわからない

  // 背景色を変更
  document.body.style.background =`linear-gradient(to right, ${colorValue}, ${gradientColor})`;
});
