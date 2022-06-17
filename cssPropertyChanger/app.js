let blockElement = document.querySelector("#block");
let verticalPosition = document.querySelector("#position-y");
let horizontalPosition = document.querySelector("#position-x");
let blockSize = document.querySelector("#size");
let shape = document.querySelector("#shape-select");
let okBtn = document.querySelector("#ok-btn");
let rgbaR = document.querySelector("#rgba-r");
let rgbaG = document.querySelector("#rgba-g");
let rgbaB = document.querySelector("#rgba-b");
let rgbaA = document.querySelector("#rgba-a");
let rgbaContainer = document.querySelector(".rgba-container");

let rgbaInput = rgbaContainer.querySelectorAll("input");

console.log(rgbaInput);

// Vertical Position Changer

verticalPosition.addEventListener("change", function () {
  blockElement.style.top = verticalPosition.value + "px";
});

// Horizontal Position Changer

horizontalPosition.addEventListener("change", function () {
  blockElement.style.left = horizontalPosition.value + "px";
});
// Size Changer
blockSize.addEventListener("change", function () {
  blockElement.style.transform = "scale(" + blockSize.value + ")";
});

//Shape Changer

okBtn.addEventListener("click", function () {
  let shapeOption = shape.value;
  console.log(shapeOption);

  if (shapeOption === "1") {
    blockElement.style.borderRadius = "0";
  } else if (shapeOption === "2") {
    blockElement.style.borderRadius = "50%";
  }
});

for (let i = 0; i < rgbaInput.length; i++) {
  rgbaInput[i].addEventListener("change", () => {
    blockElement.style.backgroundColor =
      "rgba(" +
      rgbaR.value +
      "," +
      rgbaG.value +
      "," +
      rgbaB.value +
      "," +
      rgbaA.value +
      ")";
  });
}
