function zoom(){
var thumb = document.getElementById("thumb");

if (thumb.className == "thumb") { // aqui hago la condicion si esq la clase aun no se a alterado, le hace ZOOM 
    thumb.setAttribute("class","thumb grande"); // aqui le decimos que la imagen tome el estilo de CSS    
}else{ //caso contrario le devuelve al tamano original
    thumb.className = "thumb";
}

}