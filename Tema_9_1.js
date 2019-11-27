//EX 1    acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
    setTimeout(function(){
        console.log('1');
    },400);
}
  
const func2 = () => {
    setTimeout(function(){
        console.log('2');
    },300);
}
  
const func3 = () => {
    setTimeout(function(){
        console.log('3');
    },100);
}
  
const func4 = () => {
    setTimeout(function(){
        console.log('4');
    },500);
       
}
  
const func5 = () => {
    setTimeout(function(){
        console.log('5');
    },200);        
}
  
  
func1();
func2();
func3();
func4();
func5();


/* EX 2 */
//console.log(myMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const increment = a => ++a;
console.log(customMap(randomArray, increment)); 

/*const newArray =  customMap(randomArray, increment);
console.log(newArray); */

//2   console.log(myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const double = a => a*2;
console.log(customMap(randomArray, double));  

//3 console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const square = c => c*c;
console.log(customMap(randomArray, square));


/* EX 3 */

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};

Call the filter function in 5 different cases ( 5 different filtering functions - example: 
    filters the odd items, filter the items which are divisible by 3, etc... )
*/


var filter = function(myArray,callbackFunct){
    var filteredArray = [];
    for (var i = 0 ; i < myArray.length ;  i++){
        var item = myArray[i];
        if(callbackFunct(item)===true){
            filteredArray.push(item);
        }
    }
    return filteredArray;
}
var firstCallback = a => {
    if (a%2 === 1){
        return true;
    }
}
var secondCallback = a => {
    if (a%3 === 0){
        return true;
    }
}
var thirdCallback = a => {
    if (a*a === 25){
        return true;
    }
}
var fourthCallback = (a,b=10) => {
    if (a*2 === b){
        return true;
    }
}
var fifthCallback = (a,b=[8,10,20]) => {
    for (var j = 0; j < b.length; j++){
        if (b[j]%a === 0){
            return true;
        }
    }
}
console.log(filter([4,6,5,9],fifthCallback));


/* EX 4 */

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

const objStage = {value1: "succes", value2: "error"};

var multipleCallbacks = function(stage,a,b){
     if (stage==="succes"){
        a();
    }
    else if (stage==="error"){
        b();
    }
}
var firstCallback = () => {
    console.log(objStage.value1);}
var secondCallback = () => {
    console.log(objStage.value2);}
console.log(multipleCallbacks("error",firstCallback,secondCallback)); 



