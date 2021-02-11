(function () {
    var contador = 0;

    function saludo() {
        contador++;
        document.write("saludo");
        
        // if (contador == 5) {
        //     clearInterval(intervalo); //recibe un id del intervalo
        // }

    }

    setTimeout(saludo,1000) //ejecuta la funcion dentro de un determinado tiempo

    //interval .. ejecutamos la funcion las veces que queramos

    // var intervalo = setInterval(saludo, 1000) //asi le asigno una variable a intervalo


}())