//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda

const byId =  document.getElementById('test');
byId.style.backgroundColor = 'pink'; 
const byClass = document.getElementsByClassName('test');
byClass[0].style.backgroundColor = 'red';
byClass[1].style.backgroundColor = 'purple';
const bySection = document.getElementsByTagName('section');
bySection[0].style.backgroundColor = "blue";
bySection[1].style.backgroundColor = "blue";
const bySelector =  document.querySelector('#test-query');
bySelector.style.backgroundColor = "violet";
const bySelectorAll = document.querySelectorAll(".test-query-all");
bySelectorAll[0].style.backgroundColor = "orange";
bySelectorAll[1].style.backgroundColor = "orange";