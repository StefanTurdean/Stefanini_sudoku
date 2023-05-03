import highLightCells from "./cellHighlight.js";
import convertStringToGridArray from "./convertStringToGrid.js";

  

class State {
  #initialSudokuNumbers;
  #curentCell;
  currentSudokuNumbers;
  sudokuCells;
  newGame

  constructor() {
    this.#initialSudokuNumbers = sudoku.generate();
    this.currentSudokuNumbers = this.#initialSudokuNumbers;
    console.log(this.#initialSudokuNumbers);
  }
  
  stateInit = () => {
    this.sudokuCells = [...document.querySelectorAll(".sudoku-cell")];
    this.newGame = document.getElementById("")
    
    this.generateSudokuGrid();
    this.bindToGrid(this.sudokuCells);
  };

  generateSudokuGrid = () => {
    for (let i = 0; i < this.sudokuCells.length; i++) {
      if (this.currentSudokuNumbers[i] !== ".") {
        this.sudokuCells[i].classList.add("locked");
      }
      this.sudokuCells[i].innerText = this.currentSudokuNumbers[i];
    }

    if (!this.#curentCell) {
      this.#curentCell = document.getElementById("0-0");
      highLightCells(this.sudokuCells, this.#curentCell);
    }
  };

  bindToGrid = (sudokuCells) => {
    for (let i = 0; i < sudokuCells.length; i++) {
      sudokuCells[i].addEventListener("click", (event) => {
        this.setCurrentCell(event.target);
      });
    }
  };

  setCurrentCell = (event) => {
    this.#curentCell = event;
    highLightCells(this.sudokuCells, this.#curentCell);
  };

  arrowControls = (event) => {
    const moveIncrement = 1;
    let currentCellPosition = this.#curentCell.id.split("-");

    let currentCellX = Number(currentCellPosition[1]);
    let currentCellY = Number(currentCellPosition[0]);

    const gridBorderMin = 0
    const gridBorderMax = 8

    const leftArrowKey = 37
    const rightArrowKey = 39
    const upArrowKey = 38
    const downArrowKey = 40

    if (event.keyCode == leftArrowKey) {
      currentCellX = currentCellX - moveIncrement;

      if (currentCellX < gridBorderMin) {
        currentCellX = gridBorderMax;
      }
    }

    if (event.keyCode == rightArrowKey) {
      currentCellX = currentCellX + moveIncrement;

      if (currentCellX > gridBorderMax) {
        currentCellX = gridBorderMin;
      }
    }

    if (event.keyCode == upArrowKey) {
      currentCellY = currentCellY - moveIncrement;

      if (currentCellY < gridBorderMin) {
        currentCellY = gridBorderMax;
      }
    }

    if (event.keyCode == downArrowKey) {
      currentCellY = currentCellY + moveIncrement;

      if (currentCellY > gridBorderMax) {
        currentCellY = gridBorderMin;
      }
    }

    currentCellPosition = this.sudokuCells.find(x => x.id === `${currentCellY}-${currentCellX}`);

    this.setCurrentCell(currentCellPosition);
  };
}

const sudokuState = new State();

export default sudokuState;
