// const keys = document.querySelectorAll("button");
const numberKeys = document.querySelectorAll(".number");
const oppKeys = document.querySelectorAll(".operator")
const equalKey = document.querySelectorAll(".equal-sign")
const clearKey = document.querySelectorAll('.all-clear')
const display = document.querySelector('.display')

let calcInputs = [];
let firstNumber = ""
let keyInput = []
let runningTotalArr = []


numberKeys.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
oppKeys.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
equalKey.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));
clearKey.forEach((valueGetter) => valueGetter.addEventListener('click', valueExtrator));


function tallyTotal(tally, currentTotal){
    return tally + currentTotal
}



function valueExtrator(e){

    if(e.currentTarget.className === 'number'){
    console.log(`you clicked a ${e.currentTarget.className}`)

    const calcInput = [
        e.currentTarget.value
    ]
    calcInputs.push(calcInput);
    firstNumber = calcInputs.join('');
    display.innerHTML = `"\n                <input type=\"text\" class=\"calculator-screen\" value=\"${firstNumber}\" disabled=\"\">\n            "`
    keyInput = [parseInt(firstNumber)];
    console.log(`the key input is ${keyInput}`);
    }

    if(e.currentTarget.className === 'all-clear'){
        keyInput = 0
        displayValue = "0"
        display.innerHTML = `"\n                <input type=\"text\" class=\"calculator-screen\" value=\"${displayValue}\" disabled=\"\">\n            "`
        calcInputs = []
        console.log(keyInput)
    }

    if(e.currentTarget.className === 'operator'){
        if (e.currentTarget.value === '+'){
            runningTotalArr.push(keyInput)
            runningTotalArr.reduce(tallyTotal, 0)
            
        }

        
    }


    


 }

