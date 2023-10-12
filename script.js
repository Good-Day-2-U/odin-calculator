
// Variables

let coeff;
let constant;
let operator;
let result;

// let input;

let currentDisplay = document.getElementsByClassName("display")[0];

// currentDisplay.innerHTML = input



console.log(currentDisplay)
// console.log(input)

// Add clicks to numbers
let numButton = document.querySelectorAll(".num");
numButton.forEach((num) => {
  num.addEventListener("click", addInput)
});

input = numButton.innerHTML

// Add numbers to display
function addInput(event) {
  let input = currentDisplay.innerHTML
  let clickedNum = event.target
  let temp = clickedNum.innerHTML
  console.log(temp)
  console.log(input)
  if (currentDisplay.innerHTML.charAt(0) == 0) {
    input = ""
    currentDisplay.innerHTML = input + temp
  } else {
    currentDisplay.innerHTML = input + temp
  }
  return input
}

// Add click and clear func
document.querySelector(".clear").addEventListener("click", clear)

function clear(){
  currentDisplay.innerHTML = "0"
}

function equal() {

}

function percentage() {
  
}

function add() {
  
}

function subtract() {
  
}

function multiply() {
  
}

function divide() {
  
}