// CONSTANTES

// Puedes crear una constante de solo lectura con nombre con la palabra clave const y ten en cuenta algo: Una constante no puede cambiar el valor a traves de la asignacion o volver a declararla mientras se ejecuta el script. Se debe iniciar a un valor

const PI = 3.14159;

// No puedes declarar una constante con el mismo nombre que una funcion o una variable en el mismo ambito. Por ejemplo: 

function f() {}
const f = 5; // SyntaxError: Identifier 'f' has already been declared

// Sin embargo, las propiedades de los objetos asignados a constantes no son protegidas, es por esto que la siguiente declaracion es valida:

const MY_OBJECT = {
    key: "value"
};
MY_OBJECT.key = "otherValue"; // NO ERROR

// Ademas, el contenido de los arreglos tampoco esta protegido cuando es asignado a una constante, es por esto que la siguiente declaracion es valida:

const MY_ARRAY = [1, 2, 3];
MY_ARRAY.push(4); // NO ERROR

