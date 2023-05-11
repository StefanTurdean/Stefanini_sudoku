import createDomElement from "./createDomElement.js";

const classNames = {
  sudokuTimerWraper: "sudoku-timer-wraper",
  sudokuTimerSpan: "sudoku-timer-span",
  sudokuTimerBackground: "sudoku-timer-background-helper",
  sudokuTimerIcon: "sudoku-timer-icon",
};

const elementIds = {
  sudokuTimer: "sudoku-timer",
  sudokuTimerIcon: "sudoku-timer-icon",
};

function createTimeWraper(parentElement) {
  const sudokuTimerWraper = createDomElement(
    "div",
    classNames.sudokuTimerWraper,
    "",
    parentElement
  );

  // timer text span
  const sudokuTimerSpan = createDomElement(
    "span",
    classNames.sudokuTimerSpan,
    elementIds.sudokuTimer,
    sudokuTimerWraper
  );

  sudokuTimerSpan.innerText = "00:00";

  const timerBackground = createDomElement(
    "div",
    classNames.sudokuTimerBackground,
    "",
    sudokuTimerWraper
  );

  // timer btn
  const sudokuTimerIcon = createDomElement(
    "div",
    classNames.sudokuTimerIcon,
    elementIds.sudokuTimerIcon,
    timerBackground
  );
}

function createTimeElement(elementType, className) {
  const sudokuTimer = createDomElement(`${elementType}`, `${className}`);

  createTimeWraper(sudokuTimer);

  return sudokuTimer;
}

export default createTimeElement;
