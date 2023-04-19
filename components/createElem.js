
const createDomElem = (elemDom, elemClass, elemId, elemParent) => {
  const newElem = document.createElement(elemDom);

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

export default createDomElem;

