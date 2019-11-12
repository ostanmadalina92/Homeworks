/* EX 1 */
function protect_myemail(email){
    var half = email.split("@");
    return half[0].slice(0,3) + "@" + half[1];
}
console.log(protect_myemail("ostan.madalina@gmail.com"));

/* EX 2 */

function firstCapital(myString){
    var stringToArray = myString.split(" ");
    var arrayLength = stringToArray.length;
    var result= [];
    for (var i = 0; i < arrayLength; i++){
        result.push(stringToArray[i].charAt(0).toUpperCase() + stringToArray[i].slice(1).toLowerCase() + " ");
    }
    return result.join(" ");
}
console.log(firstCapital("i am working now"));

/* EX 3*/

function reverse(myString){
    var stringToArray = myString.split("");
    console.log(stringToArray);
    var arrayLength =  myString.length;
    console.log(arrayLength);
    var result = [];
    for (var i=0; i<arrayLength; i++){
        if (stringToArray[i]==stringToArray[i].toUpperCase()){
             result.push(stringToArray[i].toLowerCase());
            }
        else {
                result.push(stringToArray[i].toUpperCase());
               }
               
        }
        return result.join(" ");
    }
    console.log(reverse("My name IS MaDA"));

    
/* EX 4 */

function multidisplay(a,nr){
    var result =[];
    for (i=1; i<=nr; i++){
        result.push(a);  
    }
    return result.join("");
}
console.log(multidisplay("Wantsome",2));


/* EX 5 */
//var 1//
function palindrome(word){
    var stringToArray = word.split("");
    var fromendtostart = stringToArray.reverse().join(""); 
    var result;
    if (word==fromendtostart){
        result = word + " este un palindrom";
    }
    else {
        result = word + " nu este un palindrom"; 
    }
    return result;
}

console.log(palindrome("level"));

//var 2//

function palindrome(word){
    return word==word.split("").reverse().join("");
}
console.log(palindrome("mother"));

//var 3//

function palindrome(word) {

    var characters  = word.split('');
    var firstLetter = characters.shift();
    var lastLetter  = characters.pop();

    if (firstLetter == lastLetter) {
        return word + " este palindrom.";
    }

    if (firstLetter !== lastLetter) {
        return word + " nu este palindrom.";
    }
}
 console.log(palindrome("level"));


 /* EX 6 */


function mysort (my_array){
    my_array_length = my_array.length;
    console.log(my_array_length);
    var max;
    var result=[];
    for (i=0; i<=my_array_length; i++){
       var ascending = my_array[i].sort(function(a, b){return a - b}); 
       max=ascending.pop();
       result.push(max);
       var ascending2 = result.sort(function(a, b){return a - b});
       console.log(ascending2);
    }  
}
console.log(mysort([[67,34,89,100],[6,90,1],[10,9,6]]));

/* EX 7 */

function doreverse(my_string){
    my_array = my_string.split("");
    my_reversed_array = my_array.reverse();
    return my_reversed_array.join("");
}
console.log(doreverse("My name is"));

/* EX 8 */

function factorial(n){
   var n_factorial=1
   for (i=2; i<=n; i++)
      n_factorial = n_factorial*i;
      return n_factorial;   
}
console.log(factorial(6));

/* EX 9*/

function check_the_end(first, second){
var x =  first.lastIndexOf(second);
var second_length = second.length;
var first_length =  first.length;
if ((first_length-second_length)==x && first.slice(x,first_length)==second ){
    return true;
    }
else{
    return false;
}

}
console.log(check_the_end("am i what i am","am"));

/* EX 10 */

function checkIfTrue(myArray, myFunction){
    var number;
    for (var i = 0; i<myArray.length; i++){
        if(myFunction(myArray[i])===true){
            number=myArray[i];
            return number;
        }
    }
}
console.log(checkIfTrue([12,67,40,90],function(number){return number===40}));


/* EX 11 ???*/

var chars1;
var chars2;
var i;
var j;
function checkChars(first,second){
    // chars1 = first.split("");
    // chars2 = second.split("");
    // for (i=0; i<chars2.length; i++){
    //     for (j=0; j<chars1.length; j++){
    //         if (chars2[i]===chars1[j]){
               
    //         }
          
    //     }
    // }  
    if (first.includes(second)){
        return 'it works'
    }
}
console.log(checkChars("mammamia","ma"));




/* EX 12 */
var splitArray;
function stop(myArray,myValue){
        splitArray = myArray.split("");
        console.log(splitArray);
        for (var i=0; i<splitArray.length; i++){
            if(splitArray[i]===myValue){
                return "stop";
            }
        }
}
console.log(stop("victory","t"));

/* EX 13 */

var nonFalse;
var myTrueArray=[];
function checkIfFalse(myArray){
    for(var i=0; i<myArray.length; i++){
        nonFalse = Boolean(myArray[i]);
            if(nonFalse === true) {
                myTrueArray.push(myArray[i]);
            }
    } 
    return myTrueArray;
}
console.log(checkIfFalse([false, null, 0, "", undefined, NaN, "mother"]));

/* EX 14 */

function repeat(myString,n){
       for (var i=0; i<n; i++){
            console.log(myString);
       }
}
console.log(repeat("repeat n times", 6));
