function calculadora(num1, num2) {
    var numero1 = num1;
    var numero2 = num2;

    if (numero1 <= 0 || numero2 <= 0) {
        document.writeln("Numeros no pueden ser menor a 1");
    } else {
        var respuesta = numero1 + numero2;
        return respuesta;
    }
}

var resultado = function (num1, num2) {
    //aqui estamos retornando la variable resultado
    var numero1 = num1; //y por ende la funcion se llama resultado
    var numero2 = num2;

    if (numero1 <= 0 || numero2 <= 0) {
        document.writeln("Numeros no pueden ser menor a 1");
    } else {
        var respuesta = numero1 + numero2;
        return respuesta;
    }
};

function numeromaximo(val1, val2) {
    if (val1 > val2) {
        return val1; //apenas encuentra el punto de retorno se deja de ejecutar la funcion
    } else {
        return val2;
    }
}

document.writeln(calculadora(3, 2)); //paso parametro , y el parametro de salida es toda la funcion
document.write("<br>");
document.writeln(resultado(2, 5));
document.write("<br>");
document.writeln("El numero maximo es: "+numeromaximo(60, 20));