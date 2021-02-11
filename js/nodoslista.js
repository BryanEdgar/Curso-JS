var elemento = document.createElement("li");
var contenido = document.createTextNode("Nuevo texto");

// var padre = document.getElementById("lista"); //aqui obtengo el padre por el ID
var padre = document.getElementsByTagName("li")[0].parentNode; //aqui obtengo la lista de los tag li .. y tomo la primera posicion
var primerelemento = document.getElementsByTagName("li")[0]; // obtengo la primera posicion
var ultimoelemento = document.getElementsByTagName("li").length 
var ultimo = document.getElementsByTagName("li")[ultimoelemento ]
elemento.appendChild(contenido);

// padre.appendChild(elemento);
// padre.insertBefore(elemento,primerelemento); //toma un elemtno y lo pone despues de donde se indica con el parametro
// document.write("ultimo elemento"+ ultimoelemento);
padre.insertBefore(elemento,ultimo); //toma un elemtno y lo pone despues de donde se indica con el parametro
