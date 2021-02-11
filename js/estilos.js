var encabezado = document.getElementById("encabezado");

encabezado.style.color = "navy" //aqui se agregan los estilos directamente al elemento
encabezado.className = encabezado.className.replace("titulogrande"," "); //recibe dos parametros el valor a encontrar y elvalor a reemplazar
encabezado.className = "titulo"; //estoy cambiando el estilo del elemento encabezado