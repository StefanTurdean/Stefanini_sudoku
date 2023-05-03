import createTimeSection from "./components/sudokuTimer.js";
import createDomElement from "./components/createDomElement.js";
import createSudokuGameWraper from "./components/sudokuGameWraper.js";
import sudokuState from "./components/sudokuState.js";

function createLayoutElements() {
  const timeSection = createTimeSection("div", "sudoku-info");

  const sudokuGameWraper = createSudokuGameWraper(
    "div",
    "sudoku-game-wraper",
    "sudoku-game-wraper"
  );

  return [timeSection, sudokuGameWraper];
}

function generateLayout(layoutElements, rootElement) {
  const sudokuWraper = createDomElement("div", "sudoku-wraper");

  for (let i = 0; i < layoutElements.length; i++) {
    sudokuWraper.appendChild(layoutElements[i]);
  }

  rootElement.appendChild(sudokuWraper);
}

let setArrowHandler = () => {
  document.addEventListener("keydown", (event) => {
    sudokuState.arrowControls(event);
  });
};

const app = document.getElementById("app");
const layoutElements = createLayoutElements();
generateLayout(layoutElements, app);

sudokuState.stateInit();
setArrowHandler()
