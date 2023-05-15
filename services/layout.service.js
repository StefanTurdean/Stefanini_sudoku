import createTimeSection from "../components/timer.js";
import createGameWrapper from "../components/gameWraper.js";
import { CLASS_NAME } from "../constants.js";

function createLayoutElements() {
  const timeSection = createTimeSection("div", CLASS_NAME.sudokuInfo);

  const gameWrapper = createGameWrapper(
    "div",
    CLASS_NAME.gameWrapper,
    CLASS_NAME.gameWrapper
  );

  return [timeSection, gameWrapper];
}

export function createDomElement(
  elementType,
  elementClass = null,
  elementId = null,
  elementParent = null
) {
  const newElement = document.createElement(elementType);

  if (elementClass) {
    newElement.classList.add(elementClass);
  }

  if (elementId) {
    newElement.id = elementId;
  }

  if (elementParent) {
    elementParent.appendChild(newElement);
  }

  return newElement;
}

export function generateLayout(rootElement) {
  const layoutElements = createLayoutElements();

  const sudokuWrapper = createDomElement("div", CLASS_NAME.sudokuWrapper);

  for (let i = 0; i < layoutElements.length; i++) {
    sudokuWrapper.appendChild(layoutElements[i]);
  }

  rootElement.appendChild(sudokuWrapper);
}
