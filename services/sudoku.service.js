function generateSudokuValuesGrid(sudokuValuesString) {
  const subStrings = [];
  let newSudokuValuesString = "";

  for (let i = 0; i < sudokuValuesString.length; i += 3) {
    const stringSlice = sudokuValuesString.slice(i, i + 3);
    subStrings.push(stringSlice);
  }

  for (let i = 0; i < subStrings.length - 6; i++) {
    newSudokuValuesString =
      newSudokuValuesString +
      subStrings[i] +
      subStrings[i + 3] +
      subStrings[i + 6];

    if (i % 3 == 2) {
      i = i + 6;
    }
  }

  return newSudokuValuesString;
}

export function generateSudokuValues() {
  const sudokuString = sudoku.generate("insane");
  const sudokuGroupedString = generateSudokuValuesGrid(sudokuString);

  return sudokuGroupedString;
}
