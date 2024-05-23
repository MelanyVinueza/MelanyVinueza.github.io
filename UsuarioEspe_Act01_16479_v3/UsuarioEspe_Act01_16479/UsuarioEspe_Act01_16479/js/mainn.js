document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", validarFormularioLogin);
    document.getElementById("registerForm").addEventListener("submit", validarFormularioRegistro);
});

function validarFormularioLogin(event) {
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usuario === "" || clave === "") {
        alert("Por favor, completa todos los campos.");
        event.preventDefault();
        return false;
    }

    // Verificar usuario y contraseña específicos
    if (usuario === "ADMIN" && clave === "121212") {
        alert("Ingreso correctamente");
        return true;
    } else {
        alert("Usuario o contraseña incorrectos");
        event.preventDefault();
        return false;
    }
}

function validarFormularioRegistro(event) {
    var nom = document.forms["registerForm"]["nom"].value;
    var ape = document.forms["registerForm"]["ape"].value;
    var usu = document.forms["registerForm"]["usu"].value;
    var email = document.forms["registerForm"]["email"].value;
    var pas = document.forms["registerForm"]["pas"].value;
    var telefono = document.forms["registerForm"]["telefono"].value;
    var empresa = document.forms["registerForm"]["empresa"].value;
    var fecha = document.forms["registerForm"]["fecha"].value;

    if (nom === "" || ape === "" || usu === "" || email === "" || pas === "" || telefono === "" || empresa === "" || fecha === "") {
        alert("Por favor, completa todos los campos.");
        event.preventDefault();
        return false;
    }
    return true;
}
