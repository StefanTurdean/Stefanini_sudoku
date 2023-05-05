function formatStringToGridString(string) {
  const stringSliced = [];
  let newString = "";

  for (let i = 0; i < string.length; i += 3) {
    const stringSlice = string.slice(i, i + 3);
    stringSliced.push(stringSlice);
  }

  for (let i = 0; i < stringSliced.length - 6; i++) {
    newString =
      newString + stringSliced[i] + stringSliced[i + 3] + stringSliced[i + 6];

    if (i % 3 == 2) {
      i = i + 6;
    }
  }

  return newString;
}

export default formatStringToGridString;
