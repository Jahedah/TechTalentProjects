//Create a variable named 'kelvin' with the value of 293
const kelvin = '293';


//Create a variable named 'celsius' using the variable 'kelvin'
const celsius = kelvin - '273';


//Create a variable named 'fahrenheit' using the variable 'celsius'
let fahrenheit = celsius*(9/5)+32;


// Round up fahrenheit variable result
let myFahrenheit= Math.floor(fahrenheit);

//log answer to console
console.log('The temperature is ${myFahrenheit} degrees Fahrenheit')

//Test out with other numbers 