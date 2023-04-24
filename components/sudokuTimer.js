import createDomElement from "./createDomElement.js";

const sudokuTimer = createDomElement("div", "sudoku-info");

// rename asdass info to timer!!!

// timer section

createTimeSection();

function createTimeSection() {
  const sudokuTimerWraper = createDomElement(
    "div",
    "sudoku-timer-wraper",
    "",
    sudokuTimer
  );

  // timer text span
  const sudokuTimerSpan = createDomElement(
    "span",
    "sudoku-timer-span",
    "sudoku-timer",
    sudokuTimerWraper
  );

  sudokuTimerSpan.innerText = "00:00";

  // timer background
  const timerBackground = createDomElement(
    "div",
    "sudoku-timer-background-helper",
    "",
    sudokuTimerWraper
  );

  // timer btn
  const sudokuTimerIcon = createDomElement(
    "div",
    "sudoku-timer-icon",
    "sudoku-timer-icon",
    timerBackground
  );
}

export default sudokuTimer;
