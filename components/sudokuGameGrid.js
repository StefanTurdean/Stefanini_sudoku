import createDomElement from "./createDomElement.js";

// .6.31..45.137.4629..46...314..8651733..971264176423958...1364976415973829.7248516 index.js:38:9

function createSudokuGrid(parentElement) {
  const sudokuString = sudoku.generate();
  console.log(sudokuString[1]);



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

  for (let i = 0; i < sudokuString.length; i++) {}
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
