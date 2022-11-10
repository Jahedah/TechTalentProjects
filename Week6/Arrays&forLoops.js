//Task: For loops using arrays

//STEP 1: Set your array
let fruits = [
    'orange',
    'apple',
    'pear',
    'banana',
    'peach',
    'strawberry',
    'acai',
    'cherry'
];

//STEP 2: How to count letters
for (let fruit in fruits) {
    let vowel = 0 
    let consonant = 0;

    for (let i =  0 ; i< fruits[fruit].length; i++) {
        if (fruits[fruit][i] === 'a') {
            vowel += 1;
        } else if (fruits[fruit][i] === 'e') {
            vowel += 1;
        } else if (fruits[fruit][i] === 'i') {
            vowel += 1;
        } else if (fruits[fruit][i] === 'o') {
            vowel += 1;
        } else if (fruits[fruit][i] === 'u') {
            vowel += 1;
        } else {
            consonant += 1;
        }
    }
    


 console.log('${fruits[fruit]} has ${vowel} vowels and ${consonant} consonants');
}