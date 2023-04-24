const createDomElement = (
  elementType,
  elemClass = null,
  elemId = null,
  elemParent = null
) => {
  const newElem = document.createElement(elementType);

  if (elemClass) {
    newElem.classList.add(elemClass);
  }

  if (elemId) {
    newElem.id = elemId;
  }

  if (elemParent) {
    elemParent.appendChild(newElem);
  }

  return newElem;
};

export default createDomElement;
