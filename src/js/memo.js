// ローカルストレージを作成する

const memoInput = document.getElementById("memoInput");
const saveButton = document.getElementById("saveMemo");
const memoList = document.getElementById("memoList");

// 既存のメモを読み込む
loadMemos();

saveButton.addEventListener("click", function(){
  const memo = memoInput.value;
  if(memo) {
    saveMemo(memo);
    memoInput.value = ''; // 入力をクリア
    loadMemos();          // メモリストを更新
  }
});

function saveMemo(memo){
  const memos = JSON.parse(localStorage.getItem("memos") || "[]");
  memos.push(memo);
  localStorage.setItem("memos", JSON.stringify(memos));
}

function loadMemos(){
  const memos = JSON.parse(localStorage.getItem("memos") || "[]");
  memoList.innerHTML = '';
  memos.forEach(memo=>{
    const li = document.createElement("li");
    li.textContent = memo;
    memoList.appendChild(li);
  });
}


