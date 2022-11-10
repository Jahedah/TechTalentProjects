// Magic 8 Ball 
// STEP 1: Collect Username 
let userName = prompt('What is your name?');

//STEP 2: Alert hello using if statement.
alert(userName ? 'Hello, ${userName}!'  : 'Hello!"');

//STEP 3: Prompt for user question and then repeat back
let userQuestion = prompt('Look into the Magic Eight Ball... what is your question?')

alert('${userName} , your question is: ${userQuestion}. The Magic Eight Ball says:')


//STEP 4: Create a function that will randomly generate a number between 1-8, using Math.random
let randomNumber = Math.floor(Math.random() * 8);

//STEP 5: Create an if statement that will generate answers. 
if (randomNumber == 0) {
    let eightBall = alert('It is certain');
} else if (randomNumber == 1) {
    let eightBall = alert('It is decidedly so');
} else if (randomNumber == 2) {
    let eightBall = alert('Reply hazy, try again');
} else if (randomNumber == 3) {
    let eightBall = alert('Cannot predict now');
} else if (randomNumber == 4) {
    let eightBall = alert('Do not count on it');
} else if (randomNumber == 5) {
    let eightBall = alert('My sources say no');
} else if (randomNumber == 6) {
    let eightBall = alert('Outlook not so good');
} else if (randomNumber == 7) {
    let eightBall = alert('Signs point to yes');
} else if (randomNumber == 8) {
    let eightBall = alert('Possibly of the signs are right');
}else{
    let eightBall = alert('Try again later');
}


