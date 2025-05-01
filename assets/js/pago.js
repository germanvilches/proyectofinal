const detallesPago = document.getElementById('detalles-pago');
const transporte = document.getElementById('transporte');

// Calcula el total con el costo del envío
function calcularTotalConEnvio() {
    const envio = parseFloat(transporte.value) || 0;
    const total = carrito.reduce((sum, item) => sum + (item.Precio || 0), 0);
    document.getElementById('total-con-envio').textContent = (total + envio).toFixed(2);
}

// Escuchar cambios en la agencia de transporte
transporte.addEventListener('change', calcularTotalConEnvio);

// Mostrar bancos para PSE y otros detalles según método de pago
document.addEventListener("DOMContentLoaded", function () {
    const metodoPagoRadios = document.querySelectorAll('input[name="metodoPago"]');
    const pseBancos = document.getElementById('pse-bancos');

    metodoPagoRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'pse') {
                pseBancos.style.display = 'block';
            } else {
                pseBancos.style.display = 'none';
            }

            // Limpia detalles anteriores
            detallesPago.innerHTML = '';

            if (this.value === 'credito' || this.value === 'debito') {
                detallesPago.innerHTML = `
                    <div class="mb-3">
                        <label for="numero-tarjeta" class="form-label">Número de Tarjeta</label>
                        <input type="text" class="form-control" id="numero-tarjeta" required>
                    </div>
                    <div class="mb-3">
                        <label for="nombre-titular" class="form-label">Nombre del Titular</label>
                        <input type="text" class="form-control" id="nombre-titular" required>
                    </div>
                    <div class="mb-3">
                        <label for="fecha-expiracion" class="form-label">Fecha de Expiración</label>
                        <input type="month" class="form-control" id="fecha-expiracion" required>
                    </div>
                    <div class="mb-3">
                        <label for="cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cvv" required>
                    </div>
                `;
            } else if (this.value === 'efectivo') {
                detallesPago.innerHTML = `<p class="text-muted">Pagarás al momento de la entrega.</p>`;
            } else if (this.value === 'pse') {
                detallesPago.innerHTML = `<p class="text-muted">Selecciona tu banco en la lista de abajo.</p>`;
            } else if (this.value === 'nequi' || this.value === 'daviplata') {
                detallesPago.innerHTML = `
                    <div class="mb-3">
                        <label for="numero-celular" class="form-label">Número de Celular</label>
                        <input type="tel" class="form-control" id="numero-celular" placeholder="Ej: 3001234567" required>
                    </div>
                `;
            }
        });
    });
});

// Al enviar el formulario de pago
document.getElementById('form-envio').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ ¡Pago realizado con éxito! Gracias por tu compra.');
    carrito = [];
    guardarCarrito();
    actualizarCarrito();
    this.reset();
    detallesPago.innerHTML = '';
    document.getElementById('total-con-envio').textContent = "0";
});