function validar() {
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    
    var expresionCorreo = /^[a-z][\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
    var esCorreoValido = expresionCorreo.test(correo);
    
    var esTelefonoValido = (telefono.length === 10) && (!isNaN(telefono));
    
    if (!esCorreoValido) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }
    
    if (!esTelefonoValido) {
        alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
        return false;
    }
    
    return true;
}

document.getElementById('submitBtn').addEventListener('click', function() {
    if (validar()) {
        this.disabled = true;
        this.textContent = "Enviando datos ........";
        document.forms['FormContacto'].submit();
    }
});
