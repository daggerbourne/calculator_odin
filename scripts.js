// const keys = document.querySelectorAll("button");
const numberKeys = document.querySelectorAll(".number");
const oppKeys = document.querySelectorAll(".operator")
const equalKey = document.querySelectorAll(".equal-sign")
const clearKey = document.querySelectorAll('.all-clear')

// function eventListnerAttacher(button){
// button.addEventListener('click', handleEvent)
// };

numberKeys.forEach((numberGetter) => numberGetter.addEventListener('click', valueExtrator));
// oppKeys.forEach(eventListnerAttacher);
// equalKey.forEach(eventListnerAttacher);
// clearKey.forEach(eventListnerAttacher);



// function numberGetter(numberButton){
// numberButton.addEventListener('click', valueExtrator)
// }


function valueExtrator(e){
    console.log(e.currentTarget.value)
}