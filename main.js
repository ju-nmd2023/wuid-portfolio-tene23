const darkmodeButton = document.getElementById("darkmode-button");
const bodyElement = document.querySelector(".dark-mode");

let i = 0;
darkmodeButton.addEventListener("click", function (event) {
  if (i === 0) {
    {
      console.log("hi");
      bodyElement.style.backgroundColor = "#000";
      i = 1;
    }
  } else {
    bodyElement.style.backgroundColor = "rgb(96, 139, 168)";
    i = 0;
  }
});
