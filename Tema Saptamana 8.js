/* EX 1 */

function sum(a,b){
    if(a!==b){
        return a+b;
    }
    else {
        return (a+b)*5;
    }
}
console.log(sum(10,10));

/* EX 2 */

function check_30(a,b){
    if (a===b===30 || (a+b)===30){
        return true;
    }
    else {
        return false;
    }
}
console.log(check_30(15,20));

/// EX 3 !!>>


function checkString(myString,stringChecked){
    let strLength = stringChecked.length;
    if(myString.slice(0,strLength)===stringChecked){
        return myString;
    }
    else{ 
        const a = myString.split(' ');
        a.unshift(stringChecked);
        return a;
    }
}
console.log(checkString("oneJStrue","JS"));


//Varianta 2 
var c;
function checkString(myString,stringChecked){
    let strLength = stringChecked.length;
    if(myString.slice(0,strLength)===stringChecked){
        return myString;
    }
    else{
        return stringChecked+myString;
    }
}
console.log(checkString("oneJStrue","JS"));

/* EX 4 */

function duplicate(myString){
    toBeChecked = myString.split("");
    let unique=[];
    for (var i = 0; i < toBeChecked.length; i++){
       
            if (unique.indexOf(toBeChecked[i])===-1){
                unique.push(toBeChecked[i]);
            }
    }
    return unique;
}
console.log(duplicate("223445"));

/* EX 5 */

function longestString(myString){
    myStrToArr = myString.split(" ");
    let longest = 0;
    let longestWord = [];
    for (var i = 0; i < myStrToArr.length; i++){
        if(myStrToArr[i].length > longest){
            longest = myStrToArr[i].length; 
            longestWord = myStrToArr[i];
        }
    }
    return longestWord;
}
console.log(longestString("do your homework"));    

/* EX 6 */

function display(a){
    for (var i = 1; i <= 5; i++){
     console.log(a.repeat(i));   
    }
}
console.log(display("*"));

/* EX 7 */ //??????????? undefined
 
const negativeNumbers = [];
function extractNegativeNumbers(numbers) {
    for (var i = 0; i < numbers.length; i++){
        if(numbers[i]<0){
           negativeNumbers.push(numbers[i]);
        }
    }
}
console.log(extractNegativeNumbers([1,2,-5,4,-6]));

/* EX 8 */

function calculate(a,b,operator){
    if (operator === "add"){
        return a+b;
    }
    if (operator === "multiply"){
        return a*b;
    }
    if (operator === "substract"){
       return a-b;
    }
    if (operator === "divide"){
        return a/b;
    }
}
console.log(calculate(20,2,"add"));

/* EX 9 */

function divBy(number){
    if(number%3 === 0 && number%5 === 0){
        return "BOTH";
    }
    if(number%3 === 0){
        return "THREE";
    }
    if(number%5 === 0){
        return "FIVE";
    }
    else{
        return number;
    }
}
console.log(divBy(15));

//Master ex

/* EX 9 */

function dayAndHour(){
    var d = new Date();
   {var weekday = new Array(7);
        weekday[0] = "Duminica";
        weekday[1] = "Luni";
        weekday[2] = "Marti";
        weekday[3] = "Miercuri";
        weekday[4] = "Joi";
        weekday[5] = "Vineri";
        weekday[6] = "Sambata";
    var n = "Astazi este: " + weekday[d.getDay()];
    var h = "Ora este: " +  d.toLocaleString([], { hour: '2-digit'}) + " : " + d.getMinutes() + " : " + d.getSeconds();
    return n + "\n" + h;
   }
}
console.log(dayAndHour());

/* EX 10 */

function atmPin(pin){
    const validPin = "1234";
    if (validPin===pin){
        return true;
    }
    else {
        return false;
    }
}
console.log(atmPin("123"));

/* EX 11 */

function removeVowels(myString){
    return myString.replace(/[aeiou]/gi, '');
}
console.log(removeVowels("mother"));

/* EX 12 */

function square(nr){
    let a =  Math.sqrt(nr);
    if (a%1===0){
        return true;
    }
    else {
        return false;
    }
}
console.log(square());

/* EX 13 */

function anagram(myStr1,myStr2){
    let str1 = myStr1.split("");
    let str2 = myStr2.split("");
    let myAnagram = [];
    for (var i = 0; i < str1.length; i++){
        for (var j = 0; j < str2.length; j++){
            if (str1[i] === str2[j]){
                myAnagram.push(str1[i]);
            }
        }
    }
    return myAnagram;
}
console.log(anagram("the","ethmh"));










