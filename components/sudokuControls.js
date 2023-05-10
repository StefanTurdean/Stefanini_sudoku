import createDomElement from "./createDomElement.js";
import sudokuState from "./sudokuState.js";

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
      handleClickFunction: ""
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
      "control-item-btn",
      `control-item-btn-${controlItemsList[i].name.toLowerCase()}`,
      controlItem
    );

    // controlItemBackground.addEventListener()

    const controlItemIcon = createDomElement(
      "div",
      "control-item-icon",
      `control-item-icon-${controlItemsList[i].name.toLowerCase()}`,
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
    const numpadButton = createDomElement(
      "button",
      "sudoku-num-btn",
      `num-btn-${i}`,
      sudokuNumpad
    );
    numpadButton.innerText = `${i}`;

    numpadButton.addEventListener("click", () => {
      sudokuState.handleNumpadClick(i);
    });
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

  sudokuNewGameBtn.addEventListener("click", () => {
    sudokuState.newGame();
  });
}

function createControlElement(elementType, className) {
  const sudokuControls = createDomElement(elementType, className);

  createControlIcons(sudokuControls);
  createNumpad(sudokuControls);
  createNewGameBtn(sudokuControls);

  sudokuControls.children[0].children[1].children[0].addEventListener(
    "click",
    () => {
      sudokuState.eraseCurrentCellNumber(
        sudokuState.sudokuCells,
        sudokuState.currentCell
      );
    }
  );

  return sudokuControls;
}

export default createControlElement;
