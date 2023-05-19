import { CLASS_NAME } from "../constants.js";
import { highlightCells } from "../services/highlight.service.js";
import { createDomElement } from "../services/layout.service.js";
import { generateSudokuValues } from "../services/sudoku.service.js";

class State {
  #currentCell;
  #currentCellPosition;
  notesIsActive;
  cells;

  constructor() {
    this.notesIsActive = false;
  }

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

  changeCurrentCellValue = (number) => {
    if (this.notesIsActive) {
      this.updateCurrentNoteDataset(number);
    } else {
      if (this.currentCell.innerHTML == number) {
        this.currentCell.innerHTML = "";
      } else {
        this.currentCell.innerHTML = number;
      }
    }

    highlightCells(this.cells, this.currentCell);
  };

  updateCurrentNoteDataset = (number) => {
    let currentCellNotes = [];

    if (this.currentCell.dataset.notes) {
      currentCellNotes = JSON.parse(this.currentCell.dataset.notes);

      const index = currentCellNotes.indexOf(number);

      if (index == -1) {
        currentCellNotes.push(number);
      } else {
        currentCellNotes.splice(index, 1);
      }
    } else {
      currentCellNotes.push(number);
    }

    if (currentCellNotes.length) {
      this.currentCell.dataset.notes = JSON.stringify(currentCellNotes);
      this.currentCell.classList.add("notes");
      this.populateCurrentCellNotes(currentCellNotes);
    } else {
      this.deleteCurrentNoteDataset();
      this.currentCell.innerHTML = "";
    }
  };

  deleteCurrentNoteDataset = () => {
    delete this.currentCell.dataset.notes;
    this.#currentCell.classList.remove("notes");
  };

  populateCurrentCellNotes(currentCellNotes) {
    this.currentCell.innerHTML = "";

    for (let i = 0; i < 9; i++) {
      let noteDiv = createDomElement("div", "note", "", this.currentCell);
    }
    for (let i = 0; i < currentCellNotes.length; i++) {
      const children = this.currentCell.children;

      children[currentCellNotes[i] - 1].innerHTML = currentCellNotes[i];
    }
  }

  eraseCurrentCellValue = () => {
    if (!this.currentCell.classList.contains(CLASS_NAME.locked)) {
      this.currentCell.innerHTML = "";
      highlightCells(this.cells, this.currentCell);
    }
  };
}

const sudokuState = new State();

export default sudokuState;
