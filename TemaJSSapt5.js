
/* EX 1 */
var verify = function(a) {
    var y = typeof "string";
    var x = typeof a;
    return x===y;
}
var is_string = verify("w3resource)");
console.log(is_string);
var is_string = verify([1,2,4,0]);
console.log(is_string);

/* EX 2*/

var is_Blank = function(a) {
   var lungime = a.length;
   return lungime==0;
}

console.log(is_Blank(''));



/* EX 3*/

var transform = function(a){
    return a.split(' ');
}
var x =  transform("We are");
console.log(x);

/* EX 4*/

var abbr = function (a) {
   var x = a.split(" ");
   return x[0] + " " + x[1].charAt(0) + ".";
}
console.log(abbr("Mark Twain")); 


/* EX 5 */

var capital = function (a) {
    var x = a.split(" ");
    x[0]=x[0].charAt(0).toUpperCase()+"ark";
    var z = x.join(" ");

    return z;
 }
 console.log(capital("mark Twain"));

 /* EX 6 */
 
 var reduce = function(a) {
     var x = a.substr(0,4);
     return x;
 }
 console.log(reduce('Mark is joining us tonight'));

 /* EX 7 */
 var compare = function(a,b) {
   return a.charAt(b)===a.charAt(b).toUpperCase();

 }
 console.log(compare("MuSiC",3));

 /* EX 8 */
var add = function(a,b,at) {
   var position = a.indexOf(at);
   return a.substr(0,position) + b + a.substr(position);
}
console.log (add("Maine mergem la bunici.", "in vizita ","la"));

/* EX 9 */

var remove = function (a,at){   
  return a.replace(at,'');
}
console.log(remove("Maine este o zi de luni","o zi de"));

/* EX 10 */

var compare = function(a,b){
   return a.toUpperCase()===b.toUpperCase();
}
console.log(compare("MaDaliNa","madalina"));

/* EX 11 */

var uncapitalized = function(a){
    x = a.length+1;
    a = a.charAt(0).toLowerCase() + a.substr(1,x);
    return a;
}
console.log(uncapitalized("MY NAME IS"));







