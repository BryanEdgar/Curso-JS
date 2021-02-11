(function(){

    function saludo() {
        alert("ingreso a saludo");
    }

var boton = document.getElementById("btn");
var input = document.getElementById("txt");

boton.addEventListener("click",saludo); //este metodo recibe dos parametros .. el evento y lo q se ejecuta (funcion)

input.addEventListener("focus",saludo);

}())