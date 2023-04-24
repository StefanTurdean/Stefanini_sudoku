import createDomElement from "./createDomElement.js";



function createControlIcons(parentElement) {
  const sudokuControlItemsWraper = createDomElement(
    "div",
    "sudoku-controls-items-wraper",
    "",
    parentElement
  );

  const controlItemsList = [
    {
      name: "Undo",
    },
    {
      name: "Erase",
    },
    {
      name: "Notes",
    },
  ];

  for (let i = 0; i < controlItemsList.length; i++) {
    const controlItem = createDomElement(
      "div",
      "control-item",
      "",
      sudokuControlItemsWraper
    );

    const controlItemBackground = createDomElement(
      "div",
      "control-item-background",
      "",
      controlItem
    );

    const controlItemIcon = createDomElement(
      "div",
      "control-item-icon",
      `control-item-${controlItemsList[i].name.toLowerCase()}`,
      controlItemBackground
    );
    const controlItemLable = createDomElement(
      "div",
      "control-item-lable",
      "",
      controlItem
    );

    controlItemLable.innerText = `${controlItemsList[i].name}`;
  }
}

function createNumpad(parentElement) {
  const sudokuNumpad = createDomElement(
    "div",
    "sudoku-numpad",
    "sudoku-numpad",
    parentElement
  );

  for (let i = 1; i < 10; i++) {
    const numBtn = createDomElement(
      "button",
      "sudoku-num-btn",
      `num-btn-${i}`,
      sudokuNumpad
    );
    numBtn.innerText = `${i}`;
  }
}

function createNewGameBtn(parentElement) {
  const sudokuNewGameBtn = createDomElement(
    "button",
    "sudoku-new-game-btn",
    "sudoku-new-game-btn",
    parentElement
  );
  sudokuNewGameBtn.innerHTML = "NEW GAME";
}

function createControlElement(elementType, className) {
  const sudokuControls = createDomElement(`${elementType}`, `${className}`);

  createControlIcons(sudokuControls);
  createNumpad(sudokuControls);
  createNewGameBtn(sudokuControls);
  
  return sudokuControls
}

export default createControlElement;