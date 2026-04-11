// CONVERTIR TEXTO A NUMEROS

// En el caso que un valor representando un numero esta en memoria como texto, hay metodos para la conversion: parseInt(), parseFloat()

// parseInt() solo devuelve numeros enteros, por lo que su uso se reduce para decimales. Ademas una practica recomendada para esto es incluir siempre el parametro radix. El parametro radix se utiliza para especificar que sistema numerico usara:

// 101 es el texto, el 2 le dice a JavaScript que lo interprete como base 2 (binario)

parseInt("101", 2); // 5
console.log(parseInt("101", 2)); // 5

// Un metodo alternativo para recuperar un numero de una cadena es con el operador + (mas unario)

"1.1" + "1.1";
console.log("1.1" + "1.1"); // 1.11.1

(1.1) + (1.1);
console.log((1.1) + (1.1)); // 2.2