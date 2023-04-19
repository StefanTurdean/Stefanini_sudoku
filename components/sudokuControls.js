import createDomElem from "./createElem.js";

const sudokuControls = createDomElem("div", "sudoku-controls");

const sudokuControlItemsWraper = createDomElem(
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
  const controlItem = createDomElem(
    "div",
    "control-item",
    "",
    sudokuControlItemsWraper
  );
  const controlItemIcon = createDomElem(
    "div",
    "control-item-icon",
    `control-item-${controlItemsList[i].name.toLowerCase()}`,
    controlItem
  );
  const controlItemLable = createDomElem(
    "div",
    "control-item-lable",
    "",
    controlItem
  );

  controlItemLable.innerText = `${controlItemsList[i].name}`;
}

const sudokuNumpad = createDomElem(
  "div",
  "sudoku-numpad",
  "sudoku-numpad",
  sudokuControls
);

for (let i = 1; i < 10; i++) {
  const numBtn = createDomElem(
    "button",
    "sudoku-num-btn",
    `num-btn-${i}`,
    sudokuNumpad
  );
  numBtn.innerText = `${i}`;
}

// new game Btn
const sudokuNewGameBtn = createDomElem(
  "button",
  "sudoku-new-game-btn",
  "sudoku-new-game-btn",
  sudokuControls
);
sudokuNewGameBtn.innerHTML = "NEW GAME";

export default sudokuControls;

// const sudokuControls = document.createElement("div");
// sudokuControls.classList.add("sudoku-controls");
// sudokuControls.id = "sudoku-controls";

// // controls items
// const sudokuControlItems = document.createElement("div");
// sudokuControlItems.classList.add("sudoku-control-items");
// sudokuControls.appendChild(sudokuControlItems);

// //  undo

// const sudokuUndoWraper = document.createElement("div");
// sudokuUndoWraper.classList.add("control-item");
// sudokuControlItems.appendChild(sudokuUndoWraper);

// const undoBtn = document.createElement("button");
// undoBtn.innerText = "undobtn";
// sudokuUndoWraper.appendChild(undoBtn);

// // erase

// const sudokuEraseWraper = document.createElement("div");
// sudokuEraseWraper.classList.add("control-item");
// sudokuControlItems.appendChild(sudokuEraseWraper);

// const eraseBtn = document.createElement("button");
// eraseBtn.innerText = "eraseBtn";
// sudokuEraseWraper.appendChild(eraseBtn);

// // notes

// const sudokuNotesWraper = document.createElement("div");
// sudokuNotesWraper.classList.add("control-item");
// sudokuControlItems.appendChild(sudokuNotesWraper);

// const notesBtn = document.createElement("button");
// notesBtn.innerText = "notesBtn";
// sudokuNotesWraper.appendChild(notesBtn);

// // numpad

// const sudokuNumpad = document.createElement("div");
// sudokuNumpad.id = "sudoku-numpad";
// sudokuNumpad.classList.add("sudoku-numpad");
// sudokuControls.appendChild(sudokuNumpad);

// for (let i = 1; i < 10; i++) {
//   const numBtn = document.createElement("button");
//   numBtn.id = `numBtn-${i}`;
//   numBtn.classList.add("sudoku-num-btn");
//   numBtn.innerText = `${i}`;

//   sudokuNumpad.appendChild(numBtn);
// }

// // new game Btn
// const sudokuNewGameBtn = document.createElement("button");
// sudokuNewGameBtn.innerHTML = "NEW GAME";
// sudokuNewGameBtn.id = "sudoku-new-game-btn";
// sudokuNewGameBtn.classList.add("sudoku-new-game-btn");
// sudokuControls.appendChild(sudokuNewGameBtn);
