// ELEVACION DE VARIABLES (HOISTING)

// Una cosa inusual de las variables en JavaScript es que puedes hacer referencia a una variable declarada mas tade, sin obtener una excepcion. Este concepto se llama elevacion. Las variables en JavaScript son, en cierto sentido, elevaras a la parte superior de la funcion o declaracion. Sin embargo, las variables que se elevan devuelven un valor de undefined. Entonces, incluso si declaras e inicias despues de usarla o hacer referencia a esta variable, todavia devuelve undefined.

// Por ejemplo:

console.log(x === undefined); // true
var x = 3;

// devolvera un valor undefined
var myVar = "my value";

(function() {
    console.log(myVar); // undefined
    var myVar = "valor local";
})();

// Debido a la elevacion, todas las declaraciones var en una funcion se deben colocar lo mas cerca posible de la parte superior de la funcion. Esta buena practica aumenta la claridad del codigo

