// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
const puppies = 'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true'

const myPuppies = function () {
    const request = new XMLHttpRequest();
    request.open("GET", puppies);
    request.requestType = "json";
    request.send();
    request.onload = function load() {
        myResponseText = request.response;
        myResponse = JSON.parse(myResponseText);
        console.log(myResponse);
        display(myResponse);
    }
    function display(jsonObj) {
        document.getElementsByClassName("text").innerHTML = jsonObj;
    }
}
var myButton = document.getElementsByClassName("btn");
myButton.addEventListener("click", myPuppies, false);

///???? XMLHttpRequests_3.js:24 Uncaught TypeError: myButton.addEventListener is not a function
//    at XMLHttpRequests_3.js:24