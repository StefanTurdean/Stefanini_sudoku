import { CLASS_NAME } from "../constants.js";
import state from "../state/index.js";

const KEYBOARD_ARROW_KEY = Object.freeze({
  left: "ArrowLeft",
  right: "ArrowRight",
  up: "ArrowUp",
  down: "ArrowDown",
});

export function handleArrowPress(event) {
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
  if (!state.currentCell.classList.contains(CLASS_NAME.locked)) {
    state.changeCurrentCellValue(number);
  }
}

export function handleKeyPress(event) {
  if (!state.currentCell.classList.contains(CLASS_NAME.locked)) {
    const numberKeys = /^[1-9]$/;

    if (numberKeys.test(event.key)) {
      state.changeCurrentCellValue(event.key);
    }
  }
}

export function attacheDocumentEventHandlers() {
  document.addEventListener("keydown", handleArrowPress);
  document.addEventListener("keydown", handleKeyPress);
}
