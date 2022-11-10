//Calculator Task 

//Define Values
let firstValue = Number(prompt('please enter your first value'));
let secondValue = Number(prompt('please enter your second value'));
let operation = prompt ('choose operation from +, -, /, *, ^');

//Function for addition 
function addition(firstValue, secondValue) {
    return firstValue + secondValue;
}

//Function for subtraction 
function subtraction(firstValue, secondValue) {
    return firstValue - secondValue;
}

//Function for division
function division(firstValue, secondValue) {
    return firstValue / secondValue;
}

//Function for multiplication
function multiplication(firstValue, secondValue) {
    return firstValue * secondValue;
}

//Function for power to 
function powerTo(firstValue, secondValue) {
    return firstValue ^ secondValue;
}

//Use switch cases to determine which function to execute depending on which operator is inputted 
switch(operation) {
    case '+':
        finalValue = addition(firstValue, secondValue);
        break;
    case '-':
        finalValue = subtraction(firstValue, secondValue);
        break;
    case '/':
         finalValue = division(firstValue, secondValue);
        break;
    case '*':
        finalValue = multiplication(firstValue, secondValue);
        break;
    case '^':
        finalValue = powerTo(firstValue, secondValue);
        break;
    default:
        console.log('uh oh you did\'t input an operation. Try again!');
        break;
 
}

//Calling the functions:
addition();
subtraction();
division();
multiplication();
powerTo();

//Logging into console:
console.log('${firstValue} ${operation} ${secondValue} = ${finalValue}');