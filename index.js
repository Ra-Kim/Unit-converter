
let userInput = document.querySelectorAll(".user-input");
let feetResult = document.getElementById("feet-result")
let metersResult = document.getElementById("meters-result")
let gallonsResult = document.getElementById("gallons-result")
let litresResult = document.getElementById("litres-result")
let poundsResult = document.getElementById("pounds-result")
let kilogramsResult = document.getElementById("kilograms-result")
let input = window.prompt('Input your value', '0'); // open the window with Text "Are you feeling lucky" and default value "sure"

function calculate(x){
    feetResult.textContent = (x * 3.281).toFixed(3)
    metersResult.textContent = (x / 3.281).toFixed(3)
    litresResult.textContent = (x * 4.546).toFixed(3)
    gallonsResult.textContent = (x / 4.546).toFixed(3)
    poundsResult.textContent = (x * 2.205).toFixed(3)
    kilogramsResult.textContent = (x / 2.205).toFixed(3)
}

for (let i = 0; i < userInput.length; i++) {
    userInput[i].textContent = input;
    calculate(input)
}
