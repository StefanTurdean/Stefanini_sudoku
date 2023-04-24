import createDomElement from "./createDomElement.js";
import createSudokuGridElement from "./sudokuGameGrid.js";
import createControlElement from "./sudokuControls.js";

function createSudokuGameWraper(elementType, className, id) {
  const sudokuGameWraper = createDomElement(elementType, className, id);

  const sudokuGrid = createSudokuGridElement(
    "div",
    "sudoku-game",
    "sudoku-game"
  );

  const sudokuControl = createControlElement("div", "sudoku-controls");

  sudokuGameWraper.appendChild(sudokuGrid);
  sudokuGameWraper.appendChild(sudokuControl);

  return sudokuGameWraper;
}

export default createSudokuGameWraper;
