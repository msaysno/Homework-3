var resultEle = document.getElementById('result');
var lengthEle = document.getElementById('length');
var uppercaseEle = document.getElementById('upcase');
var lowercaseEle = document.getElementById('locase');
var numbersEle = document.getElementById('numbers');
var symbolsEle = document.getElementById('symbols');
var generateEle = document.getElementById('generate');


var randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}   
  

generateEle.addEventListener('click', () => {
    var length = lengthEle.value;
    var useLower = lowercaseEle.checked;
    var useUpper = uppercaseEle.checked;
    var useNumber = numbersEle.checked;
    var useSymbol = symbolsEle.checked;

	resultEle.innerText = generatePassword(useLower, useUpper, useNumber, useSymbol, length);
});



function generatePassword(lower, upper, number, symbol, length) {
	var generatedPassword = '';
	var typesCount = lower + upper + number + symbol;
	var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
if(typesCount === 0) {
    return '';
}

for(let i=0; i<length; i += typesCount) {
    typesArr.forEach(type => {
        var functionName = Object.keys(type)[0];
        generatedPassword += randomFunction[functionName]();
    });
}

var finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}
    
//functions generator
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() + 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

