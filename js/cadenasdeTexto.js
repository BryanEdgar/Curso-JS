var texto = "Bryan Edgar";
var nuevotexto = texto.length; //nos permite saber cuantos caracteres tiene
var nuevados = texto.substring(2); //recorta la palabra de inicio a fin
var nuevatres = texto.substr(6,5); //recorta la palabra desde el parametro q se indica 
var nuevacuoatro = texto.indexOf("B",0)//nos devuelve la posicion de una letra en especifico, indicamos la posicion desde donde se va a buscar
var nuevacinco = texto.lastIndexOf("B");//busca des atras al final
var nuevaseis = texto.replace("Bryan","prueba"); // este metodo nos permite reemplazar una palabra por otra
var mayusculas = texto.toUpperCase();
var minusculas = texto.toLowerCase();
// alert("la longitud de la palabra:"+ texto + " es: " + nuevotexto);
// alert("Nos recorta la  palabra:"+ texto + " a: " + nuevados);
// alert("Nos recorta la  palabra:"+ texto + " a: " + nuevatres);
// alert("Nos enceuntra la  letra:"+ "r" + " en la posicion: " + nuevacuoatro);
// alert("Nos enceuntra la  letra:"+ "B" + " en la posicion: " + nuevacinco);
// alert("Nos enceuntra la  letra:"+ "B" + " en la posicion: " + nuevaseis);
// alert("convierte de :"+ texto + " s: " + mayusculas);
alert("convierte de :"+ texto + " s: " + minusculas);