var numero = prompt("ingrese Numero de dias de la semana");

var semana = [];

for (i = 1;i <= numero; i++ ) {
   semana[semana.length] = prompt("Ingrese dia"+ i+ "de la semana");
}

for(i=0; i< semana.length ; i++){
    document.write(semana[i]+"<br>"); //aqui accede a cada item para imprimir el dia 
}
