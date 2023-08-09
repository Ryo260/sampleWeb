let startTime;
let intervalId;

// スタートボタン押下時の挙動
document.getElementById('start').addEventListener('click', function(){
  if(!intervalId){
    startTime =Date.now();
    intervalId = setInterval(updateDisplay, 10); // 0.01秒ごとに更新

  }
});

// Stopボタン押下時の挙動
document.getElementById('stop').addEventListener('click', function(){
  if(intervalId){
    clearInterval(intervalId);
    intervalId = null;
  }
})

// resetボタン押下時の挙動
document.getElementById('reset').addEventListener('click', function(){
  document.getElementById('display').textContent = '0.0';
  if(intervalId){
    clearInterval(intervalId);
    intervalId = null;
  }
});

// 時間表示
function updateDisplay(){
  const elapsedTime = (Date.now() - startTime) / 1000; // seconds
  document.getElementById('display').textContent = elapsedTime.toFixed(1);
}