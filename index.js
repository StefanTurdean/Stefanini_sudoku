const app = document.getElementById("app");

// game wraper
const sudokuWraper = document.createElement("div");
sudokuWraper.classList.add("sudoku-wraper");
sudokuWraper.id = "sudoku-wraper";
app.appendChild(sudokuWraper);

// loading screen
const loadingScreen = document.createElement("div");
loadingScreen.classList.add("loading-screen");
loadingScreen.id = "loading-screen";
sudokuWraper.appendChild(loadingScreen);

// start info section
const sudokuInfo = document.createElement("div");
sudokuInfo.classList.add("sudoku-info");
sudokuWraper.appendChild(sudokuInfo);

// mistake section
const SudokuMistakeWraper = document.createElement("div");
SudokuMistakeWraper.classList.add("sudoku-mistake-wraper");
SudokuMistakeWraper.classList = "sudoku-mistake-wraper";
sudokuInfo.appendChild(SudokuMistakeWraper);

const currentMistakes = 0;
const totalMistakes = 3;

SudokuMistakeWraper.innerText = `Mistakes ${currentMistakes}/${totalMistakes}`;

// timer section
const sudokuTimerWraper = document.createElement("div");
sudokuTimerWraper.classList.add("sudoku-timer-wraper");
sudokuInfo.appendChild(sudokuTimerWraper);

// timer text span
const sudokuTimerSpan = document.createElement("span");
sudokuTimerSpan.innerText = "00:00";
sudokuTimerSpan.id = "sudoku-timer-span";
sudokuTimerWraper.appendChild(sudokuTimerSpan);

// timer btn
const sudokuTimerBtn = document.createElement("button");
sudokuTimerBtn.classList.add("sudoku-timer-btn");
sudokuTimerBtn.id = "sudoku-timer-btn";
sudokuTimerBtn.innerHTML = "sudoku-timer-btn";
sudokuTimerWraper.appendChild(sudokuTimerBtn);
// end info section

// game section
// sudoku game
const sudokuGameWraper = document.createElement("div")
sudokuGameWraper.classList.add("sudoku-game-wraper")
sudokuGameWraper.id = "sudoku-game-wraper";
sudokuWraper.appendChild(sudokuGameWraper)


const sudokuGame = document.createElement("div");
sudokuGame.classList.add("sudoku-game");
sudokuGame.id = "sudoku-game";
sudokuGameWraper.appendChild(sudokuGame);

for (let i = 1; i < 10; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.id = `grid-${i}`;

  for (let j = 1; j < 10; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = `${j}`;
    grid.appendChild(cell);
  }

  sudokuGame.appendChild(grid);
}

// controlls
const sudokuControls = document.createElement("div");
sudokuControls.classList.add("sudoku-controls");
sudokuControls.id = "sudoku-controls";
sudokuGameWraper.appendChild(sudokuControls)

// controls items
const sudokuControls = document.createElement("div")
sudokuControls.classList.add("sudoku-controls");


