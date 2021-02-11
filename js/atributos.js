var elemento = document.createElement("div"); //creo el nuevo elemento q voy agregar
elemento.setAttribute("class","azul"); // le seteo la clase al elemento creado
var padre = document.getElementById("contenedor"); //identifico el elemento padre
var referencia = document.getElementsByTagName("div")[0]; //identifico el div que voy a reemplzar

padre.insertBefore(elemento,referencia);
