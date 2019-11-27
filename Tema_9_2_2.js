/* EX 2 */

  // Creati o pagina web care are un h1 cu "Book List"
  // adugati un script style unde sa tinem js-ul
  //Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si 
  //faceti append in pagina noastra
  //BONUS: folositi ul si li pentru a face display la carti
  //BONUS: adaugati o proprietaet pentru fiecare carte cu URL de la coverul cartii si 
  //adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - 
  //acolo va fi si poza)
  //BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.


  const books = [
    {title: 'The Power of Habit',
     author: 'Charles Duhigg',
     read: true
    },
    {title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false
    }];

    for (var i = 0; i < books.length; i++){
        var myPh = document.createElement("p");
        myPh.innerHTML = books[i].title + " - " + books[i].author;
        document.body.appendChild(myPh);
    }

    var ul = document.createElement("ul");

    for (var i = 0; i < books.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = '<p>' + books[i].title + " - " + books[i].author + '</p>';
        var myImage = document.createElement("img");
        myImage.setAttribute("src", `${i}.jpg`);
        li.appendChild(myImage);
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
        
