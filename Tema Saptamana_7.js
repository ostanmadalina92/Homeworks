// EX 1 //
// using FOR//
function check_parity(nr){
    for (var i=0; i<=nr; i++){
        if(i%2==0){
        console.log("Nr" + i + "este par");
        }
        else {
            console.log("Nr" + i + "este impar");
        }
    }
}
console.log(check_parity(20));

//using WHILE//
function check_parity(nr){     /*declar functia cu parametrul nr*/ 
    var i=0;   /*variabila i este initializata cu valoarea 0*/ 
    while (i<=nr){ /* cat timp i<20 continua */
        if(i%2==0){ /* daca restul impartirii lui i la 2 este 0 */
        console.log("Nr" + i + "este par"); /* afiseaza nr i este par */
        }
        else {
            console.log("Nr" + i + "este impar"); /* daca restul nu este o, afiseaza nr i este impar*/
        }
    i++; /* i ia valoarea i+1*/
    }
}
console.log(check_parity(20)); /* apeleaza functia cu argumentul 20 */




// EX 2 //
// using FOR //
function multiply_by_9(nr){
    for (var i=0; i<=nr; i++){
         var result = i*9;
         console.log(i+"*9="+ result);
    }
}
console.log(multiply_by_9(10));

// using WHILE//
function multiply_by_9(nr){
    var i = 0;
    while (i<=nr){
         var result = i*9;
         console.log(i+"*9="+ result);
         i++;
    }
   
}
console.log(multiply_by_9(10));




// EX 3 //

function multiply(nr){
    for (var i=0; i<=nr; i++){
       for (var j = 0; j<=10;j++){
            var result = i * j;
            console.log(i+"*"+j+"="+result);
       }
    }
}
console.log(multiply(10));


// EX 4 //
var checkCategories = function (score) {
    var categories = {
        punctaj_1_3: "E",
        punctaj_4_6: "D",
        punctaj_7_8: "B",
        punctaj_9: "A",
        punctaj_10: "A+"
        };
    
    
    var calificativ = Object.values(categories);
    for (var i=1; i<=score; i++)   {
        if (1 <= i && i <= 3) {
            console.log("Calificativul corespunzator punctajului " + i  + " este " + calificativ[0]);
        }
        if (4 <= i && i <= 6) {
            console.log("Calificativul corespunzator punctajului " + i  + " este " + calificativ[1]);
        }
        if (7 <= i && i <= 8) {
            console.log("Calificativul corespunzator punctajului " + i  + " este " + calificativ[2]);
        }
        if (i == 9) {
            console.log("Calificativul corespunzator punctajului " + i  + " este " + calificativ[3]);
        }
        if (i == 10) {
            console.log("Calificativul corespunzator punctajului " + i  + " este " + calificativ[4]);
        }
    }

}

console.log(checkCategories(10));



