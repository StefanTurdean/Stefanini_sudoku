import createDomElement from "./createDomElement.js";
import { handleNumpadClick } from "./handlers.js";
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
      imagePath: "/img/undo.png",
      callBackFunction: () => {},
    },
    {
      name: "Erase",
      imagePath: "/img/eraser.png",
      callBackFunction: () => {
        sudokuState.eraseCurrentCellNumber();
      },
    },
    {
      name: "Notes",
      imagePath: "/img/notes.png",
      callBackFunction: () => {},
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

    controlItemBackground.addEventListener(
      "click",
      controlItemsList[i].callBackFunction
    );

    const controlItemIcon = createDomElement(
      "div",
      "control-item-icon",
      `control-item-icon-${controlItemsList[i].name.toLowerCase()}`,
      controlItemBackground
    );

    controlItemIcon.style.backgroundImage = `url(${controlItemsList[i].imagePath})`;

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
      handleNumpadClick(i);
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

  return sudokuControls;
}

export default createControlElement;
