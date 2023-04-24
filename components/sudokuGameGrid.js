import createDomElement from "./createDomElement.js";


function createSudokuGrid(parentElement) {
  for (let i = 1; i < 10; i++) {
    const sudokuGrid = createDomElement(
      "div",
      "sudoku-grid",
      `sudoku-grid-${i}`,
      parentElement
    );

    for (let j = 1; j < 10; j++) {
      const sudokuCell = createDomElement(
        "div",
        "sudoku-cell",
        `${i}-${j}`,
        sudokuGrid
      );
      sudokuCell.innerText = `${j}`;
    }
  }
}

function createSudokuGridElement(elementType, className, id) {
  const sudokuGameGrid = createDomElement(`${elementType}`, `${className}` , `${id}`);

  createSudokuGrid(sudokuGameGrid);  

  return sudokuGameGrid
}

export default createSudokuGridElement;
