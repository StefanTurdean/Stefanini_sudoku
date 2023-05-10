const highlight = "highlight";
const selected = "selected";
const sameNumber = "same-number";
const wrongNumber = "wrong-number";

function highlightSimilarNumbers(cells, currentCell) {
  if (currentCell.innerText === "") {
    return;
  }

  for (let i = 0; i < cells.length; i++) {
    if (currentCell.innerText === cells[i].innerText) {
      cells[i].classList.add(sameNumber);
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
          currentCell.classList.add(wrongNumber);
          highlightedCell.classList.add(wrongNumber);
        }
      }
    }
  }
}

function reviewCellValidation(cells) {
  const wrongCells = [];

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains(wrongNumber)) {
      wrongCells.push(cells[i]);
    }
  }

  for (let i = 0; i < wrongCells.length; i++) {
    const highlightedCells = getHighlightedCells(wrongCells[i]);
    const currentCell = wrongCells[i];
    let isStillWrong = false;

    for (let j = 0; j < highlightedCells.length; j++) {
      const highlightedCellset = highlightedCells[j];

      for (let k = 0; k < highlightedCellset.length; k++) {
        const highlightedCell = highlightedCellset[k];

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
      currentCell.classList.remove(wrongNumber);
    }
  }
}

function getHighlightedCells(currentCell) {
  const serchCellsToHightLight = currentCell.id.split("-");

  const square = currentCell.parentElement.children;
  const row = [];
  const column = [];

  for (let i = 0; i < 9; i++) {
    const currentRow = document.getElementById(
      `${i}-${serchCellsToHightLight[1]}`
    );

    row.push(currentRow);

    const currentColumn = document.getElementById(
      `${serchCellsToHightLight[0]}-${i}`
    );

    column.push(currentColumn);
  }

  return [square, row, column];
}

function removeHighlightClass(cells) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove(highlight, selected, sameNumber);
  }
}

function addHighlight(cells) {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      cells[i][j].classList.add(highlight);
    }
  }
}

export default function highlightCells(cells, currentCell) {
  const cellsToHighlight = getHighlightedCells(currentCell);

  removeHighlightClass(cells);
  addHighlight(cellsToHighlight);
  reviewCellValidation(cells);
  highlightSimilarNumbers(cells, currentCell);

  if (currentCell.innerText !== "") {
    checkForMistakes(cellsToHighlight, currentCell);
  }

  currentCell.classList.add(selected);
}
