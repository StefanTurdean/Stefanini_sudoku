import createDomElement from "./createDomElement.js";
import createSudokuGridElement from "./sudokuGameGrid.js";
import createControlElement from "./sudokuControls.js";

const classNames = {
  sudokuGame: "sudoku-game",
  sudokuControls: "sudoku-controls",
};

function createSudokuGameWraper(elementType, className, id) {
  const sudokuGameWraper = createDomElement(elementType, className, id);

  const sudokuGrid = createSudokuGridElement(
    "div",
    classNames.sudokuGame,
    classNames.sudokuGame
  );

  const sudokuControl = createControlElement("div", classNames.sudokuControls);

  sudokuGameWraper.appendChild(sudokuGrid);
  sudokuGameWraper.appendChild(sudokuControl);

  return sudokuGameWraper;
}

export default createSudokuGameWraper;
