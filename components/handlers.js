import sudokuState from "./sudokuState.js";

export function handleArrowPress(event) {
  const moveIncrement = 1;

  const currentCellPosition = sudokuState.getCellPositon(
    sudokuState.currentCell
  );

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

  let newCell = sudokuState.sudokuCells.find(
    (x) => x.id === `${currentCellPosition.X}-${currentCellPosition.Y}`
  );

  sudokuState.currentCell = newCell;
}

export function handleNumpadClick(number) {
  if (!sudokuState.currentCell.classList.contains("locked")) {
    sudokuState.changeCurrentCellNumber(number);
  }
}

export function handleKeyPress(event) {
  if (!sudokuState.currentCell.classList.contains("locked")) {
    const numberKeys = /[1-9]/;

    if (numberKeys.test(event.key)) {
      sudokuState.changeCurrentCellNumber(event.key);
    }
  }
}
