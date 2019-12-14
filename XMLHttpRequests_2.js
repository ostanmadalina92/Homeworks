const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

let request = new XMLHttpRequest();
request.open("GET", url);
request.requestType = "json";
request.send();
request.onload = function load(){
var myQuotesText = request.response;
var myQuotes = JSON.parse(myQuotesText);
console.log(myQuotes);
display(myQuotes);
}
function display(jsonObj){
document.getElementById("quote").innerHTML = jsonObj;
}