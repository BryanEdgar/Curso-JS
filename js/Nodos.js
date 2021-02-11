//anadir elementos o parrafos a la vista html

var usuario = prompt("Ingrese Nombre");


//1. Crear el elemento
var elemento = document.createElement("h2");

//2. Crear un nodo de Texto
var contenido = document.createTextNode("Es es nuestro primer nodo");

//3. Anadir el nodo de tesxto al elemento 
elemento.appendChild(contenido); //aqui estamos agregando nuestro contenido al elemento

//4. agregar atributos al elemento 
elemento.setAttribute("align","center"); //aqui le damos estilo al parrafo q vamos agregar

//5. Agregar el elemento al documento
if (usuario == "Bryan"){
    document.getElementById("Nodo").appendChild(elemento);
}



