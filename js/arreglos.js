var nombre = ["Prueba",123]; //se declara una variable tipo array
var arreglo =["gaby","alisson"];

nombre[nombre.length] = prompt("ingresa nombre a la ultima posicion" + nombre.length); // en este parte estoy agregando un item al array 
                                                                                        // con ayuda de la posicion, ya que el meotodo length 
                                                                                        //nos devuelve el ultimo item 
nombre[nombre.length] = prompt("ingresa nombre a la ultima posicion" + nombre.length);   // sigo agregando items    

nombre.push("FIN","FIN2","FIN3");  //este metodo permite agregar lineas al FINAL del array        
nombre.pop() //este metodo elimina el ultimo registro del array                                                                       

var lista3 = nombre.concat(arreglo); // aqui estoy uniendo dos arrays 

//lista3.join(" : "); este metodo nos permite separar cada item con el valor que ingresemos en el parentesis

var ordenados = lista3.sort(); //este metodo nos ordena ALFABETICAMENTE

alert(lista3.join(" : "));