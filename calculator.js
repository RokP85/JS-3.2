let firstNum = document.getElementById("firstNum");
let selectOperation = document.getElementById("selectOperation");
let secondNum = document.getElementById("secondNum");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", function() {
if (selectOperation.value == "+") {
    result.textContent = firstNum + secondNum;
} else if (selectOperation.value == "-") {
    result.textContent = firstNum - secondNum;
} else if (selectOperation.value == "*") {
    result.textContent = firstNum * secondNum;
} else if (selectOperation.value == "/") {
    result.textContent = firstNum / secondNum;
}})
