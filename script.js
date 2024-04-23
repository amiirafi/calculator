let firstNumber;
let secondNumber;
let operator;

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

const operate = (operator, firstNum, secondNum) => {
  if (operator == "+") return add(firstNum, secondNum);
  if (operator == "-") return subtract(firstNum, secondNum);
  if (operator == "*") return multiply(firstNum, secondNum);
  if (operator == "/") return divide(firstNum, secondNum);
};
