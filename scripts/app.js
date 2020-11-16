const defaultResult = 0;
   
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value)
}
//Generates and writes calculations
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //from the vendor file
}

function add() {  
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult +=  enteredNumber; 
    createAndWriteOutput('+', initialResult, enteredNumber);
}
 
function subtract (){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber; 
    createAndWriteOutput('-', initialResult, enteredNumber);
}
function multiply (){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *=  enteredNumber; 
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide (){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /=  enteredNumber; 
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);