/* EX 1 */

displaySum = nr =>{ 
    let sum = 0;
    for(var i = 1; i <= nr; i++){
        sum += i;
        console.log(sum);
    }
}
console.log(displaySum(10));

/* EX 2 */

longestString = myString => {
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

/* EX 3 */

doreverse = my_string => {
    my_array = my_string.split("");
    my_reversed_array = my_array.reverse();
    return my_reversed_array.join("");
}
console.log(doreverse("My name is"));

/* EX 4 */

nextLetter = myString => {
    let result="";
    for (var i = 0; i< myString.length; i++){
        let nextChar = String.fromCharCode(myString.charCodeAt(i)+1);
        result = result + nextChar;
    }
    console.log(result);
}
console.log(nextLetter("aabb"));

/* EX 5 */

convert = time => {
    let hours = (time / 60);
    console.log(hours);
    let roundedHours = Math.floor(hours);
    console.log(roundedHours);
    let minutes = (hours - roundedHours) * 60;
    console.log(minutes);
    let roundedMinutes = Math.round(minutes);
    console.log(roundedMinutes);
return "input: " + time + " -> output: " + roundedHours + " : " + roundedMinutes ;
}
console.log(convert(61));

/* EX 6 */

sortAlpha = myString => {
    let myStringToArr = myString.split("");
    let orderedChar = myStringToArr.sort();
    return orderedChar.join("");
}
console.log(sortAlpha("dcba"));

/* EX 7 */

checkPlus = myString => {
    myStrToArr = myString.split("");
    for (var i = 0; i < myStrToArr.length; i++){
        if (myStrToArr[i]==="+" && myStrToArr[i+2]==="+"){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(checkPlus("+a+b+c+"));