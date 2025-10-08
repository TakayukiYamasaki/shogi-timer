// 初期値（15分）
let initialMinutes = 15;
let initialSeconds = 0;

// 現在の残り時間
let timeA = initialMinutes * 60;
let timeB = initialMinutes * 60;

// タイマーID
let timerId = null;

// どちらのプレイヤーのターンか
let currentPlayer = null;

// HTML要素取得
const playerAEl = document.getElementById("playerA");
const playerBEl = document.getElementById("playerB");
const switchBtn = document.getElementById("switchBtn");
const resetBtn = document.getElementById("resetBtn");

// 秒数を mm:ss に変換
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

// タイマー更新
function updateDisplay() {
  playerAEl.textContent = formatTime(timeA);
  playerBEl.textContent = formatTime(timeB);
}

// カウントダウン関数
function tick() {
  if (currentPlayer === "A") {
    if (timeA > 0) {
      timeA--;
    } else {
      clearInterval(timerId);
      alert("プレイヤーAの時間切れ！");
    }
  } else if (currentPlayer === "B") {
    if (timeB > 0) {
      timeB--;
    } else {
      clearInterval(timerId);
      alert("プレイヤーBの時間切れ！");
    }
  }
  updateDisplay();
}

// スタート/切り替えボタン
switchBtn.addEventListener("click", () => {
  // どちらのターンか切り替え
  currentPlayer = currentPlayer === "A" ? "B" : "A" || "A";

  // 既存タイマー停止
  clearInterval(timerId);

  // タイマーの文字色を更新
  if(currentPlayer === "A") {
    playerAEl.classList.add("active");
    playerBEl.classList.remove("active");
  } else {
    playerBEl.classList.add("active");
    playerAEl.classList.remove("active");
  }

  // カウントダウン開始
  timerId = setInterval(tick, 1000);
});

// リセットボタン
resetBtn.addEventListener("click", () => {
  clearInterval(timerId);
  timeA = initialMinutes * 60;
  timeB = initialMinutes * 60;
  currentPlayer = null;
  updateDisplay();
});

// 初期表示
updateDisplay();