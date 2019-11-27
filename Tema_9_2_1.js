// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) 
// care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net.
// Puneti acest element(append) la pagina noastra

document.getElementsByTagName("body")[0].style.fontFamily = "Arial, sans-serif";
document.getElementById("name").innerHTML = "Ostan Madalina";
document.getElementById("fav-drink").innerHTML = "Cosmopolitan";
document.getElementById("born-place").innerHTML = "Iasi";
var myList = document.getElementsByTagName("ul");
var nrLi = myList.length;
for (var i = 0; i < nrLi; i++){
    var li = document.getElementsByTagName("ul")[i];
    li.classList.add("listitem");
}
var myImage = document.createElement("img");
myImage.setAttribute("src", "cosmo.jfif");
document.body.appendChild(myImage);


