(function () { // se aniaden este codigo para q no puedan acceder a modificar las funciones
    
    function suma(numero1, numero2) {

        var numero1 = parseFloat(document.getElementById("txt1").value); //ParseFloat transforma de texto a Numerico con decimales
        var numero2 = parseFloat(document.getElementById("txt2").value);//get elemet byId .. toma los Id de los componentes del HTML

        var resultado = numero1 + numero2
        return resultado;
    }
    
}())