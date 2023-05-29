import { CLASS_NAME, HIGHLIGHT_CLASS_NAME } from "../constants.js";

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
          const currentCellContent = currentCell.children[0];
          const highlightedCellContent = highlightedCell.children[0];

          if (
            currentCellContent.innerHTML === highlightedCellContent.innerHTML &&
            currentCellContent.innerHTML !== ""
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

function highlightSimilarNumbers(cells, currentCellContent) {
  for (let i = 0; i < cells.length; i++) {
    const cellContent = cells[i].children[0];

    if (currentCellContent.innerHTML === cellContent.innerHTML) {
      cells[i].classList.add(HIGHLIGHT_CLASS_NAME.similar);
    }
  }
}

function checkForMistakes(highlightedCells, currentCell, currentCellContent) {
  for (let i = 0; i < highlightedCells.length; i++) {
    const highlightedSet = highlightedCells[i];

    for (let j = 0; j < highlightedSet.length; j++) {
      const highlightedCell = highlightedSet[j];

      if (currentCell.id !== highlightedCell.id) {
        const highlightedCellContent = highlightedCell.children[0];
        if (currentCellContent.innerHTML === highlightedCellContent.innerHTML) {
          currentCell.classList.add(HIGHLIGHT_CLASS_NAME.invalid);
          highlightedCell.classList.add(HIGHLIGHT_CLASS_NAME.invalid);
        }
      }
    }
  }
}

export function highlightCells(cells, currentCell) {
  const cellsToHighlight = getHighlightedCells(currentCell);
  const currentCellContent = currentCell.children[0];

  removeHighlightClass(cells);
  addHighlight(cellsToHighlight);
  reviewCellValidation(cells);

  if (
    currentCellContent.innerHTML &&
    !currentCell.classList.contains(CLASS_NAME.notes)
  ) {
    highlightSimilarNumbers(cells, currentCellContent);
    checkForMistakes(cellsToHighlight, currentCell, currentCellContent);
  }

  currentCell.classList.add(HIGHLIGHT_CLASS_NAME.selected);
}
