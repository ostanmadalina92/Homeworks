/* EX 1 */

function identity(CNP) {
    var firstnumber = CNP.substr(0, 1);
    if (firstnumber == 1) {
        return "Persoana verificata este de sexul M";
    }
    else if (firstnumber == 2) {
        return "Persoana verificata este de sexul F";
    }
}
console.log(identity("1924565778987"));

/* EX 2 */


var checkCategories = function (score) {
    var categories = {
        punctaj_1_3: "E",
        punctaj_4_6: "D",
        punctaj_7_8: "B",
        punctaj_9: "A",
        punctaj_10: "A+"
        };
    
    
    var calificativ = Object.values(categories);
    if (1 <= score && score <= 3) {
        return "Calificativul corespunzator punctajului " + score  + " este " + calificativ[0];
    }
    else if (4 <= score && score <= 6) {
        return "Calificativul corespunzator punctajului " + score  + " este " + calificativ[1];
    }
    else if (7 <= score && score <= 8) {
        return "Calificativul corespunzator punctajului " + score  + " este " + calificativ[2];
    }
    else if (score == 9) {
        return "Calificativul corespunzator punctajului " + score  + " este " + calificativ[3];
    }
    else if (score == 10) {
        return "Calificativul corespunzator punctajului " + score  + " este " + calificativ[4];
    }
};
console.log(checkCategories(7));

/* EX 3 */  // Note for Lucian & Ovidiu ==>  Nu reusesc sa inteleg ce am gresit de nu imi afiseaza corect :(( //

function provenience(mark){
    var cars = {
        Audi:"Germany",
        Alfa_Romeo: "Italy",
        Cadillac: "USA",
        Ford: "UK",
        Dacia: "Romania",
        BMW: "Germany"
    };
    var keys = Object.keys(cars);
    //console.log(keys);//
    var ikeys= keys.length;
    //console.log(ikeys);//
    var i=0
    while (i<ikeys){
        if (keys[i]==mark){
            var result = "Marca " + mark + " se produce in " + (cars[mark]);
        } 

        else {
            var result = "Marca este necunoscuta. " ;
       }
    i++;
    } 
    return result;
}
    console.log(provenience("Dacia"));

    //var 2//
    
    function provenience(mark){
        var cars = {
            Audi:"Germany",
            Alfa_Romeo: "Italy",
            Cadillac: "USA",
            Ford: "UK",
            Dacia: "Romania",
            BMW: "Germany"
        };
        var keys = Object.keys(cars);
        var ikeys= keys.length;
        for (var i=0;i<ikeys;i++) {
            switch (true){
                case (keys[i]===mark) : var result = "Marca " + mark + " se produce in " + (cars[mark]);
                break;
                default :  var result = "Marca este necunoscuta. " ;
            }
        }
        return result;
    }
    console.log(provenience("Dacia"));

   // var 3//

var x = ["Audi", "Alfa_Romeo", "Cadillac", "Ford", "Dacia", "BMW"];
var y = ["Germany", "Italy", "USA", "UK", "Romania", "Germany"];
var z = x.length;
console.log(z);
var result;
function provenience(mark){
    for (var i=0; i<z; i++){
        if (mark=x[i]){
            result =  "Marca " + mark + " se produce in " + y[i];
            }       
        else {
            result = "Marca este necunoscuta.";
            }
    }
return result;  
}
console.log(provenience("Dacia"));    

/* EX 4 */

var cars = [
    {name: "John",  salary: 20000 },
    { name: "Danny", salary: 30500 },
    { name: "Bekker", salary: 15000 }
  ];

(function(){
    return cars.sort( function (a,b){
        return(a.salary-b.salary);
    })
}
    )();

console.log(cars);