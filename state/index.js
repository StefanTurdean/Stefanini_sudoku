import { CLASS_NAME } from "../constants.js";
import { highlightCells } from "../services/highlight.service.js";
import { generateSudokuValues } from "../services/sudoku.service.js";

class State {
  #currentCell;
  #currentCellPosition;
  cells;

  set currentCell(cell) {
    this.#currentCell = cell;
    this.#currentCellPosition = this.#getCellPosition(cell);

    highlightCells(this.cells, this.#currentCell);
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
    console.log(CLASS_NAME.cell);
    this.cells = [...document.querySelectorAll(`.${CLASS_NAME.cell}`)];

    this.startNewGame();
  };

  startNewGame = () => {
    const sudokuValuesString = generateSudokuValues();

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].classList.remove(CLASS_NAME.locked);

      if (sudokuValuesString[i] !== ".") {
        this.cells[i].classList.add(CLASS_NAME.locked);
        this.cells[i].innerText = sudokuValuesString[i];
      } else {
        this.cells[i].innerText = "";
      }
    }

    this.currentCell = this.cells[0];
  };

  //TODO: (Y * 9) + X

  changeCurrentCellValue = (number) => {
    if (this.currentCell.innerText == number) {
      this.currentCell.innerText = "";
    } else {
      this.currentCell.innerText = number;
    }

    highlightCells(this.cells, this.currentCell);
  };

  eraseCurrentCellValue = () => {
    if (!this.currentCell.classList.contains(CLASS_NAME.locked)) {
      this.currentCell.innerText = "";
      highlightCells(this.cells, this.currentCell);
    }
  };
}

const sudokuState = new State();

export default sudokuState;
