// VARIABLES GLOBALES

// Las variables globales son propiedades del objeto global. En las paginas web, el objeto global es window, por lo que puedes establecer y acceder a variables globales utilzando la sintaxis window.variable

// Por ejemplo:

window.myVar = "hola";
console.log(myVar); // hola

// En consecuencia, puedes acceder a las variables globales declaras en una ventana o marco desde otra ventana o marco especificando el nombre de la window o el frame. Por ejemplo, si declaras una variable llamada phoneNumber en un documento, puedes hacer referencia a esta variable desde un iframe como parent.phoneNumber:

// Esta funcion de imprimir (que se encuentra en iframe.html) y la variable phoneNumber que se encuentra en index.html se van a complementar. La pagina principal tiene la variable y el iframe la de imprimir, al yo colocar en la pagina principal el iframe, el iframe va a poder acceder a la variable global que se encuentra en la pagina principal, y va a imprimir su valor ya que la pagina principal le va a responder:

console.log(parent.phoneNumber);

// El window digamos que normalmente no lo necesitas escribir, pero se usa cuando quieres dejar claro que la variable es global:

window.contador = 0;

function sumar() {
    for (let i = 0; i < 10; i++) {
    if (window.contador < 10) {
        window.contador++;
        console.log(contador);
    }

    if (window.contador === 10) {
        console.log("Felicidades, has terminado!");
    }
    }
}

sumar();

// Al ser globales no ocupan que las mandes a llamar en el script de la pagina principal