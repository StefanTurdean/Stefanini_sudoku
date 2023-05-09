// function validateGrid(currentCell) {
//   const currnetCellLocation = getHighlightedCells(currentCell);

//   removeValidation();
//   checkForMistakes(currnetCellLocation, currentCell);
// }

// function checkForMistakes(currentCellLocation, currentCell) {
//   for (let i = 0; i < currentCellLocation.length; i++) {
//     for (let j = 0; j < currentCellLocation[i].length; j++) {
//       if (currentCell.id !== currentCellLocation[i][j].id) {
//         if (currentCell.innerText === currentCellLocation[i][j].innerText) {
//           currentCell.classList.add("red");
//           currentCellLocation[i][j].classList.add("red");
//         }
//       }
//     }
//   }
// }

// function removeValidation() {
//   const wrongCells = document.querySelectorAll(".red");

//   console.log(wrongCells);

//   for (let i = 0; i < wrongCells.length; i++) {
//     const currentCellLocation = getHighlightedCells(wrongCells[i]);
//     const currentCell = wrongCells[i];

//     let stillWrong = false;

//     for (let j = 0; j < currentCellLocation.length; j++) {
//       for (let k = 0; k < currentCellLocation[j].length; k++) {
//         if (currentCell.id !== currentCellLocation[j][k].id) {
//           if (currentCell.innerText === currentCellLocation[j][k].innerText) {
//             stillWrong = true;
//           }
//         }
//       }
//     }

//     if (!stillWrong) {
//       console.log("test");
//       currentCell.classList.remove("red");
//     }
//   }
// }

// function getHighlightedCells(currentCell) {
//   const serchCellsToHightLight = currentCell.id.split("-");

//   const square = currentCell.parentElement.children;
//   const row = [];
//   const column = [];

//   for (let i = 0; i < 9; i++) {
//     const currentRow = document.getElementById(
//       `${i}-${serchCellsToHightLight[1]}`
//     );

//     row.push(currentRow);

//     const currentColumn = document.getElementById(
//       `${serchCellsToHightLight[0]}-${i}`
//     );

//     column.push(currentColumn);
//   }

//   return [square, row, column];
// }
// export default validateGrid;
