import { createDomElement } from "../services/layout.service.js";
import { handleNumpadClick } from "../services/eventHandler.service.js";
import { CONTROL_CLASS_NAME } from "../constants.js";
import state from "../state/index.js";

const elementIds = {
  controlItemButton: "control-item-btn",
  controlItemIcon: "control-item-icon",
};

function createControlIcons(parentElement) {
  const sudokuControlItemsWrapper = createDomElement(
    "div",
    CONTROL_CLASS_NAME.itemsWrapper,
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
        state.eraseCurrentCellValue();
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
      CONTROL_CLASS_NAME.item,
      "",
      sudokuControlItemsWrapper
    );

    const controlItemBackground = createDomElement(
      "div",
      CONTROL_CLASS_NAME.itemBtn,
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
      CONTROL_CLASS_NAME.itemIcon,
      `${elementIds.controlItemButton}-${controlItemsList[
        i
      ].name.toLowerCase()}`,
      controlItemBackground
    );

    controlItemIcon.style.backgroundImage = `url(${controlItemsList[i].imagePath})`;

    const controlItemLabel = createDomElement(
      "div",
      CONTROL_CLASS_NAME.itemLabel,
      "",
      controlItem
    );

    controlItemLabel.innerText = `${controlItemsList[i].name}`;
  }
}

function createNumpad(parentElement) {
  const sudokuNumpad = createDomElement(
    "div",
    CONTROL_CLASS_NAME.numpad,
    "sudoku-numpad",
    parentElement
  );

  for (let i = 1; i < 10; i++) {
    const numpadButton = createDomElement(
      "button",
      CONTROL_CLASS_NAME.numpadButton,
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
    CONTROL_CLASS_NAME.newGameButton,
    "sudoku-new-game-btn",
    parentElement
  );
  sudokuNewGameBtn.innerHTML = "NEW GAME";

  sudokuNewGameBtn.addEventListener("click", () => {
    state.startNewGame();
  });
}

function createControlElement() {
  const sudokuControls = createDomElement("div", CONTROL_CLASS_NAME.controls);

  createControlIcons(sudokuControls);
  createNumpad(sudokuControls);
  createNewGameBtn(sudokuControls);

  return sudokuControls;
}

const sudokuControls = createControlElement();

export default sudokuControls;
