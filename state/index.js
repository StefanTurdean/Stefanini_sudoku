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
  #currentCellContent;
  #currentCellPosition;
  #isGameRunning;
  notesIsActive;
  gameHistory;
  cells;
  cellsContent;
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
    this.#currentCellContent = cell.children[0];

    highlightCells(this.cells, this.#currentCell);
  }

  set isGameRunning(boolean) {
    this.#isGameRunning = boolean;

    if (this.isGameRunning) {
      document.getElementById("pauseScreen").classList.remove("visible");
      this.timerId = setInterval(this.incrementTimer, 1000);
    } else {
      document.getElementById("pauseScreen").classList.add("visible");
      clearInterval(this.timerId);
      this.timerId = null;
    }

    this.toggleCellsContent(this.#isGameRunning);
  }

  get currentCellPosition() {
    return this.#currentCellPosition;
  }

  get isGameRunning() {
    return this.#isGameRunning;
  }

  get currentCell() {
    return this.#currentCell;
  }

  get currentCellContent() {
    return this.#currentCellContent;
  }

  getCellPosition(cell) {
    let [x, y] = cell.id.split("-");

    return { X: Number(x), Y: Number(y) };
  }

  initialize = () => {
    this.cells = [...document.querySelectorAll(`.${CLASS_NAME.cell}`)];
    this.cellsContent = [
      ...document.querySelectorAll(`.${CLASS_NAME.cellContent}`),
    ];

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
      this.cellsContent[i].classList.remove(CLASS_NAME.notes);
      delete this.cells[i].dataset.notes;

      if (sudokuValuesString[i] !== ".") {
        this.cells[i].classList.add(CLASS_NAME.locked);
        this.cellsContent[i].innerText = sudokuValuesString[i];
      } else {
        this.cellsContent[i].innerText = "";
      }
    }

    this.currentCell = this.cells[0];
    this.#currentCellContent = this.cellsContent[0];
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
      this.currentCellContent.classList.add(CLASS_NAME.notes);
      this.populateCellWithNotes(currentCellNotes, this.currentCellContent);
    } else {
      this.currentCellContent.innerHTML = "";
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
    this.currentCellContent.classList.remove(CLASS_NAME.notes);
  };

  eraseCurrentCellValue = () => {
    this.addToHistory(this.currentCell);

    if (!this.currentCell.classList.contains(CLASS_NAME.locked)) {
      this.currentCellContent.innerHTML = "";
      this.deleteCurrentNoteDataset();
      highlightCells(this.cells, this.currentCell);
    }
  };

  changeCurrentCellValue = (number) => {
    this.addToHistory(this.currentCell);

    if (this.notesIsActive) {
      this.updateCurrentNoteDataset(number);
    } else {
      this.deleteCurrentNoteDataset();

      if (this.currentCellContent.innerHTML == number) {
        this.currentCellContent.innerHTML = "";
      } else {
        this.currentCellContent.innerHTML = number;
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
      historyItem[HISTORY_VALUE_KEY.value] = this.currentCellContent.innerHTML;
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
    const lastCellContent = lastCell.children[0];

    lastCell.lastCellContent = "";
    delete lastCell.dataset.notes;
    lastCellContent.classList.remove(CLASS_NAME.notes);

    switch (lastChange.key) {
      case HISTORY_VALUE_KEY.notes:
        lastCellContent.classList.add(CLASS_NAME.notes);
        lastCell.dataset.notes = JSON.stringify(lastChange.notes);

        this.populateCellWithNotes(lastChange.notes, lastCellContent);
        break;
      case HISTORY_VALUE_KEY.value:
        lastCellContent.innerHTML = lastChange.value;
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

  toggleCellsContent = (isGameRunning) => {
    if (isGameRunning) {
      for (let i = 0; i < this.cells.length; i++) {
        this.cells[i].classList.remove(CLASS_NAME.noBackground);
        this.cellsContent[i].classList.remove(CLASS_NAME.hidden);
      }
    } else {
      for (let i = 0; i < this.cells.length; i++) {
        this.cells[i].classList.add(CLASS_NAME.noBackground);
        this.cellsContent[i].classList.add(CLASS_NAME.hidden);
      }
    }
  };
}

const sudokuState = new State();

export default sudokuState;
