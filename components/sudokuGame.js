import createDomElem from "./createElem.js";

const sudokuGame = createDomElem("div", "sudoku-game", "sudoku-game");
for (let i = 1; i < 10; i++) {
    const sudokuGrid = createDomElem("div", "sudoku-grid", `sudoku-grid-${i}`, sudokuGame)

    for (let j = 1; j < 10; j++) {
        const sudokuCell = createDomElem("div", "sudoku-cell", `${i}-${j}`, sudokuGrid)
        sudokuCell.innerText = `${j}`
    }
}

export default sudokuGame

// const sudokuGame = document.createElement("div");
// sudokuGame.classList.add("sudoku-game");
// sudokuGame.id = "sudoku-game";
// sudokuGameWraper.appendChild(sudokuGame);

// for (let i = 1; i < 10; i++) {
//   const sudokuGrid = document.createElement("div");
//   sudokuGrid.classList.add("sudoku-grid");
//   sudokuGrid.id = `sudoku-grid-${i}`;

//   for (let j = 1; j < 10; j++) {
//     const sudokuCell = document.createElement("div");
//     sudokuCell.classList.add("sudoku-cell");
//     sudokuCell.innerText = `${j}`;
//     sudokuGrid.appendChild(sudokuCell);
//   }

//   sudokuGame.appendChild(sudokuGrid);
// }
