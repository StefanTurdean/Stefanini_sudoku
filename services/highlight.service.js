import { HIGHLIGHT_CLASS_NAME } from "../constants.js";

function highlightSimilarNumbers(cells, currentCell) {
  if (currentCell.innerText === "") {
    return;
  }

  for (let i = 0; i < cells.length; i++) {
    if (currentCell.innerText === cells[i].innerText) {
      cells[i].classList.add(HIGHLIGHT_CLASS_NAME.similar);
    }
  }
}

function checkForMistakes(highlightedCells, currentCell) {
  for (let i = 0; i < highlightedCells.length; i++) {
    const highlightedSet = highlightedCells[i];

    for (let j = 0; j < highlightedSet.length; j++) {
      const highlightedCell = highlightedSet[j];

      if (currentCell.id !== highlightedCell.id) {
        if (currentCell.innerText === highlightedCell.innerText) {
          currentCell.classList.add(HIGHLIGHT_CLASS_NAME.invalid);
          highlightedCell.classList.add(HIGHLIGHT_CLASS_NAME.invalid);
        }
      }
    }
  }
}

function reviewCellValidation(cells) {
  const wrongCells = [];

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains(HIGHLIGHT_CLASS_NAME.invalid)) {
      wrongCells.push(cells[i]);
    }
  }

  for (let i = 0; i < wrongCells.length; i++) {
    const highlightedCells = getHighlightedCells(wrongCells[i]);
    const currentCell = wrongCells[i];
    let isStillWrong = false;

    for (let j = 0; j < highlightedCells.length; j++) {
      const highlightedCellSet = highlightedCells[j];

      for (let k = 0; k < highlightedCellSet.length; k++) {
        const highlightedCell = highlightedCellSet[k];

        if (currentCell.id !== highlightedCell.id) {
          if (
            currentCell.innerText === highlightedCell.innerText &&
            currentCell.innerText !== ""
          ) {
            isStillWrong = true;
          }
        }
      }
    }

    if (!isStillWrong) {
      currentCell.classList.remove(HIGHLIGHT_CLASS_NAME.invalid);
    }
  }
}

function getHighlightedCells(currentCell) {
  const searchCellsToHightLight = currentCell.id.split("-");

  const square = currentCell.parentElement.children;
  const row = [];
  const column = [];

  for (let i = 0; i < 9; i++) {
    const currentRow = document.getElementById(
      `${i}-${searchCellsToHightLight[1]}`
    );

    row.push(currentRow);

    const currentColumn = document.getElementById(
      `${searchCellsToHightLight[0]}-${i}`
    );

    column.push(currentColumn);
  }

  return [square, row, column];
}

function removeHighlightClass(cells) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove(
      HIGHLIGHT_CLASS_NAME.highlight,
      HIGHLIGHT_CLASS_NAME.selected,
      HIGHLIGHT_CLASS_NAME.similar
    );
  }
}

function addHighlight(cells) {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      cells[i][j].classList.add(HIGHLIGHT_CLASS_NAME.highlight);
    }
  }
}

export function highlightCells(cells, currentCell) {
  const cellsToHighlight = getHighlightedCells(currentCell);

  removeHighlightClass(cells);
  addHighlight(cellsToHighlight);
  reviewCellValidation(cells);

  //
  highlightSimilarNumbers(cells, currentCell);

  if (currentCell.innerHtml !== "") {
    checkForMistakes(cellsToHighlight, currentCell);
  }
  //
  currentCell.classList.add(HIGHLIGHT_CLASS_NAME.selected);
}
