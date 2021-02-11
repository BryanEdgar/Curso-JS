(function () {

    var formulario = document.getElementsByName("formulario")[0], //aqui nos devuelve una coleccion con elementos del mismo nombre
        elementos = formulario.elements,
        boton = document.getElementById("btn");


    function validarNombre(e) {
        if (formulario.nombre.value == 0) {
            alert("Complete el campo nombre");
            e.preventDefault();
        }
    }

    function validarRadio(e) {
        if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
        } else {
            alert("complete el sexo");
            e.preventDefault();
        }

    }

    function validarCheck(e) {
        if (formulario.terminos.checked == false) {
            alert("Acepte los terminos");
            e.preventDefault();
        }
    }


    function validar(e) {
        validarNombre(e);
        validarRadio(e);
        validarCheck(e);
    }

    formulario.addEventListener("submit", validar);

}())