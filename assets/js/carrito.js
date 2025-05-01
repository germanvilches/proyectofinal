
//DOM
document.addEventListener('DOMContentLoaded', () => { 
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Adidas Camiseta Local Medellin 2025',
            precio: 329000,
            imagen: 'assets/img/st_ropa_c1',
            categoria: 'ropa'
        },
        {
            id: 2,
            nombre: 'Adidas Camiseta Colombia A Hombre',
            precio: 159900,
            imagen: 'assets/img/st_ropa_c2',
            categoria: 'ropa'
        },
        {
            id: 3,
            nombre: 'Nike Camiseta Gsw Es Logo1 Hombre',
            precio: 169000,
            imagen: 'assets/img/st_ropa_c3',
            categoria: 'ropa'
        },
        {
            id: 4,
            nombre: 'Under Armour Camisilla Live Sportstyle Tank Mujer Rosado',
            precio: 149000,
            imagen: 'assets/img/st_ropa_d1',
            categoria: 'ropa'
        },
        {
            id: 5,
            nombre: 'Nike Camiseta Pro Df 365 Mujer Azul',
            precio: 259000,
            imagen: 'assets/img/st_ropa_d2',
            categoria: 'ropa'
        },
        {
            id: 6,
            nombre: 'Nike Camiseta Sleeve Top Mujer',
            precio: 149000,
            imagen: 'assets/img/st_ropa_d3',
            categoria: 'ropa'
        },
        {
            id: 7,
            nombre: 'Fila Tenis Malik Hombre Azul',
            precio: 239000,
            imagen: 'assets/img/st_calzado_c1',
            categoria: 'calzado'
        },
        {
            id: 8,
            nombre: 'Under Armour Tenis Charged Edge Hombre Negro',
            precio: 379000,
            imagen: 'assets/img/st_calzado_c2',
            categoria: 'calzado'
        },   
        {
            id: 9,
            nombre: 'Adidas Tenis Barreda Hombre Negro',
            precio: 329000,
            imagen: 'assets/img/st_calzado_c3',
            categoria: 'calzado'
        },
        {
            id: 10,
            nombre: 'Skechers Tenis Bounder Gri-bla Niños Gris',
            precio: 159000,
            imagen: 'assets/img/st_calzado_n1',
            categoria: 'calzado'
        },
        {
            id: 11,
            nombre: 'Fila Tenis Ps Brendel Niños Negro',
            precio: 179000,
            imagen: 'assets/img/st_calzado_n2',
            categoria: 'calzado'
        },
        {
            id: 12,
            nombre: 'Skechers Tenis Microspec Advance Niños Naranja',
            precio: 139000,
            imagen: 'assets/img/st_calzado_n3',
            categoria: 'calzado'
        },
        {
            id: 13,
            nombre: 'Adidas Gorra De Beisbol New Logo Azu-bla Unisex Azul',
            precio: 89000,
            imagen: 'assets/img/st_acce_c1',
            categoria: 'accesorios'
        },
        {
            id: 14,
            nombre: 'Puma Gorra Ess Cat Bb Unisex Negro',
            precio: 79000,
            imagen: 'assets/img/st_acce_c2',
            categoria: 'accesorios'
        },
        {
            id: 15,
            nombre: 'Adidas Gorra Jff Bb Unisex Negro',
            precio: 139000,
            imagen: 'assets/img/st_acce_c3',
            categoria: 'accesorios'
        },
        {
            id: 16,
            nombre: 'Adidas Visera Run Visor Cc Unisex Negro',
            precio: 89000,
            imagen: 'assets/img/st_acce_d1',
            categoria: 'accesorios'
        },
        {
            id: 17,
            nombre: 'Nike Gorra Jordan Club Mujer Morado',
            precio: 99000,
            imagen: 'assets/img/st_acce_d2',
            categoria: 'accesorios'
        },
        {
            id: 18,
            nombre: 'Nike Gorra Df Club Unisex Azul',
            precio: 159000,
            imagen: 'assets/img/st_acce_d3',
            categoria: 'accesorios'
        }
    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;
    const filtroSelect = document.getElementById("filtro");

    // Funciones

    function renderizarProductos() {
        DOMitems.innerHTML = "";
        const filtro = filtroSelect.value;
        const productosFiltrados = baseDeDatos.filter(producto => 
            filtro === "todas" || producto.categoria === filtro
        );
        productosFiltrados.forEach((info) => {
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            const miNodoTitle = document.createElement('h6');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anadirProductoAlCarrito);
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }
// Obtén el contador del almacenamiento local
    let visitas = localStorage.getItem('contadorVisitas');
// Si no hay visitas almacenadas, inicializa a 0
    if (!visitas) {
        visitas = 0;
    }
// Incrementa el contador
    visitas++;
// Guarda el nuevo contador en el almacenamiento local
    localStorage.setItem('contadorVisitas', visitas);
// Muestra el contador en la página
    document.getElementById('contador').textContent = visitas;
    function anadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador'));
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }
    function handleCarritoValue(value) {
        const carritoContainer = document.getElementById("carrito-value");
        carritoContainer.textContent = `${value}`;
    }
    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }
    //borra carrito
    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
        handleCarritoValue(carrito.length);
    }
    //calcular el total
    function calcularTotal() {
        return carrito.reduce((total, item) => {
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }
    //vaciar todos los elementos del carrito
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
    }
    //guardar en local el carrito
    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }
    //cargar del local el carriro
    function cargarCarritoDeLocalStorage() {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            handleCarritoValue(carrito.length);
        }
    }
    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);
    filtroSelect.addEventListener('change', renderizarProductos);
    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});