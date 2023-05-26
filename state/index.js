import { CLASS_NAME, TIMER_CLASS_NAME } from "../constants.js";
import { formatTimer } from "../services/formatTime.service.js";
import { highlightCells } from "../services/highlight.service.js";
import { createDomElement } from "../services/layout.service.js";
import { generateSudokuValues } from "../services/sudoku.service.js";

const HISTORY_VALUE_KEY = {
  notes: "notes",
  value: "value",
};
class State {
  #currentCell;
  #currentCellPosition;
  #isGameRunning;
  notesIsActive;
  gameHistory;
  cells;
  gameTime;
  timerId;
  timerText;

  constructor() {
    this.notesIsActive = false;
    this.gameHistory = [];
    this.gameTime = {
      seconds: 0,
      minutes: 0,
    };
  }

  set currentCell(cell) {
    this.#currentCell = cell;
    this.#currentCellPosition = this.getCellPosition(cell);

    highlightCells(this.cells, this.#currentCell);
  }

  set isGameRunning(boolean) {
    console.log(this.isGameRunning);
    this.#isGameRunning = boolean;

    if (this.isGameRunning) {
      document.getElementById("pauseScreen").classList.remove("visible");

      this.timerId = setInterval(this.incrementTimer, 1000);
      console.log("timer running");
    } else {
      document.getElementById("pauseScreen").classList.add("visible");
      clearInterval(this.timerId);
      this.timerId = null;
      console.log("timer should stop");
    }
  }

  get isGameRunning() {
    return this.#isGameRunning;
  }

  get currentCell() {
    return this.#currentCell;
  }

  get currentCellPosition() {
    return this.#currentCellPosition;
  }

  getCellPosition(cell) {
    let [x, y] = cell.id.split("-");

    return { X: Number(x), Y: Number(y) };
  }

  initialize = () => {
    this.cells = [...document.querySelectorAll(`.${CLASS_NAME.cell}`)];

    this.startNewGame();
  };

  startNewGame = () => {
    const sudokuValuesString = generateSudokuValues();
    this.timerText = document.getElementById(TIMER_CLASS_NAME.span);

    this.gameHistory.length = 0;
    this.gameTime.seconds = 0;
    this.gameTime.minutes = 0;

    this.timerText.innerText = formatTimer(
      this.gameTime.seconds,
      this.gameTime.minutes
    );

    if (this.timerId) {
      clearInterval(this.timerId);
    }

    this.isGameRunning = true;

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].classList.remove(CLASS_NAME.locked);
      this.cells[i].classList.remove(CLASS_NAME.notes);
      delete this.cells[i].dataset.notes;

      if (sudokuValuesString[i] !== ".") {
        this.cells[i].classList.add(CLASS_NAME.locked);
        this.cells[i].innerText = sudokuValuesString[i];
      } else {
        this.cells[i].innerText = "";
      }
    }

    this.currentCell = this.cells[0];
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
      this.currentCell.classList.add(CLASS_NAME.notes);
      this.populateCellWithNotes(currentCellNotes, this.currentCell);
    } else {
      this.currentCell.innerHTML = "";
      this.deleteCurrentNoteDataset();
    }
  };

  populateCellWithNotes(currentCellNotes, targetCell) {
    targetCell.innerHTML = "";

    for (let i = 0; i < 9; i++) {
      let noteDiv = createDomElement("div", CLASS_NAME.note, "", targetCell);
    }

    for (let i = 0; i < currentCellNotes.length; i++) {
      const children = targetCell.children;

      children[currentCellNotes[i] - 1].innerHTML = currentCellNotes[i];
    }
  }

  deleteCurrentNoteDataset = () => {
    delete this.currentCell.dataset.notes;
    this.currentCell.classList.remove(CLASS_NAME.notes);
  };

  eraseCurrentCellValue = () => {
    if (!this.isGameRunning) {
      this.isGameRunning = true;
      return;
    }

    this.addToHistory(this.currentCell);

    if (!this.currentCell.classList.contains(CLASS_NAME.locked)) {
      this.currentCell.innerHTML = "";
      this.deleteCurrentNoteDataset();
      highlightCells(this.cells, this.currentCell);
    }
  };

  changeCurrentCellValue = (number) => {
    if (!this.isGameRunning) {
      this.isGameRunning = true;
      return;
    }

    this.addToHistory(this.currentCell);

    if (this.notesIsActive) {
      this.updateCurrentNoteDataset(number);
    } else {
      this.deleteCurrentNoteDataset();

      if (this.currentCell.innerHTML == number) {
        this.currentCell.innerHTML = "";
      } else {
        this.currentCell.innerHTML = number;
      }
    }

    highlightCells(this.cells, this.currentCell);
  };

  addToHistory = (currentCell) => {
    const historyItem = {
      id: currentCell.id,
    };

    if (currentCell.dataset.notes) {
      historyItem["key"] = HISTORY_VALUE_KEY.notes;
      historyItem[HISTORY_VALUE_KEY.notes] = JSON.parse(
        currentCell.dataset.notes
      );

      console.log(historyItem[HISTORY_VALUE_KEY.notes]);
    } else {
      historyItem["key"] = HISTORY_VALUE_KEY.value;
      historyItem[HISTORY_VALUE_KEY.value] = currentCell.innerHTML;
    }

    this.gameHistory.push(historyItem);
  };

  undo = () => {
    if (!this.isGameRunning) {
      this.isGameRunning = true;
      return;
    }

    if (!this.gameHistory.length) {
      return;
    }

    const lastChange = this.gameHistory.pop();

    const lastCell = this.cells.find((cell) => cell.id === lastChange.id);

    lastCell.innerHTML = "";
    delete lastCell.dataset.notes;
    lastCell.classList.remove(CLASS_NAME.notes);

    switch (lastChange.key) {
      case HISTORY_VALUE_KEY.notes:
        lastCell.classList.add(CLASS_NAME.notes);
        lastCell.dataset.notes = JSON.stringify(lastChange.notes);

        this.populateCellWithNotes(lastChange.notes, lastCell);
        break;
      case HISTORY_VALUE_KEY.value:
        lastCell.innerHTML = lastChange.value;
        break;
      default:
        console.error(`unknown history value key`);
    }

    this.currentCell = lastCell;
  };

  incrementTimer = () => {
    this.gameTime.seconds += 1;

    if (this.gameTime.seconds % 60 === 0) {
      this.gameTime.seconds = 0;
      this.gameTime.minutes += 1;
    }

    this.timerText.innerText = formatTimer(
      this.gameTime.seconds,
      this.gameTime.minutes
    );
  };
}

const sudokuState = new State();

export default sudokuState;
