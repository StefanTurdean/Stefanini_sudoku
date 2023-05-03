import createDomElement from "./createDomElement.js";
import convertStringToGridArray from "./convertStringToGrid.js";

function generateSudokuNumbersId() {
  let sudokuNumbersIdString = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudokuNumbersIdString.push(`${i}-${j}`);
    }
  }

  return convertStringToGridArray(sudokuNumbersIdString);
}

function createSudokuGrid(parentElement) {

  const sudokuNumbersId = generateSudokuNumbersId();

  for (let i = 0; i < 9; i++) {
    let k = 0;

    const sudokuGrid = createDomElement(
      "div",
      "sudoku-grid",
      `sudoku-square-${i}`,
      parentElement
    );

    for (let j = 0; j < 9; j++) {
      if (j !== 0 && j % 3 === 0) {
        k += 1;
      }

      const sudokuCell = createDomElement("div", "sudoku-cell", ``, sudokuGrid);

      sudokuCell.id = sudokuNumbersId[i][k][j % 3];
    }
  }
}

function createSudokuGridElement(elementType, className, id) {
  const sudokuGameGrid = createDomElement(
    `${elementType}`,
    `${className}`,
    `${id}`
  );

  createSudokuGrid(sudokuGameGrid);

  return sudokuGameGrid;
}

export default createSudokuGridElement;
