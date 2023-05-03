
function highLightCells(cells, currentCell) {
  const cellsToHighLight = [];

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

  const gridToHighLight = currentCell.parentElement;

  for (let i = 0; i < gridToHighLight.children.length; i++) {
    gridToHighLight.children[`${i}`].classList.add("highLight");
  }

  currentCell.classList.add("highLightStrong");
}

export default highLightCells;
