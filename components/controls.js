import { createDomElement } from "../services/layout.service.js";
import { handleNumpadClick } from "../services/eventHandler.service.js";
import { CLASS_NAME, CONTROL_CLASS_NAME, ELEMENT_ID } from "../constants.js";
import state from "../state/index.js";

function createControlIcons(parentElement) {
  const itemsWrapper = createDomElement(
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
      callBackFunction: (event) => {
        document;
        event.target.classList.toggle(CLASS_NAME.iconActive);
        state.notesIsActive = !state.notesIsActive;
      },
    },
  ];

  for (let i = 0; i < controlItemsList.length; i++) {
    const controlItem = createDomElement(
      "div",
      CONTROL_CLASS_NAME.item,
      "",
      itemsWrapper
    );

    const controlItemBackground = createDomElement(
      "div",
      CONTROL_CLASS_NAME.itemBtn,
      `${controlItemsList[i].name.toLowerCase()}`,
      controlItem
    );

    controlItemBackground.addEventListener(
      "click",
      controlItemsList[i].callBackFunction
    );

    const controlItemIcon = createDomElement(
      "div",
      CONTROL_CLASS_NAME.itemIcon,
      "",
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
  const numpad = createDomElement(
    "div",
    CONTROL_CLASS_NAME.numpad,
    "",
    parentElement
  );

  for (let i = 1; i < 10; i++) {
    const numpadButton = createDomElement(
      "button",
      CONTROL_CLASS_NAME.numpadButton,
      "",
      numpad
    );
    numpadButton.innerText = `${i}`;

    numpadButton.addEventListener("click", () => {
      handleNumpadClick(i);
    });
  }
}

function createNewGameBtn(parentElement) {
  const newGameBtn = createDomElement(
    "button",
    CONTROL_CLASS_NAME.newGameButton,
    "",
    parentElement
  );
  newGameBtn.innerHTML = "NEW GAME";

  newGameBtn.addEventListener("click", () => {
    state.startNewGame();
  });
}

function createControlElement() {
  const controls = createDomElement("div", CONTROL_CLASS_NAME.controls);

  createControlIcons(controls);
  createNumpad(controls);
  createNewGameBtn(controls);

  return controls;
}

const sudokuControls = createControlElement();

export default sudokuControls;
