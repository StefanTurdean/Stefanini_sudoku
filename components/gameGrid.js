import { createDomElement } from "../services/layout.service.js";
import { CLASS_NAME, ELEMENT_ID } from "../constants.js";
import state from "../state/index.js";
import { handlePauseScreenClick } from "../services/eventHandler.service.js";

function idFormatter(idString) {
  const toFormat = [];
  const formattedIds = [];

  for (let i = 0; i < idString.length; i += 3) {
    const segment = idString.slice(i, i + 3);
    toFormat.push(segment);
  }

  for (let i = 0; i < toFormat.length; i++) {
    const helper = [];

    helper.push(toFormat[i]);
    helper.push(toFormat[i + 3]);
    helper.push(toFormat[i + 6]);

    formattedIds.push(helper);

    if (i % 3 == 2) {
      i = i + 6;
    }
  }

  return formattedIds;
}

function generateCellsIds() {
  let cellsId = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cellsId.push(`${j}-${i}`);
    }
  }

  return idFormatter(cellsId);
}

function createCellContent() {
  const cellContent = createDomElement("div", CLASS_NAME.cellContent, "", "");

  return cellContent;
}

function createSquares(parentElement) {
  const cellsId = generateCellsIds();

  for (let i = 0; i < 9; i++) {
    let k = 0;

    const square = createDomElement(
      "div",
      CLASS_NAME.square,
      `${ELEMENT_ID.square}-${i}`,
      parentElement
    );

    for (let j = 0; j < 9; j++) {
      if (j !== 0 && j % 3 === 0) {
        k += 1;
      }

      const cell = createDomElement("div", CLASS_NAME.cell, "", square);
      cell.id = cellsId[i][k][j % 3];

      cell.addEventListener("click", () => {
        state.currentCell = cell;
      });

      const cellContent = createCellContent();

      cell.appendChild(cellContent);
    }
  }
}

function createPauseScreen(parentElement) {
  const pauseScreen = createDomElement(
    "div",
    "pauseScreen",
    "pauseScreen",
    parentElement
  );

  pauseScreen.addEventListener("click", () => {
    handlePauseScreenClick();
  });
}

function createSudokuGridElement() {
  const sudokuGameGrid = createDomElement("div", CLASS_NAME.sudokuGame);

  createPauseScreen(sudokuGameGrid);
  createSquares(sudokuGameGrid);

  return sudokuGameGrid;
}

const sudokuGrid = createSudokuGridElement();

export default sudokuGrid;
