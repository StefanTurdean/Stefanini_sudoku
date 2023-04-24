import createTimeSection from "./components/sudokuTimer.js";
import createDomElement from "./components/createDomElement.js";
import createSudokuGameWraper from "./components/sudokuGameWraper.js";

function createLayoutElements() {
  const layoutOrder = [];

  const timeSection = createTimeSection("div", "sudoku-info");

  const sudokuGameWraper = createSudokuGameWraper(
    "div",
    "sudoku-game-wraper",
    "sudoku-game-wraper"
  );

  layoutOrder.push(timeSection);
  layoutOrder.push(sudokuGameWraper);

  return layoutOrder;
}

function generateLeyout(leyoutOrderArr, parentElement) {
  const sudokuWraper = createDomElement("div", "sudoku-wraper")

  for (let i = 0; i < leyoutOrderArr.length; i++) {
    sudokuWraper.appendChild(leyoutOrderArr[i]);
  }

  parentElement.appendChild(sudokuWraper);
}

const app = document.getElementById("app");
const layoutOrder = createLayoutElements();

generateLeyout(layoutOrder, app);

// create a funtion to call all creates funtions
// create a funtion to generate the layout
// create function that takes an arr with the append order
