const createDomElement = (
  elementType,
  elemementClass = null,
  elementId = null,
  elementParent = null
) => {
  const newElement = document.createElement(elementType);

  if (elemementClass) {
    newElement.classList.add(elemementClass);
  }

  if (elementId) {
    newElement.id = elementId;
  }

  if (elementParent) {
    elementParent.appendChild(newElement);
  }

  return newElement;
};

export default createDomElement;
