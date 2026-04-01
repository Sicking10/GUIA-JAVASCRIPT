// EVALUAR VARIABLES

// Una variable declara usando var o let sin un valor especificado tiene valor undefined. Si se intenta acceder a una variable no declarada, da como resultado el disparo de una excepcion ReferenceError:

var a;
console.log("El valor de a es " + a); // El valor de a es undefined

var b;
console.log("El valor de b es " + b); // El valor de b es undefined

console.log("El valor de c es " + c); // Error de referencia: c is not defined

let x;
console.log("El valor de x es " + x); // El valor de x es undefined

console.log("El valor de y es " + y); // Error de referencia: y is not defined, ademas de mostrar error que es despues de la inicialziacion de la variable
let y;

// Puedes usar undefined para determinar si una variable tiene un valor. En el siguiente codigo, a la variable input no se le asigna un valor y la declaracion if evalua a true

var input;
if (input === undefined) {
    doThis();
} else {
    doThat();
}

// El valor undefined se comporta como false cuando se usa en un contexto booleano, por ejemplo, el siguiente codigo ejecuta la funcion myFunction porque el elemento myArray es undefined:

var myArray = [];
if (!myArray[0]) myFunction();