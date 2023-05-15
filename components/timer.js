import { TIMER_CLASS_NAME } from "../constants.js";
import { createDomElement } from "../services/layout.service.js";

const elementIds = {
  sudokuTimer: "sudoku-timer",
  sudokuTimerIcon: "sudoku-timer-icon",
};

function createTimeWrapper(parentElement) {
  const timerWrapper = createDomElement(
    "div",
    TIMER_CLASS_NAME.wrapper,
    "",
    parentElement
  );

  // timer text span
  const timerSpan = createDomElement(
    "span",
    TIMER_CLASS_NAME.span,
    elementIds.sudokuTimer,
    timerWrapper
  );

  timerSpan.innerText = "00:00";

  const timerBackground = createDomElement(
    "div",
    TIMER_CLASS_NAME.background,
    "",
    timerWrapper
  );

  // timer btn
  const timerIcon = createDomElement(
    "div",
    TIMER_CLASS_NAME.icon,
    elementIds.sudokuTimerIcon,
    timerBackground
  );
}

function createTimeElement(elementType, className) {
  const timer = createDomElement(`${elementType}`, `${className}`);

  createTimeWrapper(timer);

  return timer;
}

export default createTimeElement;
