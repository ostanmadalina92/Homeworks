var myForm = document.createElement("FORM");
myForm.setAttribute("id", "myForm");
document.body.appendChild(myForm);

var myP = document.createElement("p");
myP.innerHTML = "USERNAME: ";
myForm.appendChild(myP);

var myInput0 = document.createElement("INPUT");
myInput0.setAttribute("type", "text");
myInput0.setAttribute("name", "myInput0");
myForm.appendChild(myInput0);

var myPh = document.createElement("p");
myPh.innerHTML = "(Must be at least 4 characters, letters, and numbers only.)";
myForm.appendChild(myPh);

myForm.appendChild(document.createElement("br"));


var myP1 = document.createElement("p");
myP1.innerHTML = "EMAIL ADDRESS: ";
myForm.appendChild(myP1);

var myInput1 = document.createElement("INPUT");
myInput1.setAttribute("type", "email");
myForm.appendChild(myInput1);

var myPh1 = document.createElement("p");
myPh1.innerHTML = "(We send your registration email to this address.Double-check your email address before continuing.)";
myForm.appendChild(myPh1);


myForm.appendChild(document.createElement("br"));

var myP2 = document.createElement("p");
myP2.innerHTML = "FIRSTNAME: ";
myForm.appendChild(myP2);

var myInput2 = document.createElement("INPUT");
myInput2.setAttribute("type", "text");
myForm.appendChild(myInput2);

var myPh2 = document.createElement("p");
myPh2.innerHTML = "(Must be input.)";
myForm.appendChild(myPh2);


myForm.appendChild(document.createElement("br"));

var myP3 = document.createElement("p");
myP3.innerHTML = "LASTNAME: ";
myForm.appendChild(myP3);

var myInput3 = document.createElement("INPUT");
myInput3.setAttribute("type", "text");
myForm.appendChild(myInput3);

var myPh3 = document.createElement("p");
myPh3.innerHTML = "(Must be input.)";
myForm.appendChild(myPh3);


myForm.appendChild(document.createElement("br"));


var myP4 = document.createElement("p");
myP4.innerHTML = "NICKNAME: ";
myForm.appendChild(myP4);

var myInput4 = document.createElement("INPUT");
myInput4.setAttribute("type", "text");
myForm.appendChild(myInput4);


myForm.appendChild(document.createElement("br"));

var myP5 = document.createElement("p");
myP5.innerHTML = "PHONE: ";
myForm.appendChild(myP5);

var myInput5 = document.createElement("INPUT");
myInput5.setAttribute("type", "number");
myForm.appendChild(myInput5);


myForm.appendChild(document.createElement("br"));
myForm.appendChild(document.createElement("br"));

var myInput6 = document.createElement("INPUT");
myInput6.setAttribute("type","radio");
myForm.appendChild(myInput6);
myInput6.id = "id6";
var label = document.createElement("label");
label.htmlFor = "id6";
label.innerHTML="GIMME A SITE!";
myForm.appendChild(label);

myForm.appendChild(document.createElement("br"));
myForm.appendChild(document.createElement("br"));

var myInput7 = document.createElement("INPUT");
myInput7.setAttribute("type","radio");
myForm.appendChild(myInput7);
myInput7.id = "id7";
var label2 = document.createElement("label");
label2.htmlFor = "id7";
label2.innerHTML="JUST A USERNAME, PLEASE";
myForm.appendChild(label2);


function setBgColor() { 
    var myInputs = [myInput0, myInput1, myInput2, myInput3, myInput4, myInput5]
    for (var i = 0; i < myInputs.length; i++){
        myInputs[i].style.backgroundColor = "#E6E6E6";
        myInputs[i].style.width = "400px";
        myInputs[i].style.height = "20px";
    }
}
setBgColor();    

document.body.style.width = "400px";

document.body.style.margin = "auto";
document.body.style.border = "thick solid #E6E6E6";
document.body.style.padding = "10px 10px 10px 10px";

myForm.appendChild(document.createElement("br"));
myForm.appendChild(document.createElement("br"));

function myFunction() {
    var nextBt = document.createElement("BUTTON");
    nextBt.innerHTML = "NEXT";
    nextBt.setAttribute("type","submit");
    nextBt.setAttribute("value","NEXT");
    document.body.appendChild(nextBt);
    nextBt.style.backgroundColor = "black";
    nextBt.style.color = "white";
    nextBt.style.width = "400px";
    nextBt.style.height = "35px";
    nextBt.style.padding = "5px";
}
myFunction(); 


function validateForm() {
    for (var j = 0; j < myForm.length; j++){
        var x = document.forms["myForm"][`myInput${j}`].value;
        if (x == "") {
            var req = document.createElement("INPUT");
            req.setAttribute("type", "text");
            myForm.appendChild(req);
            req.style.backgroundColor = "red";
            $(`myInput${j}`).after(req); ///////??? nu reusesc sa inserez un nou input dupa fiecare iteratie

        return false;
        }
    }
}
validateForm();

myForm.addEventListener("submit",validateForm);




