
// Variables

let coeff = 0;
let constant = 0;
let operator;
let result = 0;

// let input;

let currentDisplay = document.getElementsByClassName("display")[0];

let outPutDisplay = currentDisplay.innerHTML

// currentDisplay.innerHTML = input
let isCoeff = true;
let isConstant = false;


// Decide to show coefficient or constant on display
if (isCoeff == true) {
  coeff = result
  currentDisplay.innerHTML = coeff
} else {
  currentDisplay.innerHTML = constant
}



// Display in console
console.log("Display" + outPutDisplay)



// Add clicks to numbers
let numButton = document.querySelectorAll(".num");
numButton.forEach((num) => {
  num.addEventListener("click", addInput)
});

let input = numButton.innerHTML

// Add numbers to display
function addInput(event) {
  let input = outPutDisplay;
  let clickedNum = event.target;
  let temp = clickedNum.innerHTML;

  if (outPutDisplay.charAt(0) === '0') {
    input = "";
    outPutDisplay = input + temp;
  } else {
    outPutDisplay = input + temp;
  }
  result = outPutDisplay;
  console.log("result: " + result);

  if (isCoeff) {
    coeff = result;
    currentDisplay.innerHTML = coeff; // Update the innerHTML here
    console.log("cof " + coeff);
  } else {
    constant = result;
    currentDisplay.innerHTML = constant;
    console.log("con " + constant);
  }

  return result;
}



// Add click and clear func
document.querySelector(".clear").addEventListener("click", clear)

function clear(){
  outPutDisplay = "0"
  currentDisplay.innerHTML = "0"
  result = 0
  coeff = 0
  constant = 0
  isCoeff = true;
  isConstant = false;
}


// Add click and logic



function equal() {

}



// Add click and percentage
document.querySelector(".percentage").addEventListener("click", percentage)

function percentage() {
  currentDisplay.innerHTML = (coeff/constant)*100
}



function add() {
  
}

function subtract() {
  
}

function multiply() {
  
}

function divide() {
  
}