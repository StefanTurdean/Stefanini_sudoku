import highLightCells from "./cellHighlight.js";
import formatStringToGridString from "./formatStingToGridSting.js";

class State {
  #initialSudokuNumbers;
  #curentCell;
  currentSudokuNumbers;
  sudokuCells;

  get initialSudokuNumbers() {
    return this.#initialSudokuNumbers;
  }

  set initialSudokuNumbers(number) {
    this.#initialSudokuNumbers = number;
    console.log(this.#initialSudokuNumbers);
    this.currentSudokuNumbers = this.#initialSudokuNumbers;
  }

  set curentCell(target) {
    this.#curentCell = target;
    highLightCells(this.sudokuCells, this.#curentCell);
  }

  get curentCell() {
    return this.#curentCell;
  }

  stateInit = () => {
    this.sudokuCells = [...document.querySelectorAll(".sudoku-cell")];

    this.newGame();
  };

  newGame = () => {
    this.initialSudokuNumbers = sudoku.generate();
    this.populateSudokuGrid();
  };

  populateSudokuGrid = () => {
    const formatedSudokuString = formatStringToGridString(
      this.currentSudokuNumbers
    );

    for (let i = 0; i < this.sudokuCells.length; i++) {
      this.sudokuCells[i].classList.remove("locked");

      if (formatedSudokuString[i] !== ".") {
        this.sudokuCells[i].classList.add("locked");
        this.sudokuCells[i].innerText = formatedSudokuString[i];
      } else {
        this.sudokuCells[i].innerText = "";
      }
    }

    this.curentCell = document.getElementById("0-0");
  };

  getCellPositon = (cell) => {
    let currentCellPosition = cell.id.split("-");

    let currentCellX = Number(currentCellPosition[0]);
    let currentCellY = Number(currentCellPosition[1]);

    return { X: currentCellX, Y: currentCellY };
  };

  changeCurrentNumbers = () => {
    const currentCellPosition = this.getCellPositon(this.curentCell);
    const currentPositionInString =
      (currentCellPosition.X + 1) * (currentCellPosition.Y + 1) - 1;

    const stringBeforeCurrentCellPosition = this.currentSudokuNumbers.slice(
      0,
      currentPositionInString
    );

    const stringAfterCurrentCellPosition = this.currentSudokuNumbers.slice(
      -(currentPositionInString - 1)
    );
  };

  handleArrowPress = (event) => {
    const moveIncrement = 1;

    const currentCellPosition = this.getCellPositon(this.curentCell);

    const gridBorderMin = 0;
    const gridBorderMax = 8;

    const leftArrowKey = "ArrowLeft";
    const rightArrowKey = "ArrowRight";
    const upArrowKey = "ArrowUp";
    const downArrowKey = "ArrowDown";

    if (event.key == leftArrowKey) {
      currentCellPosition.X = currentCellPosition.X - moveIncrement;

      if (currentCellPosition.X < gridBorderMin) {
        currentCellPosition.X = gridBorderMax;
      }
    }

    if (event.key == rightArrowKey) {
      currentCellPosition.X = currentCellPosition.X + moveIncrement;

      if (currentCellPosition.X > gridBorderMax) {
        currentCellPosition.X = gridBorderMin;
      }
    }

    if (event.key == upArrowKey) {
      currentCellPosition.Y = currentCellPosition.Y - moveIncrement;

      if (currentCellPosition.Y < gridBorderMin) {
        currentCellPosition.Y = gridBorderMax;
      }
    }

    if (event.key == downArrowKey) {
      currentCellPosition.Y = currentCellPosition.Y + moveIncrement;

      if (currentCellPosition.Y > gridBorderMax) {
        currentCellPosition.Y = gridBorderMin;
      }
    }

    let newCell = this.sudokuCells.find(
      (x) => x.id === `${currentCellPosition.X}-${currentCellPosition.Y}`
    );

    this.curentCell = newCell;
  };

  handleNumpadClick = (number) => {
    this.changeCurrentNumbers();
    if (!this.curentCell.classList.contains("locked")) {
      this.changeCurrentCellNumber(number);
    }
  };

  handleKeyPress = (event) => {
    if (!this.curentCell.classList.contains("locked")) {
      const numberKeys = /[0-9]/;

      if (numberKeys.test(event.key)) {
        this.changeCurrentCellNumber(event.key);
      }
    }
  };

  changeCurrentCellNumber = (number) => {
    if (this.curentCell.innerText == number) {
      this.curentCell.innerText = "";
    } else {
      this.curentCell.innerText = number;
    }
  };
}

const sudokuState = new State();

export default sudokuState;
