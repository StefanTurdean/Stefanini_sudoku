import { highlightCells } from "../services/highlight.service.js";
import { generateSudokuValues } from "../services/sudoku.service.js";

class State {
  #currentCell;
  #currentCellPosition;
  sudokuCells;

  set currentCell(cell) {
    this.#currentCell = cell;
    this.#currentCellPosition = this.#getCellPosition(cell);

    highlightCells(this.sudokuCells, this.#currentCell);
  }

  get currentCell() {
    return this.#currentCell;
  }

  get currentCellPosition() {
    return this.#currentCellPosition;
  }

  #getCellPosition(cell) {
    let [x, y] = cell.id.split("-");

    return { X: Number(x), Y: Number(y) };
  }

  initialize = () => {
    this.sudokuCells = [...document.querySelectorAll(".cell")];

    this.startNewGame();
  };

  startNewGame = () => {
    const sudokuValuesString = generateSudokuValues();

    for (let i = 0; i < this.sudokuCells.length; i++) {
      this.sudokuCells[i].classList.remove("locked");

      if (sudokuValuesString[i] !== ".") {
        this.sudokuCells[i].classList.add("locked");
        this.sudokuCells[i].innerText = sudokuValuesString[i];
      } else {
        this.sudokuCells[i].innerText = "";
      }
    }

    this.currentCell = document.getElementById("0-0");
  };

  //TODO: (Y * 9) + X

  changeCurrentCellValue = (number) => {
    if (this.currentCell.innerText == number) {
      this.currentCell.innerText = "";
    } else {
      this.currentCell.innerText = number;
    }

    highlightCells(this.sudokuCells, this.currentCell);
  };

  eraseCurrentCellValue = () => {
    if (!this.currentCell.classList.contains("locked")) {
      this.currentCell.innerText = "";
      highlightCells(this.sudokuCells, this.currentCell);
    }
  };
}

const sudokuState = new State();

export default sudokuState;
