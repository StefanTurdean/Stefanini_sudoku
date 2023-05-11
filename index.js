import createTimeSection from "./components/sudokuTimer.js";
import createDomElement from "./components/createDomElement.js";
import createSudokuGameWraper from "./components/sudokuGameWraper.js";
import sudokuState from "./components/sudokuState.js";
import { handleArrowPress, handleKeyPress } from "./components/handlers.js";

const classNames = {
  sudokuInfo: "sudoku-info",
  sudokuWraper: "sudoku-wraper",
  sudokuGameWraper: "sudoku-game-wraper",
};

function createLayoutElements() {
  const timeSection = createTimeSection("div", classNames.sudokuInfo);

  const sudokuGameWraper = createSudokuGameWraper(
    "div",
    classNames.sudokuGameWraper,
    classNames.sudokuGameWraper
  );

  return [timeSection, sudokuGameWraper];
}

function generateLayout(layoutElements, rootElement) {
  const sudokuWraper = createDomElement("div", classNames.sudokuWraper);

  for (let i = 0; i < layoutElements.length; i++) {
    sudokuWraper.appendChild(layoutElements[i]);
  }

  rootElement.appendChild(sudokuWraper);
}

function attachHandlerEvents() {
  document.addEventListener("keydown", handleArrowPress);
  document.addEventListener("keydown", handleKeyPress);
}

const app = document.getElementById("app");
const layoutElements = createLayoutElements();
generateLayout(layoutElements, app);

sudokuState.stateInit();
attachHandlerEvents();
