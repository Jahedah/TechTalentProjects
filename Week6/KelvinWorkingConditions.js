//Task 1

//STEP 1:Create 3 variables 
let temperature = prompt('in Celsius, what is the temperature?');
let condition = promt(' what are the weather conditions? choose from: sunny, cloudy, raining, snowing, thunder');

//STEP 2: Scipt for calculating variables 
if (temperature >=10 && temperature < 20) {
    switch (condition){
        case 'sunny':
            goToWork = 'Have a nice day!' ;
            break;
        case 'cloudy':
            goToWork = 'Bit gloomy, but okay!' ;
            break;
        case 'raining':
            goToWork = 'Nope, who likes being cold and wet?!' ;
            break;
        case 'Snowing':
            goToWork = 'Its too cold!' ;
            break;
        case 'thunder':
            goToWork = 'Heck no! You work with metal!' ;
            break;
        default:
            goToWork = 'Lets get this bread!' ;
            break;
    } 
    
    

}else if (temperature >= 20 && temperature < 30) {
        switch (condition){
            case 'sunny':
                goToWork = 'Have a nice day!' ;
                break;
            case 'cloudy':
                goToWork = 'Bit gloomy, but okay!' ;
                break;
            case 'raining':
                goToWork = 'Not the worst' ;
                break;
            case 'Snowing':
                goToWork = 'Its too cold!' ;
                break;
            case 'thunder':
                goToWork = 'Heck no! You work with metal!' ;
                break;
            default:
                goToWork = 'Lets get this bread!' ;
                break;
        }



}else if (temperature > 30) {
        switch (condition){
            case 'snowing':
                goToWork = 'Don/t go, the weather is weird' ;
                break;
            case 'cloudy':
                goToWork = 'Bit gloomy, but okay!' ;
                break;
            case 'raining':
            case 'sunny':
            case 'thunder':
            default:
                goToWork = 'no way-- it is way too warm!';
                break;
        }


}else if (temperature < 10) {
        switch (condition){
            case 'snowing':
            case 'cloudy':
            case 'raining':
            case 'Snowing':
            case 'thunder':
            default:
                goToWork = 'no way-- it is way too cold!';
                break;
        }
} else {  goToWork = 'have fun building your secret lab!'}

// script output
let workInstructions = alert('${goToWork}');