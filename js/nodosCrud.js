var elemento = document.createElement("li");
var contenido = document.createTextNode("Nuevo texto en actualizacion");
var padre = document.getElementsByTagName("li")[0].parentNode;
var original = document.getElementsByTagName("li")[0];

//========================reeplazo de contenidos=======================================
// var primerelemento = document.getElementById("primero"); //accedemos al elemento 
// primerelemento.innerHTML = "utilizo inner <i>HTML</i>"; //actualiza el contenido mantiene el formato HMTL
// primerelemento.textContent = "utilizo txt content" //no reconoce las etiquetas HTML


// padre.replaceChild(contenido,original); // recibe dos parametros lo q vamos a poner .. lo q vamos a borrar

//=====================eliminacion de contenido =======================================

padre.removeChild(original); //recibe el elemento que queremos eliminar 