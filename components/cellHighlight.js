function highLightCells(cells, currentCell) {
  const cellsToHighLight = [];
  const parentGrid = currentCell.parentElement;

  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("highLight", "highLightStrong");
  }

  const serchCellsToHightLight = currentCell.id.split("-");

  for (let i = 0; i < 9; i++) {
    const columnsToHighLigh = document.getElementById(
      `${serchCellsToHightLight[0]}-${i}`
    );

    const rowsToHighLight = document.getElementById(
      `${i}-${serchCellsToHightLight[1]}`
    );

    cellsToHighLight.push(columnsToHighLigh);
    cellsToHighLight.push(rowsToHighLight);
  }

  for (let i = 0; i < cellsToHighLight.length; i++) {
    cellsToHighLight[i].classList.add("highLight");
  }

  for (let i = 0; i < parentGrid.children.length; i++) {
    parentGrid.children[`${i}`].classList.add("highLight");
  }

  currentCell.classList.add("highLightStrong");
}

function lookForMistakes(cells, currentCell) {
  
}

export default highLightCells;
