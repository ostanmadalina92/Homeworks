let myJason = "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json";
let request = new XMLHttpRequest();
request.open("GET", myJason);
request.requestType = "json";
request.send();

request.onload = function load() {
    var myColorsText = request.response;
    var myColors = JSON.parse(myColorsText);
    console.log(myColors);
    populateBody(myColors);
}
function populateBody(jsonObj) {
    var myUl = document.createElement("ul");
    document.body.appendChild(myUl);

    var objectJS = Object.keys(jsonObj);
    console.log(objectJS);
    var objectJSLength = objectJS.length;
    console.log(objectJSLength);
    var objectJSValues = Object.values(jsonObj);
    console.log(objectJSValues);
    for (var i = 0; i < objectJSLength; i++) {
        var myLi = document.createElement("li");
        myUl.appendChild(myLi);
        var myP = document.createElement("p");
        myLi.appendChild(myP);
        myP.innerHTML = objectJS[i];
        console.log(myP);
        var myDiv = document.createElement("div");
        myLi.appendChild(myDiv);
        myDiv.style.backgroundColor = objectJSValues[i];
    }
}



