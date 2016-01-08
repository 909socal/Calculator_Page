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
	document.getElementById('neg').addEventListener('click', getOperator);
	document.getElementById('percent').addEventListener('click', getOperator);
	document.getElementById('equal').addEventListener('click', getEqual);
	
           
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

	if(operator=== '+'){
		var num1 = firstNum.pop();
		numbbbaaa1 = parseInt(num1);
		firstNum= [];
		myOperator = '+';
		document.getElementById('results').innerHTML = 0;
	} 
	if(operator=== '-'){
		var num1 = firstNum.pop();
		numbbbaaa1 = num1;
		firstNum= [];
		myOperator = '-';
		document.getElementById('results').innerHTML = 0;
	} 	
	if(operator=== '*'){
		var num1 = firstNum.pop();
		numbbbaaa1 = num1;
		firstNum= [];
		myOperator = '*';
		document.getElementById('results').innerHTML = 0;
	} 
	if(operator=== '/'){
		var num1 = firstNum.pop();
		numbbbaaa1 = num1;
		firstNum= [];
		myOperator = '/';
		document.getElementById('results').innerHTML = 0;
	} 
	
}

function getEqual(){
	 
	 var num2 = firstNum.pop();
	 numbbbaaa2 = parseInt(num2);
	 console.log(typeof(myOperator));
	 var answer = 0;
	 if(myOperator === '+')
	 {
		answer = numbbbaaa1 + numbbbaaa2;
	 } 
	 if(myOperator === '-')
	 {
		answer = numbbbaaa1 - numbbbaaa2;
	 } 
	 if(myOperator === '*')
	 {
		answer = numbbbaaa1 * numbbbaaa2;
	 } 
	 if(myOperator === '/')
	 {
		answer = numbbbaaa1 / numbbbaaa2;
	 } 
	 answer = answer;
	 console.log('nummm2:', typeof(numbbbaaa2));
	 console.log('numnnn1:' , typeof(numbbbaaa1));
	 console.log('answer:' ,(answer));
	 numbbbaaa2 = answer
	 document.getElementById('results').innerHTML= numbbbaaa2;
}


	







