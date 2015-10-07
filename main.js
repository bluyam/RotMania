function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function addElement(parentId, elementTag, quadrant, src, elementId) {
    console.log(parentId, elementTag, quadrant, src, elementId);
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('class', quadrant)
    newElement.setAttribute('id', parentId+quadrant);
    // newElement.setAttribute('src', "johnCenaHead1.gif");
    // newElement.innerHTML = html;
    var name = "cena" + parentId+quadrant;
    var newImage = document.createElement("img");
    newImage.setAttribute('id', name);
    newImage.setAttribute('src', src);
    newImage.setAttribute('onclick', "beFruitfulAndMultiply(this)");
    p.appendChild(newElement);
    newElement.appendChild(newImage);
}

function beFruitfulAndMultiply(element) {
  var audio = document.getElementById("audio");
  audio.play();
  var tempElement = element;
  var parentNodeId = tempElement.parentNode.id;
  console.log(parentNodeId);
  removeElement(element.id);
  addElement(parentNodeId, "div", "q1", "Rot.gif", tempElement.id);
  addElement(parentNodeId, "div", "q2", "Man.gif", tempElement.id);
  addElement(parentNodeId, "div", "q3", "Man.gif", tempElement.id);
  addElement(parentNodeId, "div", "q4", "Rot.gif", tempElement.id);
}
