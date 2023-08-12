// DOM要素の取得
const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");

// ボタンのクリックイベントを設定
changeColorBtn.addEventListener("click", function(){
  const colorValue = colorInput.value // 入力された色の値を取得
  document.body.style.background = colorValue; // 背景色を変更
});