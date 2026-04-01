// ELEVACION DE FUNCION

// En el caso de las funciones, solo se incluyen declaraciones de funcion, pero no las expresiones de la funcion:

foo(); // bar

function foo() {
    console.log("bar");
}

// Cuando es expresion de funcion la cosa cambia:

baz(); // TypeError: baz no es una funcion

var baz = function () {
    console.log("bar2");
}