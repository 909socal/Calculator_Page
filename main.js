'use strict'

// console.log('Working');
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('zero').addEventListener('click', getNum);
	document.getElementById('one').addEventListener('click', getNum);
	document.getElementById('two').addEventListener('click', getNum);
	document.getElementById('three').addEventListener('click', getNum);
	document.getElementById('four').addEventListener('click', getNum);
	document.getElementById('five').addEventListener('click', getNum);
	document.getElementById('six').addEventListener('click', getNum);
	document.getElementById('seven').addEventListener('click', getNum);
	document.getElementById('eight').addEventListener('click', getNum);
	document.getElementById('nine').addEventListener('click', getNum);

	document.getElementById('plus').addEventListener('click', getOperator);
	document.getElementById('minus').addEventListener('click', getOperator);
	document.getElementById('times').addEventListener('click', getOperator);
	document.getElementById('divide').addEventListener('click', getOperator);
	document.getElementById('neg').addEventListener('click', getneg);
	document.getElementById('dot').addEventListener('click', getNum);
	document.getElementById('percent').addEventListener('click', getOperator);
	document.getElementById('equal').addEventListener('click', getEqual);
	document.getElementById('ac').addEventListener('click', getac);

           
 });
var firstNum= [];
var myOperator;
var numbbbaaa1;
var numbbbaaa2;
// var secondum;


function getNum(event){
	
	var num1 = this.value;
	var num2 = this.value;
	var number1= document.getElementById('results').innerHTML += num1;
	// var number2= document.getElementById('results').innerHTML += num2;
	firstNum.push(number1);
	
}

function getOperator(){
	var operator = this.value;
	switch (operator) {
    case '+':
		var num1 = firstNum.pop();
		numbbbaaa1 = parseFloat(num1);
		firstNum= [];
		myOperator = '+';
		document.getElementById('results').innerHTML = ' ';        
		break; 
    case '-':
		var num1 = firstNum.pop();
		numbbbaaa1 = parseFloat(num1);
		firstNum= [];
		myOperator = '-';
		document.getElementById('results').innerHTML = ' ';       
	 break; 
	case '*':
		var num1 = firstNum.pop();
		numbbbaaa1 = parseFloat(num1);
		firstNum= [];
		myOperator = '*';
		document.getElementById('results').innerHTML = ' ';
        break; 
    case '/':
		var num1 = firstNum.pop();
		numbbbaaa1 = parseFloat(num1);
		firstNum= [];
		myOperator = '/';
		document.getElementById('results').innerHTML = ' ';       
		 break;         

    }
	// if(operator=== '+'){
	// 	var num1 = firstNum.pop();
	// 	numbbbaaa1 = parseFloat(num1);
	// 	firstNum= [];
	// 	myOperator = '+';
	// 	document.getElementById('results').innerHTML = ' ';
	// } 
	// if(operator=== '-'){
	// 	var num1 = firstNum.pop();
	// 	numbbbaaa1 = parseFloat(num1);
	// 	firstNum= [];
	// 	myOperator = '-';
	// 	document.getElementById('results').innerHTML = ' ';
	// } 	
	// if(operator=== '*'){
	// 	var num1 = firstNum.pop();
	// 	numbbbaaa1 = parseFloat(num1);
	// 	firstNum= [];
	// 	myOperator = '*';
	// 	document.getElementById('results').innerHTML = ' ';
	// } 
	// if(operator=== '/'){
	// 	var num1 = firstNum.pop();
	// 	numbbbaaa1 = parseFloat(num1);
	// 	firstNum= [];
	// 	myOperator = '/';
	// 	document.getElementById('results').innerHTML = ' ';
	// } 
	
	// if (operator ===  '%'){
	// 	var num1 = firstNum.pop();
	// 	numbbbaaa1 = parseFloat(num1) / (100);
	// 	document.getElementById('results').innerHTML = (numbbbaaa1);
	// }
	
}
function getneg(){
	var num1 = firstNum.pop();
		numbbbaaa1 = ((num1) * (-1));
		firstNum= [];

		console.log(numbbbaaa1);
		document.getElementById('results').innerHTML = (numbbbaaa1);

}

function getac(){
	numbbbaaa2 = 0;
	numbbbaaa1 = 0;
	firstNum =[];
	document.getElementById('results').innerHTML = ' ';

}

function getEqual(){
	 console.log(parseInt(numbbbaaa1));
	 var num2 = firstNum.pop();
	 numbbbaaa2 = parseFloat(num2);
	 console.log(typeof(myOperator));
	 var answer = 0;
	switch (myOperator) {
    case '+':
		answer = numbbbaaa1 + numbbbaaa2;
        break; 
    case '-':
		answer = numbbbaaa1 - numbbbaaa2;
        break; 
	case '*':
		answer = numbbbaaa1 * numbbbaaa2;
        break; 
    case '/':
		answer = numbbbaaa1 / numbbbaaa2;
        break;         
    
    }

	 // if(myOperator === '+')
	 // {
		// answer = numbbbaaa1 + numbbbaaa2;
	 // } 
	 // if(myOperator === '-')
	 // {
		// answer = numbbbaaa1 - numbbbaaa2;
	 // } 
	 // if(myOperator === '*')
	 // {
		// answer = numbbbaaa1 * numbbbaaa2;
	 // } 
	 // if(myOperator === '/')
	 // {
		// answer = numbbbaaa1 / numbbbaaa2;
	 // } 
	 answer = answer;
	 console.log('nummm2:', typeof(numbbbaaa2));
	 console.log('numnnn1:' , typeof(numbbbaaa1));
	 console.log('answer:' ,typeof(answer));
	 numbbbaaa2 = answer
	 document.getElementById('results').innerHTML= numbbbaaa2;
}


	







