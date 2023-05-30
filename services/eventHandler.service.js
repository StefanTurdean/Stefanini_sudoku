import { CLASS_NAME, ELEMENT_ID, TIMER_CLASS_NAME } from "../constants.js";
import state from "../state/index.js";

const KEYBOARD_ARROW_KEY = Object.freeze({
  left: "ArrowLeft",
  right: "ArrowRight",
  up: "ArrowUp",
  down: "ArrowDown",
});

export function handleArrowPress(event) {
  if (!state.isGameRunning) {
    const timeIcon = document.getElementById(ELEMENT_ID.timerIcon);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.pause);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.play);
    state.isGameRunning = true;
    return;
  }

  const moveIncrement = 1;

  const gridBorderMin = 0;
  const gridBorderMax = 8;

  const currentCellPosition = state.currentCellPosition;

  if (event.key == KEYBOARD_ARROW_KEY.left) {
    currentCellPosition.X = currentCellPosition.X - moveIncrement;

    if (currentCellPosition.X < gridBorderMin) {
      currentCellPosition.X = gridBorderMax;
    }
  }

  if (event.key == KEYBOARD_ARROW_KEY.right) {
    currentCellPosition.X = currentCellPosition.X + moveIncrement;

    if (currentCellPosition.X > gridBorderMax) {
      currentCellPosition.X = gridBorderMin;
    }
  }

  if (event.key == KEYBOARD_ARROW_KEY.up) {
    currentCellPosition.Y = currentCellPosition.Y - moveIncrement;

    if (currentCellPosition.Y < gridBorderMin) {
      currentCellPosition.Y = gridBorderMax;
    }
  }

  if (event.key == KEYBOARD_ARROW_KEY.down) {
    currentCellPosition.Y = currentCellPosition.Y + moveIncrement;

    if (currentCellPosition.Y > gridBorderMax) {
      currentCellPosition.Y = gridBorderMin;
    }
  }

  let newCell = state.cells.find(
    (x) => x.id === `${currentCellPosition.X}-${currentCellPosition.Y}`
  );

  state.currentCell = newCell;
}

export function handleNumpadClick(number) {
  if (!state.isGameRunning) {
    const timeIcon = document.getElementById(ELEMENT_ID.timerIcon);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.pause);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.play);
    state.isGameRunning = true;
    return;
  }

  if (!state.currentCell.classList.contains(CLASS_NAME.locked)) {
    state.changeCurrentCellValue(number);
  }
}

export function handleKeyPress(event) {
  if (!state.isGameRunning) {
    const timeIcon = document.getElementById(ELEMENT_ID.timerIcon);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.pause);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.play);
    state.isGameRunning = true;
    return;
  }

  if (!state.currentCell.classList.contains(CLASS_NAME.locked)) {
    const numberKeys = /^[1-9]$/;

    if (numberKeys.test(event.key)) {
      state.changeCurrentCellValue(Number(event.key));
    }
  }
}

export function handleUndoClick() {
  if (!state.isGameRunning) {
    const timeIcon = document.getElementById(ELEMENT_ID.timerIcon);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.pause);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.play);
    state.isGameRunning = true;
    return;
  }

  state.undo();
}

export function handleEraseClick() {
  if (!state.isGameRunning) {
    const timeIcon = document.getElementById(ELEMENT_ID.timerIcon);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.pause);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.play);
    state.isGameRunning = true;
    return;
  }

  state.eraseCurrentCellValue();
}

export function handleNotesClick() {
  if (!state.isGameRunning) {
    const timeIcon = document.getElementById(ELEMENT_ID.timerIcon);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.pause);
    timeIcon.classList.toggle(TIMER_CLASS_NAME.play);
    state.isGameRunning = true;
    return;
  }

  document
    .getElementById(ELEMENT_ID.notes)
    .classList.toggle(CLASS_NAME.iconActive);
  state.notesIsActive = !state.notesIsActive;
}

export function attacheDocumentEventHandlers() {
  document.addEventListener("keydown", handleArrowPress);
  document.addEventListener("keydown", handleKeyPress);
}

export function handleTimerClick() {
  const timeIcon = document.getElementById(ELEMENT_ID.timerIcon);
  timeIcon.classList.toggle(TIMER_CLASS_NAME.pause);
  timeIcon.classList.toggle(TIMER_CLASS_NAME.play);
  state.isGameRunning = !state.isGameRunning;
}
