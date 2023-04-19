import createDomElem from "./createElem.js";

const sudokuInfo = createDomElem("div", "sudoku-info");

// const sudokuInfo = document.createElement("div");
// sudokuInfo.classList.add("sudoku-info");
// sudokuWraper.appendChild(sudokuInfo);

// timer section
const sudokuTimerWraper = createDomElem(
  "div",
  "sudoku-timer-wraper",
  "",
  sudokuInfo
);

// const sudokuTimerWraper = document.createElement("div");
// sudokuTimerWraper.classList.add("sudoku-timer-wraper");
// sudokuInfo.appendChild(sudokuTimerWraper);

// timer text span
const sudokuTimerSpan = createDomElem(
  "span",
  "sudoku-timer-span",
  "sudoku-timer",
  sudokuTimerWraper
);

sudokuTimerSpan.innerText = "00:00";

// const sudokuTimerSpan = document.createElement("span");
// sudokuTimerSpan.id = "sudoku-timer-span";
// sudokuTimerWraper.appendChild(sudokuTimerSpan);

// timer btn
const sudokuTimerBtn = createDomElem(
  "button",
  "sudoku-timer-btn",
  "sudoku-timer-btn",
  sudokuTimerWraper
);
sudokuTimerBtn.innerText = "sudoku-timer-btn";

// const sudokuTimerBtn = document.createElement("button");
// sudokuTimerBtn.classList.add("sudoku-timer-btn");
// sudokuTimerBtn.id = "sudoku-timer-btn";
// sudokuTimerWraper.appendChild(sudokuTimerBtn);

export default sudokuInfo;
