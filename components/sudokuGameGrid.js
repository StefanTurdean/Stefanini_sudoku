import createDomElement from "./createDomElement.js";

// .6.31..45.137.4629..46...314..8651733..971264176423958...1364976415973829.7248516 index.js:38:9

function convertStringToGridArray(string) {
  const stringArray = [];
  const gridArray = [];

  for (let i = 0; i < string.length; i += 3) {
    const stringSliced = string.slice(i, i + 3);
    stringArray.push(stringSliced);
  }

  for (let i = 0; i < stringArray.length; i++) {
    const helper = [];

    helper.push(stringArray[i]);
    helper.push(stringArray[i + 3]);
    helper.push(stringArray[i + 6]);

    gridArray.push(helper);

    if (i % 3 == 2) {
      i = i + 6;
    }
  }

  return gridArray;
}

function generateSudokuNumbersId(sudokuNumbers) {
  let sudokuNumbersIdString = [];

  for (let i = 0; i < sudokuNumbers.length; i++) {
    const temps = sudokuNumbers;

    for (let j = 0; j < temps.length; j++) {
      sudokuNumbersIdString.push(`${i + 1}-${j + 1}`);
    }
  }

  return convertStringToGridArray(sudokuNumbersIdString);
}

function createSudokuGrid(parentElement) {
  const sudokuString = sudoku.generate();
  console.log(sudokuString);

  let sudokuNumbers = {
    numbers: [],
    numbersId: [],
  };

  console.log(sudokuNumbers.numbers);

  sudokuNumbers.numbers = convertStringToGridArray(sudokuString);
  sudokuNumbers.numbersId = generateSudokuNumbersId(sudokuNumbers.numbers);

  for (let i = 0; i < sudokuNumbers.numbers.length; i++) {
    let k = 0;

    const sudokuGrid = createDomElement(
      "div",
      "sudoku-grid",
      `sudoku-square-${i + 1}`,
      parentElement
    );

    for (let j = 0; j < sudokuNumbers.numbers.length; j++) {
      if (j !== 0 && j % 3 === 0) {
        k += 1;
      }

      const sudokuCell = createDomElement("div", "sudoku-cell", ``, sudokuGrid);

      sudokuCell.innerText = sudokuNumbers.numbers[i][k][j % 3];
      sudokuCell.id = sudokuNumbers.numbersId[i][k][j % 3];
    }
  }
}

function createSudokuGridElement(elementType, className, id) {
  const sudokuGameGrid = createDomElement(
    `${elementType}`,
    `${className}`,
    `${id}`
  );

  createSudokuGrid(sudokuGameGrid);

  return sudokuGameGrid;
}

export default createSudokuGridElement;
