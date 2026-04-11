// NUMEROS Y EL OPERADOR +

// En expresiones que involucran valores numericos y de cadena con el operador +, JavaScript convierte los valores numericos en cadenas, por ejemplo:

a = "La respuesta es " + 42;
console.log(a); // La respuesta es 42

b = 42 + " es la respuesta";
console.log(b); // 42 es la respuesta

// Con todos los demas operadores, JavaScript no convierte valores numericos en cadenas, por ejemplo:

c = "37" - 7; // 30
"37" + 7; // 377