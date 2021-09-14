// const keys = document.querySelectorAll("button");
const numberKeys = document.querySelectorAll(".number");
const oppKeys = document.querySelectorAll(".operator")
const equalKey = document.querySelectorAll(".equal-sign")
const clearKey = document.querySelectorAll('.all-clear')

const calcInputs = [];
let displayValue = ""


numberKeys.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
oppKeys.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
equalKey.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
clearKey.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));




function valueExtrator(e){

  
    console.log(typeof e.currentTarget.value)
    const keyPad = e.currentTarget.value;
    const calcInput = [
        keyPad
    ]
    calcInputs.push(calcInput);
    displayValue = calcInputs.join('');

 }

