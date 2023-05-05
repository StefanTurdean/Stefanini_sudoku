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

export default convertStringToGridArray;
