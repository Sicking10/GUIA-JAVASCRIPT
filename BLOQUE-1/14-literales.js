// LITERALES

// Los literales presentan valores en JavaScript. Estos son valores fijos, no variables, que literalmente proporcionas en tu script

// ARREGLOS LITERALES
// Es una lista de cero o mas expresiones, cada una de las cuales representa un elemento del arreglo, encerrada entre corchetes []. Cuando creas un arreglo utilizando un arreglo literal, se inicia con los valores especificados como sus elementos, y su lenght se establece en el numero de argumentos especificado

// Un arreglo literal es un tipo de iniciador de objeto
let coffees = ["Mocha", "Latte", "Cappuccino"];

// No tienes que especificar todos los elementos en un arreglo literal. Si colocas dos comas en una fila, el arreglo completa el valor undefined para los elementos no especificados. Por ejemplo:

// Si incluyes una coma al final de la lista de los elementos, la coma es ignorada.
let fish = ["Tuna", "Cod", "Salmon", , "Trout"];
console.log(fish); // ["Tuna", "Cod", "Salmon", undefined (empty), "Trout"]

// Entender el comportamiento de las comas adicionales es importante para comprender JavaScript. Sin embargo al escribir tu propio codigo, debes declarar explicitamente los elementos que faltan como undefined. Hacerlo asi aumenta la claridad y facilidad de mantenimiento de tu codigo

// BOOLEANOS LITERALES
// Tiene dos valores literales: true y false
