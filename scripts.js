//Query Selectors
const numberKeys = document.querySelectorAll(".number");
const oppKeys = document.querySelectorAll(".operator")
const equalKey = document.querySelectorAll(".equal-sign")
const clearKey = document.querySelectorAll('.all-clear')
const display = document.querySelector('.display')

//Global variables for calculator
let calcInputs = [];
let displayValue = "0"
let keyInput = []
let runningTotalArr = []

//Event Listners
numberKeys.forEach((valueGetter) => valueGetter.addEventListener('click', numberCruncher));
oppKeys.forEach((valueGetter) => valueGetter.addEventListener('click', numberCruncher));
equalKey.forEach((valueGetter) => valueGetter.addEventListener('click', numberCruncher));
clearKey.forEach((valueGetter) => valueGetter.addEventListener('click', numberCruncher));

//Addition accumulator 
function tallyTotal(tally, currentTotal){
    tally = parseInt(tally);
    currentTotal = parseInt(currentTotal);
    console.log(`the tally is ${tally}`)
    console.log(`the current Total is is ${currentTotal}`)
    return tally + currentTotal
}

// Function to change text in display of calc
function userDisplay(text){
    display.innerHTML = `"\n                <input type=\"text\" class=\"calculator-screen\" value=\"${text}\" disabled=\"\">\n            "`
}

function resetTallyInput(input){
    calcInputs = [`${input}`]
    displayValue = `${input}`
    keyInput = input
}

//Main function for dealing with inputs
function numberCruncher(e){

    if(e.currentTarget.className === 'number'){
    console.log(`you clicked a ${e.currentTarget.className}`)

    const calcInput = [
        e.currentTarget.value
    ]
    calcInputs.push(calcInput);
    displayValue = calcInputs.join('');
    userDisplay(displayValue);
    keyInput = [parseInt(displayValue)];
    console.log(`the key input is ${keyInput}`);
    }
    

    if(e.currentTarget.className === 'all-clear'){
        resetTallyInput(0)
        userDisplay(0);

     }

    if(e.currentTarget.className === 'operator'){
        if (e.currentTarget.value === '+'){
            console.log(keyInput)
            console.log(`the running total is currently ${runningTotalArr}`)
            runningTotalArr.push(keyInput)
            
            let total = runningTotalArr.reduce(tallyTotal, 0)
            console.log(`the running total is currently ${total}`)

            resetTallyInput(0);
            userDisplay('+');
                                 
        }
    if(e.currentTarget.className === '.equal-sign'){
        runningTotalArr.push(keyInput);
    }
        
    }


    


 }

