import createDomElement from "./createDomElement.js";

function createTimeWraper(parentElement) {
  const sudokuTimerWraper = createDomElement(
    "div",
    "sudoku-timer-wraper",
    "",
    parentElement
  );

  // timer text span
  const sudokuTimerSpan = createDomElement(
    "span",
    "sudoku-timer-span",
    "sudoku-timer",
    sudokuTimerWraper
  );

  sudokuTimerSpan.innerText = "00:00";

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

function createTimeElement(elementType, className) {
  const sudokuTimer = createDomElement(`${elementType}`, `${className}`);

  createTimeWraper(sudokuTimer);

  return sudokuTimer;
}

export default createTimeElement;
