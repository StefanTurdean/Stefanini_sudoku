import createDomElement from "./createDomElement.js";

// asdasda RENAME TO SUDOKU GRID
// rename sudokuGame to sudokuGameGrid

const sudokuGameGrid = createDomElement("div", "sudoku-game", "sudoku-game");

createSudokuGrid();

function createSudokuGrid() {
  for (let i = 1; i < 10; i++) {
    const sudokuGrid = createDomElement(
      "div",
      "sudoku-grid",
      `sudoku-grid-${i}`,
      sudokuGameGrid
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

export default sudokuGameGrid;
