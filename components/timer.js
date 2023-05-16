import { TIMER_CLASS_NAME } from "../constants.js";
import { createDomElement } from "../services/layout.service.js";

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
    "",
    timerWrapper
  );

  timerSpan.innerText = "00:00";

  const timerBackground = createDomElement(
    "div",
    TIMER_CLASS_NAME.background,
    "",
    timerWrapper
  );

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
