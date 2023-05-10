const highLight = "highLight";
const highLightStrong = "highLight-strong";
const sameNumber = "same-number";

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

function checkForMistakes(currentCellLocation, currentCell) {
  for (let i = 0; i < currentCellLocation.length; i++) {
    for (let j = 0; j < currentCellLocation[i].length; j++) {
      if (currentCell.id !== currentCellLocation[i][j].id) {
        if (currentCell.innerText === currentCellLocation[i][j].innerText) {
          currentCell.classList.add("wrong-number");
          currentCellLocation[i][j].classList.add("wrong-number");
        }
      }
    }
  }
}

function reviewCellValidation(cells) {
  const wrongCells = [];

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains("wrong-number")) {
      wrongCells.push(cells[i]);
    }
  }

  for (let i = 0; i < wrongCells.length; i++) {
    const currentCellLocation = getHighlightedCells(wrongCells[i]);
    const currentCell = wrongCells[i];
    let isStillWrong = false;

    for (let j = 0; j < currentCellLocation.length; j++) {
      for (let k = 0; k < currentCellLocation[j].length; k++) {
        if (currentCell.id !== currentCellLocation[j][k].id) {
          if (
            currentCell.innerText === currentCellLocation[j][k].innerText &&
            currentCell.innerText !== ""
          ) {
            isStillWrong = true;
          }
        }
      }
    }

    if (!isStillWrong) {
      currentCell.classList.remove("wrong-number");
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

export default function highLightCells(cells, currentCell) {
  const cellsToHighLight = getHighlightedCells(currentCell);

  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove(highLight, highLightStrong, sameNumber);
  }

  for (let i = 0; i < cellsToHighLight.length; i++) {
    for (let j = 0; j < cellsToHighLight[i].length; j++) {
      cellsToHighLight[i][j].classList.add(highLight);
    }
  }

  reviewCellValidation(cells);
  highlightSimilarNumbers(cells, currentCell);

  if (currentCell.innerText !== "") {
    checkForMistakes(cellsToHighLight, currentCell);
  }

  currentCell.classList.add(highLightStrong);
}
