
// Variables

let coeff = 0;
let constant = 0;
let operator;
let result = 0;
let temp1 = 0;
let final;

// let input;

let currentDisplay = document.getElementsByClassName("display")[0];

let outPutDisplay = currentDisplay.innerHTML

// currentDisplay.innerHTML = input
let isCoeff = true;
// let isConstant = false;


// Decide to show coefficient or constant on display
if (isCoeff == true) {
  // coeff = result
  currentDisplay.innerHTML = coeff
} else {
  // constant = result
  currentDisplay.innerHTML = constant
}



// Display in console
// console.log("Display" + outPutDisplay)



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

  if (outPutDisplay.charAt(0) == "0") {
    input = "";
    outPutDisplay = input + temp;
  } else {
    outPutDisplay = input + temp;
  }
  result = outPutDisplay;
  console.log("result: " + result);

  if (isCoeff == true) {
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
  temp = 0
  isCoeff = true;
}


// Add click and logic

let addition = false
let subtraction = false
let multiplication = false
let division = false
let percentageTF = false

function calculate() {
  console.log('evaluate clicked')

  if (addition == true) {
    final = Number(temp1) + Number(result)
    currentDisplay.innerHTML = final.toFixed(3)
  } else if (subtraction == true) {
    final = Number(temp1) - Number(result)
    currentDisplay.innerHTML = final.toFixed(3)
  } else if (multiplication== true) {
    final = Number(temp1) * Number(result)
    currentDisplay.innerHTML = final.toFixed(3)
  } else if (division == true) {
    final = Number(temp1) / Number(result)
    currentDisplay.innerHTML = final.toFixed(3)
  } else if (percentageTF == true) {
    final = Number(temp1/100) * Number(result)
    currentDisplay.innerHTML = final.toFixed(3)
  } else [
    null
  ]



  // isCoeff = true
  addition = false
  subtraction = false
  multiplication = false
  division = false
  percentageTF = false
  
  // console.log(constant)
  // console.log(coeff)

  
  coeff = 0
  constant = 0
  outPutDisplay = final
}


// Add neagitve to front
let minusNum = false
function negPos() {
  if (minusNum == false) {
    let resultM = result * (-1)
    currentDisplay.innerHTML = resultM
    minusNum = true
    console.log(resultM)
    outPutDisplay = resultM
    return outPutDisplay
  } else {
    let resultN = result * (-1)
    minusNum = false
    currentDisplay.innerHTML = resultN
    outPutDisplay = resultN
    return outPutDisplay
  }
}




// Add click and percentage
document.querySelector(".percentage").addEventListener("click", percentage)

function percentage() {
  percentageTF = true
  temp1 = outPutDisplay
  isCoeff = false
  result = 0
  currentDisplay.innerHTML = "0"
  outPutDisplay = "0"
  // console.log(addition)
  console.log("temp" + temp1)
  // console.log("isCoeff" + isCoeff)
  console.log(result)
  console.log(outPutDisplay)
  console.log(temp1)
  return temp1
  // currentDisplay.innerHTML = (coeff/constant)*100
}


//Addition
function add() {
  addition = true
  temp1 = outPutDisplay
  isCoeff = false
  result = 0
  currentDisplay.innerHTML = "0"
  outPutDisplay = "0"
  // console.log(addition)
  console.log("temp" + temp1)
  // console.log("isCoeff" + isCoeff)
  console.log(result)
  console.log(outPutDisplay)
  return temp1
}

function subtract() {
  subtraction = true
  temp1 = outPutDisplay
  isCoeff = false
  result = 0
  currentDisplay.innerHTML = "0"
  outPutDisplay = "0"
  // console.log(addition)
  console.log("temp" + temp1)
  // console.log("isCoeff" + isCoeff)
  console.log(result)
  console.log(outPutDisplay)
  return temp1
}

function multiply() {
  multiplication = true
  temp1 = outPutDisplay
  isCoeff = false
  result = 0
  currentDisplay.innerHTML = "0"
  outPutDisplay = "0"
  // console.log(addition)
  console.log("temp" + temp1)
  // console.log("isCoeff" + isCoeff)
  console.log(result)
  console.log(outPutDisplay)
  return temp1
}

function divide() {
  division = true
  temp1 = outPutDisplay
  isCoeff = false
  result = 0
  currentDisplay.innerHTML = "0"
  outPutDisplay = "0"
  // console.log(addition)
  console.log("temp" + temp1)
  // console.log("isCoeff" + isCoeff)
  console.log(result)
  console.log(outPutDisplay)
  return temp1
}