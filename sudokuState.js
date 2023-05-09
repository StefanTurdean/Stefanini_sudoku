// import highLightCells from "./cellHighlight.js";

// class Cell {
//   value;
//   positionX;
//   positionY;
//   id;
//   #isLocked;

//   constructor(value, position) {
//     this.value = value;
//     this.positionX = positionX;
//     this.positiony = positionY;
//     this.#isLocked = false;
//   }

//   setLock = (boolean) => {
//     this.#isLocked = boolean;
//   };
// }

// class State {
//   #initialSudokuNumbers;
//   #curentCell;
//   currentSudokuNumbers;
//   sudokuCells;

//   constructor() {
//     this.#initialSudokuNumbers = sudoku.generate();
//     this.sudokuCells = [];

//     for (let i = 0; i < this.#initialSudokuNumbers.length; i++) {

//       const cell = new Cell(this.#initialSudokuNumbers[i], i);
//       this.sudokuCells.push(cell);
//     }

//     this.currentSudokuNumbers = this.#initialSudokuNumbers;
//     console.log(this.#initialSudokuNumbers);
//   }

//   stateInit = () => {
//     this.generateSudokuGrid();
//   };

//   generateSudokuGrid = () => {
//     for (let i = 0; i < this.sudokuCells.length; i++) {
//       if (this.currentSudokuNumbers[i].number !== ".") {
//         this.sudokuCells[i].setLock(true);
//       }
//     }

//     if (!this.#curentCell) {
//       console.log(this.sudokuCells);
//       this.#curentCell = this.sudokuCells[0];
//       highLightCells(this.sudokuCells, this.#curentCell);
//     }
//   };

//   bindToGrid = (sudokuCells) => {
//     for (let i = 0; i < sudokuCells.length; i++) {
//       sudokuCells[i].addEventListener("click", (event) => {
//         this.setCurrentCell(event.target);
//       });
//     }
//   };

//   setCurrentCell = (event) => {
//     this.#curentCell = event;
//     highLightCells(this.sudokuCells, this.#curentCell);
//   };

//   arrowControls = (event) => {
//     let moveIncrement = 1;
//     let currentCellPosition = this.#curentCell.id.split("-");

//     let currentCellX = Number(currentCellPosition[1]);
//     let currentCellY = Number(currentCellPosition[0]);

//     const gridBorderMin = 0;
//     const gridBorderMax = 8;

//     if (event.keyCode == 37) {
//       currentCellX = currentCellX - moveIncrement;

//       if (currentCellX < gridBorderMin) {
//         currentCellX = gridBorderMax;
//       }
//     }

//     if (event.keyCode == 39) {
//       currentCellX = currentCellX + moveIncrement;

//       if (currentCellX > gridBorderMax) {
//         currentCellX = gridBorderMin;
//       }
//     }

//     if (event.keyCode == 38) {
//       currentCellY = currentCellY - moveIncrement;

//       if (currentCellY < gridBorderMin) {
//         currentCellY = gridBorderMax;
//       }
//     }

//     if (event.keyCode == 40) {
//       currentCellY = currentCellY + moveIncrement;

//       if (currentCellY > gridBorderMax) {
//         currentCellY = gridBorderMin;
//       }
//     }

//     currentCellPosition = this.sudokuCells.find(
//       (x) => x.id === `${currentCellY}-${currentCellX}`
//     );

//     this.setCurrentCell(currentCellPosition);
//   };
// }

// const sudokuState = new State();

// export default sudokuState;
