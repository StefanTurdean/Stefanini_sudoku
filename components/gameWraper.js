import { createDomElement } from "../services/layout.service.js";
import sudokuGrid from "./gameGrid.js";
import sudokuControl from "./controls.js";

function createGameWrapper(elementType, className) {
  const gameWrapper = createDomElement(elementType, className);

  gameWrapper.appendChild(sudokuGrid);
  gameWrapper.appendChild(sudokuControl);

  return gameWrapper;
}

export default createGameWrapper;
