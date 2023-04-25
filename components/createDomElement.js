const createDomElement = (
  elementType,
  elemementClass = null,
  elementId = null,
  elementParent = null
) => {
  const newElem = document.createElement(elementType);

  if (elemementClass) {
    newElem.classList.add(elemementClass);
  }

  if (elementId) {
    newElem.id = elementId;
  }

  if (elementParent) {
    elementParent.appendChild(newElem);
  }

  return newElem;
};

export default createDomElement;
