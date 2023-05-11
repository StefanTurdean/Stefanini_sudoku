import createDomElement from "./createDomElement.js";
import { handleNumpadClick } from "./handlers.js";
import sudokuState from "./sudokuState.js";

const classNames = {
  sudokuControlItemsWraper: "sudoku-controls-items-wraper",
  controlItem: "control-item",
  controlItemBtn: "control-item-btn",
  controlItemIcon: "control-item-icon",
  controlItemLable: "control-item-lable",
  sudokuNumpad: "sudoku-numpad",
  sudokuNumpadButton: "sudoku-numpad-button",
  sudokuNewGameButton: "sudoku-new-game-button",
};

const elementIds = {
  controlItemButton: "control-item-btn",
  controlItemicon: "control-item-icon",
};

function createControlIcons(parentElement) {
  const sudokuControlItemsWraper = createDomElement(
    "div",
    classNames.sudokuControlItemsWraper,
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
      classNames.controlItem,
      "",
      sudokuControlItemsWraper
    );

    const controlItemBackground = createDomElement(
      "div",
      classNames.controlItemBtn,
      `${elementIds.controlItemButton}-${controlItemsList[
        i
      ].name.toLowerCase()}`,
      controlItem
    );

    controlItemBackground.addEventListener(
      "click",
      controlItemsList[i].callBackFunction
    );

    const controlItemIcon = createDomElement(
      "div",
      classNames.controlItemIcon,
      `${elementIds.controlItemButton}-${controlItemsList[
        i
      ].name.toLowerCase()}`,
      controlItemBackground
    );

    controlItemIcon.style.backgroundImage = `url(${controlItemsList[i].imagePath})`;

    const controlItemLable = createDomElement(
      "div",
      classNames.controlItemLable,
      "",
      controlItem
    );

    controlItemLable.innerText = `${controlItemsList[i].name}`;
  }
}

function createNumpad(parentElement) {
  const sudokuNumpad = createDomElement(
    "div",
    classNames.sudokuNumpad,
    "sudoku-numpad",
    parentElement
  );

  for (let i = 1; i < 10; i++) {
    const numpadButton = createDomElement(
      "button",
      classNames.sudokuNumpadButton,
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
    classNames.sudokuNewGameButton,
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
