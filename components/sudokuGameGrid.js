import createDomElement from "./createDomElement.js";
import convertStringToGridArray from "./convertStringToGrid.js";
import sudokuState from "./sudokuState.js";

const classNames = {
  sudokuGrid: "sudoku-grid",
  sudokuCell: "sudoku-cell",
};

function generateSudokuNumbersId() {
  let sudokuNumbersIdString = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      sudokuNumbersIdString.push(`${j}-${i}`);
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
      classNames.sudokuGrid,
      `sudoku-square-${i}`,
      parentElement
    );

    for (let j = 0; j < 9; j++) {
      if (j !== 0 && j % 3 === 0) {
        k += 1;
      }

      const sudokuCell = createDomElement(
        "div",
        classNames.sudokuCell,
        "",
        sudokuGrid
      );

      sudokuCell.addEventListener("click", (event) => {
        sudokuState.currentCell = event.target;
      });

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
