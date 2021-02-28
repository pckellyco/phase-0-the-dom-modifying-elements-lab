const element = document.createElement("div");
document.body.appendChild(element);

const mainElement = document.getElementById("main");
mainElement.parentNode.removeChild(mainElement)

const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);

newHeader.id = "victory"

document.getElementById("victory").innerHTML = "Paige is the champion";

