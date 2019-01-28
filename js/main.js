/* Code for WATS 3020 FizzBuzz Assignment */

//Code for replicating the game of Fizzbuzz

let isInteger,
    maxNumber,
    fbResults,
    fbText;

//User inputs the max size of the FizzBuzz calculation
//The loop checks to see if the number entered is valid within the game rules

isInteger = false;

while (!isInteger){
    let input = window.prompt('Enter a number greater than 0');
    if (input === null) break;
    if (input.indexOf('.')<0){
        maxNumber = Number.parseInt(input);
        isInteger = Number.isSafeInteger(maxNumber) && maxNumber > 0;
    }
}

//Calculate FizzBuzz by checking for remainders each increment
//Store the proper results for output
fbResults = [];

for (let i=1; i<=maxNumber; i++){
    let outputString = '';
    if(i % 3 === 0){
        outputString += "Fizz";
    }
    if(i % 5 === 0){
        outputString += "Buzz";
    }
    if (outputString.length === 0){
        outputString = i;
    }
    fbResults.push(outputString);
}

//Create readable output

fbText = '';

for (let value of fbResults){
    fbText += value + '\n';
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
