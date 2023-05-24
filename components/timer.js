import { TIMER_CLASS_NAME } from "../constants.js";
import { createDomElement } from "../services/layout.service.js";

let seconds = 0;
let minutes = 0;
let timerId;

let timerIsRunning = true;

function formatTimer() {
  let formattedSecond = seconds;
  let formattedMinutes = minutes;

  if (seconds < 10) {
    formattedSecond = `0${formattedSecond}`;
  }

  if (minutes < 10) {
    formattedMinutes = `0${formattedMinutes}`;
  }

  incrementTimer();

  return `${formattedMinutes}:${formattedSecond}`;
}

function incrementTimer() {
  seconds += 1;

  if (seconds % 60 === 0) {
    seconds = 0;
    minutes += 1;
  }
}

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
    "",
    timerWrapper
  );

  timerSpan.innerText = formatTimer();

  function setTimerText() {
    timerSpan.innerText = formatTimer();
  }

  timerId = setInterval(setTimerText, 1000);

  console.log(timerId);

  const timerBackground = createDomElement(
    "div",
    TIMER_CLASS_NAME.background,
    "",
    timerWrapper
  );

  timerBackground.addEventListener("click", () => {
    if (!timerIsRunning) {
      timerId = setInterval(setTimerText, 1000);
      console.log("timer running");
    } else {
      clearInterval(timerId);
      timerId = null;
      console.log("timer should stop");
    }

    timerIsRunning = !timerIsRunning;
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
