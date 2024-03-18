let nombre = prompt("¡Bienvenido a MusIQ! Por favor, introduce tu nombre:");

if (nombre === null) {
    alert("¡Has cancelado el juego!");
} else {
    alert("Hola, " + nombre + ". ¡Prepárate para jugar a continuación!");
}

// Función mostrarPregunta
function mostrarPregunta(pregunta, opciones, respuestaCorrecta) {
    const respuestaUsuario = prompt(pregunta + "\n" + opciones);
    
    if (respuestaUsuario === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrecta);
    }
}

// Función jugarJuego
function jugarJuego() {
    
    mostrarPregunta("¿Quién es el líder de la banda británica Queen?\n(a) Freddie Mercury\n(b) John Lennon\n(c) Mick Jagger\n(d) Paul McCartney", "", "a");
    mostrarPregunta("¿Quién es considerado el Rey del Rock and Roll?\n(a) Bob Dylan\n(b) Elvis Presley\n(c) Chuck Berry\n(d) Buddy Holly", "", "b");
    mostrarPregunta("Cuál es el festival de música más grande del mundo, que se celebra anualmente en California?\n(a) Woodstock\n(b) Lollapalooza\n(c) Glastonbury\n(d) Coachella", "", "d");
    
    // Mensaje de fin del juego
    alert("¡Fin del juego! Gracias por jugar.");
}

jugarJuego();