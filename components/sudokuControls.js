import createDomElement from "./createDomElement.js";

const sudokuControls = createDomElement("div", "sudoku-controls");

createControlIcons();

function createControlIcons(parentElement) {
  const sudokuControlItemsWraper = createDomElement(
    "div",
    "sudoku-controls-items-wraper",
    "",
    sudokuControls
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

// numpad

createNumpad();

function createNumpad() {
  const sudokuNumpad = createDomElement(
    "div",
    "sudoku-numpad",
    "sudoku-numpad",
    sudokuControls
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

// new game Btn

createNewGameBtn();

function createNewGameBtn() {
  const sudokuNewGameBtn = createDomElement(
    "button",
    "sudoku-new-game-btn",
    "sudoku-new-game-btn",
    sudokuControls
  );
  sudokuNewGameBtn.innerHTML = "NEW GAME";
}

export default sudokuControls;
