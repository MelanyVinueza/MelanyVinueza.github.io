document.addEventListener('DOMContentLoaded', function () {
    const entregaPropietarioCheckbox = document.getElementById('entregaPropietario');
    const entregaTerceroCheckbox = document.getElementById('entregaTercero');
    const paso2 = document.getElementById('paso2');
    const btnSiguiente = document.getElementById('btnSiguiente');
    const btnGuardar = document.getElementById('btnEnviar');

    // Habilitar/deshabilitar botón ENVIAR DATOS en el paso 1
    entregaPropietarioCheckbox.addEventListener('change', function () {
        btnSiguiente.disabled = !this.checked;
        btnGuardar.disabled = !this.checked;
    });

    // Mostrar/ocultar paso 2 al cambiar el estado del checkbox Entrega a un Tercero
    entregaTerceroCheckbox.addEventListener('change', function () {
        paso2.style.display = this.checked ? 'block' : 'none';
    });

    // Al hacer clic en el botón ENVIAR DATOS, mostrar paso 2 si Entrega a un Tercero está marcado
    btnSiguiente.addEventListener('click', function () {
        if (entregaTerceroCheckbox.checked) {
            paso2.style.display = 'block';
        }
    });
});
