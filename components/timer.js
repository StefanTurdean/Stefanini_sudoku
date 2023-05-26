import { TIMER_CLASS_NAME } from "../constants.js";
import { formatTimer } from "../services/formatTime.service.js";
import { createDomElement } from "../services/layout.service.js";
import state from "../state/index.js";

let timerId;

function createTimeWrapper(parentElement) {
  const timerWrapper = createDomElement(
    "div",
    TIMER_CLASS_NAME.wrapper,
    "",
    parentElement
  );

  const timerSpan = createDomElement(
    "span",
    TIMER_CLASS_NAME.span,
    TIMER_CLASS_NAME.span,
    timerWrapper
  );

  timerSpan.innerText = formatTimer(
    state.gameTime.seconds,
    state.gameTime.minutes
  );

  const timerBackground = createDomElement(
    "div",
    TIMER_CLASS_NAME.background,
    "",
    timerWrapper
  );

  timerBackground.addEventListener("click", () => {
    state.isGameRunning = !state.isGameRunning;
  });

  const timerIcon = createDomElement(
    "div",
    TIMER_CLASS_NAME.icon,
    "",
    timerBackground
  );
}

function createTimeElement(elementType, className) {
  const timer = createDomElement(`${elementType}`, `${className}`);

  createTimeWrapper(timer);

  return timer;
}

export default createTimeElement;
