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

//Function fo turn the clicks of kepad into a number, then pushses that numbers into the array
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
        if (runningTotalArr.length === 3){
            totalMaker(runningTotalArr[1])
        }
        if(runningTotalArr.length === 2){
            console.log(`before push : ${runningTotalArr}`)
            runningTotalArr.push(keyInput)                        
            console.log(`after push : ${runningTotalArr}`)
            totalMaker(e.currentTarget.value)
        }
        if(runningTotalArr.length === 1){
            runningTotalArr.splice(1,1,e.currentTarget.value)
        }       
        operatorHandler(e.currentTarget.value)                    
        }
        
    }
    

    

   function totalMaker(oppKey) {
           
    if (runningTotalArr[1] === '+'){
        total = runningTotalArr[0] + runningTotalArr[2];
        runningTotalArr.splice(0,3,total)
        userDisplay(total)
        caryTotalOver('');
                }
    if (runningTotalArr[1] === '-'){
        // debugger
        console.log(`before - : ${runningTotalArr}`)
        console.log(`the current toal is ${total}`)
        total = runningTotalArr[2] - runningTotalArr[0];
        console.log(`the current toal is ${-total}`)
        runningTotalArr.splice(0,3,-total)
        console.log(`after - : ${runningTotalArr}`)
        console.log(`the total is ${-total}`)
        userDisplay(-total)
        caryTotalOver('');
    }
    if (runningTotalArr[1] === '*'){
        total = runningTotalArr[2] * runningTotalArr[0];
        runningTotalArr.splice(0,3,total)
        userDisplay(total)
        caryTotalOver('');
    }
    if (runningTotalArr[1] === '/'){
        total =runningTotalArr[2] / runningTotalArr[0];
        runningTotalArr.splice(0,3,total)
        userDisplay(total)
        caryTotalOver('');
    }

console.log('its done!!')
   
}









// *********OBJ expiriements***************/
// function numObjCruncher()
// const oppKeyBank = {
//     '+': function(){
//         total = runningTotalArr[0] + runningTotalArr[2];
//         runningTotalArr.splice(0,3,total)
//         itsDone(total)
//     },
//     '-': function(){
//         // debugger
//         console.log(`before - : ${runningTotalArr}`)
//         total = (runningTotalArr[2]) + (runningTotalArr[0]);
//         console.log(`the current toal is ${total}`)
//         runningTotalArr.splice(0,3,total)
//         console.log(`after - : ${runningTotalArr}`)
//         console.log(`the total is ${total}`)
//      },
//      '*': function(){
//         total = runningTotalArr[2] * runningTotalArr[0];
//         runningTotalArr.splice(0,3,total)
//     },
//     '/': function(){
//         total =runningTotalArr[2] / runningTotalArr[0];
//         runningTotalArr.splice(0,3,total)
//     },
// } 


// // need to create a return function
// function itsDone(total){
//         userDisplay(total)
//     caryTotalOver(0);
// }