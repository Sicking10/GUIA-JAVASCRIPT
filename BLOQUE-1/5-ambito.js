// AMBITO DE VARIABLES

// Cuando declaras una variable fuera de cualquier funcion se llama VARIABLE GLOBAL, ya que esta disponible para cualquiero codigo en el documento actual
// Cuando declaras una variable dentro de una funcion se llama VARIABLE LOCAL, porque solo esta disponible dentro de esa funcion

// Por ejemplo, el siguiente codigo registrara 5, porque el ambito de xc es el contexto global. El ambito de xc no se limita al bloque de instrucciones if inmediato

if (true) {
    var xc = 5;
}
console.log(xc); // 5

// Ahora la cosa va a cambiar si se usa let

if (true) {
    let yc = 5;
}
console.log(yc); // ReferenceError: yc no está definida