const darkmodeButton = document.getElementByClassName("darkmode-button");
const bodyElement = document.querySelector("body");

darkmodeButton.addEventlistener("click", function (event) {
  bodyElement.style.backgroundColor = "#000";
});
