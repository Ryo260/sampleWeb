// 現在の日付の取得と表示
let currentDate = new Date();

function updateCalendarHeader() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    document.querySelector(".calendar-header span").textContent = `${month} ${year}`;
}

// 月の日付の生成
function generateDays() {
  const calendarGrid = document.querySelector(".calendar-grid");

  // 既存の日付をクリア
  calendarGrid.innerHTML = "";

  // 月の最初の日と最後の日を取得
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // 日付を生成
  for(let i = 1; i <= lastDay.getDate(); i++) {
      const dateElement = document.createElement("div");
      dateElement.classList.add("date");
      dateElement.textContent = i;
      calendarGrid.appendChild(dateElement);
  }
}

// 前の月・次の月へのナビゲーション
document.querySelector(".calendar-header button:nth-child(1)").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendarHeader();
  generateDays();
});

document.querySelector(".calendar-header button:nth-child(3)").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendarHeader();
  generateDays();
});

// 初期化
window.addEventListener("DOMContentLoaded", () => {
  updateCalendarHeader();
  generateDays();
});



