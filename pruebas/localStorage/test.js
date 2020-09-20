function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}

function contadorClicks() {
    // Si existe contador se incrementa y sino se inicializa
    if (localStorage.contador) {
        // Se convierte el contador a entero porque por defecto es una cadena
        localStorage.contador = parseInt(localStorage.contador) + 1;
    } else {
        localStorage.contador = 1;
    }
    document.getElementById("contador").value = localStorage.contador + " Clicks";
}

function resetearClicks() {
    localStorage.removeItem("contador");
}