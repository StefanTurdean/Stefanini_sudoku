import createElem from "./components/createElem.js";
import sudokuInfo from "./components/sudokuInfo.js";
import sudokuGame from "./components/sudokuGame.js";
import sudokuControls from "./components/sudokuControls.js";

const app = document.getElementById("app");

// game wraper
const sudokuWraper = document.createElement("div");
sudokuWraper.classList.add("sudoku-wraper");
app.appendChild(sudokuWraper);

// loading screen
const loadingScreen = document.createElement("div");
loadingScreen.classList.add("loading-screen");
loadingScreen.id = "loading-screen";
sudokuWraper.appendChild(loadingScreen);

// info section
sudokuWraper.appendChild(sudokuInfo);

// sudoku game wraper
const sudokuGameWraper = document.createElement("div");
sudokuGameWraper.classList.add("sudoku-game-wraper");
sudokuGameWraper.id = "sudoku-game-wraper";
sudokuWraper.appendChild(sudokuGameWraper);

// sudoku game
sudokuGameWraper.appendChild(sudokuGame);

// controlls

sudokuGameWraper.appendChild(sudokuControls)

// const sudokuControls = document.createElement("div");
// sudokuControls.classList.add("sudoku-controls");
// sudokuControls.id = "sudoku-controls";
// sudokuGameWraper.appendChild(sudokuControls);

// // controls items
// const sudokuControlItems = document.createElement("div");
// sudokuControlItems.classList.add("sudoku-control-items");
// sudokuControls.appendChild(sudokuControlItems);

// //  undo

// const sudokuUndoWraper = document.createElement("div");
// sudokuUndoWraper.classList.add("control-item");
// sudokuControlItems.appendChild(sudokuUndoWraper);

// const undoBtn = document.createElement("button");
// undoBtn.innerText = "undobtn";
// sudokuUndoWraper.appendChild(undoBtn);

// // erase

// const sudokuEraseWraper = document.createElement("div");
// sudokuEraseWraper.classList.add("control-item");
// sudokuControlItems.appendChild(sudokuEraseWraper);

// const eraseBtn = document.createElement("button");
// eraseBtn.innerText = "eraseBtn";
// sudokuEraseWraper.appendChild(eraseBtn);

// // notes

// const sudokuNotesWraper = document.createElement("div");
// sudokuNotesWraper.classList.add("control-item");
// sudokuControlItems.appendChild(sudokuNotesWraper);

// const notesBtn = document.createElement("button");
// notesBtn.innerText = "notesBtn";
// sudokuNotesWraper.appendChild(notesBtn);

// // numpad

// const sudokuNumpad = document.createElement("div");
// sudokuNumpad.id = "sudoku-numpad";
// sudokuNumpad.classList.add("sudoku-numpad");
// sudokuControls.appendChild(sudokuNumpad);

// for (let i = 1; i < 10; i++) {
//   const numBtn = document.createElement("button");
//   numBtn.id = `numBtn-${i}`;
//   numBtn.classList.add("sudoku-num-btn");
//   numBtn.innerText = `${i}`;

//   sudokuNumpad.appendChild(numBtn);
// }

// // new game Btn
// const sudokuNewGameBtn = document.createElement("button");
// sudokuNewGameBtn.innerHTML = "NEW GAME";
// sudokuNewGameBtn.id = "sudoku-new-game-btn";
// sudokuNewGameBtn.classList.add("sudoku-new-game-btn");
// sudokuControls.appendChild(sudokuNewGameBtn);
