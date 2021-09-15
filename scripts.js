// const keys = document.querySelectorAll("button");
const numberKeys = document.querySelectorAll(".number");
const oppKeys = document.querySelectorAll(".operator")
const equalKey = document.querySelectorAll(".equal-sign")
const clearKey = document.querySelectorAll('.all-clear')
const display = document.querySelector('.display')

let calcInputs = [];
let displayValue = ""
let valueTotal = 0


numberKeys.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
oppKeys.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
equalKey.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
clearKey.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));




function valueExtrator(e){

    if(e.currentTarget.className === 'number'){
    console.log(`you clicked a ${e.currentTarget.className}`)
    // const keyPad = e.currentTarget.value;
    const calcInput = [
        e.currentTarget.value
    ]
    calcInputs.push(calcInput);
    displayValue = calcInputs.join('');
    display.innerHTML = `"\n                <input type=\"text\" class=\"calculator-screen\" value=\"${displayValue}\" disabled=\"\">\n            "`
    valueTotal = parseInt(displayValue);
    console.log(valueTotal);
    }

    if(e.currentTarget.className === 'all-clear'){
        valueTotal = 0
        displayValue = "0"
        display.innerHTML = `"\n                <input type=\"text\" class=\"calculator-screen\" value=\"${displayValue}\" disabled=\"\">\n            "`
        calcInputs = []
        console.log(valueTotal)
    }


    


 }

