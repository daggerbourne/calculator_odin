//Query Selectors
const numberKeys = document.querySelectorAll(".number");
const oppKeys = document.querySelectorAll(".operator")
const equalKey = document.querySelectorAll(".equal-sign")
const clearKey = document.querySelectorAll('.all-clear')
const display = document.querySelector('.display')

//Global variables for calculator
let calcInputs = [];
let displayValue = 0
let keyInput = 0
let runningTotalArr = []
let total = 0

//Event Listners
numberKeys.forEach((valueGetter) => valueGetter.addEventListener('click', numberCruncher));
oppKeys.forEach((valueGetter) => valueGetter.addEventListener('click', numberCruncher));
equalKey.forEach((valueGetter) => valueGetter.addEventListener('click', numberCruncher));
clearKey.forEach((valueGetter) => valueGetter.addEventListener('click', numberCruncher));

//Addition accumulator 
// function tallyTotal(tally, currentTotal){
//     tally = parseInt(tally);
//     currentTotal = parseInt(currentTotal);
//     console.log(`the tally is ${tally}`)
//     console.log(`the current Total is is ${currentTotal}`)
//     return tally + currentTotal
// }

// Function to change text in display of calc
function userDisplay(text){
    display.innerHTML = `\n                <input type=\"text\" class=\"calculator-screen\" value=\"${text}\" disabled=\"\">\n            `
}


// Function to globaly set all inputs
function resetTallyInput(input){
    calcInputs = [`${input}`]
    displayValue = `${input}`
    keyInput = input
    userDisplay(input)
    }

function caryTotalOver(input){
    calcInputs = [`${input}`]
    keyInput = input    
    }

//Function fo turn the clicks of kepad into a number, then pushses that numbver into the array
function getAndJoinKeyInputs (e){
        
    const calcInput = [
        e.currentTarget.value
    ]
    calcInputs.push(calcInput);
    displayValue = calcInputs.join('');
    userDisplay(displayValue);
    keyInput = parseInt(displayValue);
    
}

//Operator Function 
function operatorHandler(operator){
        if (runningTotalArr.length === 0){
            runningTotalArr.push(keyInput)
            resetTallyInput(0);
            runningTotalArr.push(`${operator}`)
            userDisplay(`${operator}`)            
        }                                
    }




//Main function for dealing with inputs
function numberCruncher(e){    
    
    if(e.currentTarget.className === 'number'){
        getAndJoinKeyInputs(e);
        if (runningTotalArr[1] == true){
            userDisplay()
        }
    }
    
    if(e.currentTarget.className === 'all-clear'){
        console.log('You Clicked All Clear')
        resetTallyInput(0)
        userDisplay(0);
        runningTotalArr = []
        
    }
    if(e.currentTarget.className === 'equal-sign'){
        console.log('You Clicked =')
        runningTotalArr.push(keyInput);
        totalMaker(runningTotalArr[1])
        console.log(total);
    }
    
    if(e.currentTarget.className === 'operator'){
        if(runningTotalArr.length === 2){
            runningTotalArr[2] = runningTotalArr [0];
            totalMaker(e.currentTarget.value)
        }
        if(runningTotalArr.length === 1){
            runningTotalArr[1] = e.currentTarget.value
        }       
        operatorHandler(e.currentTarget.value)                    
        }
        
    }
    

    
    if (runningTotalArr.length === 3){
        console.log(total)
       
        
    }

   function totalMaker(oppKey) {
       
    if (oppKey === '+'){
        total = runningTotalArr[0] + runningTotalArr[2];
        runningTotalArr.splice(0,3,total)
                }
    if (oppKey === '-'){
        total = runningTotalArr[2] - runningTotalArr[1];
        runningTotalArr.splice(0,3,total)
    }
    if (oppKey === '*'){
        total = runningTotalArr[2] * runningTotalArr[0];
        runningTotalArr.splice(0,3,total)
    }
    if (oppKey === '/'){
        total =runningTotalArr[2] / runningTotalArr[0];
        runningTotalArr.splice(0,3,total)
    }
console.log('its done!!')
    userDisplay(total)
    caryTotalOver(0);
}