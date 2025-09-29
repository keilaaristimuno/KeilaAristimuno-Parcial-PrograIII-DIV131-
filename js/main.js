//Array de objetos 
let productosTienda = 
[
{id:1, nombre:"anana", precio:1000, ruta_img:"../img/anana.jpg"},
{id:2, nombre:"arandano", precio:200, ruta_img:"../img/arandano.jpg"},
{id:3, nombre:"banana", precio:400, ruta_img:"../img/banana.jpg"},
{id:4, nombre:"frambuesa", precio:500, ruta_img:"../img/frambuesa.png"},
{id:5, nombre:"frutilla", precio:100, ruta_img:"../img/frutilla.jpg"},
{id:6, nombre:"kiwi", precio:350, ruta_img: "../img/kiwi.jpg"},
{id:7, nombre:"mandarina", precio:350, ruta_img: "../img/mandarina.jpg"},
{id:8, nombre:"manzana", precio:350, ruta_img: "../img/manzana.jpg"},
{id:9, nombre:"naranja", precio:350, ruta_img: "../img/naranja.jpg"},
{id:10, nombre:"pera", precio:350, ruta_img: "../img/pera.jpg"},
{id:11, nombre:"pomelo amarillo", precio:350, ruta_img: "../img/pomelo-amarillo.jpg"},
{id:12, nombre:"pomelo rojo", precio:350, ruta_img: "../img/pomelo-rojo.jpg"},
{id:13, nombre:"sandia", precio:350, ruta_img: "../img/sandia.jpg"},
]

let navAlumno = document.getElementById("navAlumno");
let listadoProductos = document.getElementById("listadoProductos");
let barraBusqueda = document.getElementById("barraBusqueda");
let frutasEnCarrito = document.getElementById("frutas");
let carrito = [];
let contadorCarrito = document.getElementById("contadorCarrito");
let totalPrecio = document.getElementById("totalPrecio");



// Ejercicio 2 _____________ 0.5 puntos
/*Modifica la función inicializadora init() para incluir una función que imprima tu nombre y apellido en el <nav> del HTML
y también en la consola.*/



let alumno = {
    dni : "42.492.739",
    nombre: "Keila",
    apellido: "Aristimuño"
}

function imprimirDatosAlumno(alumno){
    
    console.log(`Nombre: ${alumno.nombre}, Apellido: ${alumno.apellido}`);
    navAlumno.innerHTML = `<p>${alumno.nombre } ${alumno.apellido }</p>`
}



function init(){
    imprimirDatosAlumno(alumno);
    mostrarFrutas(productosTienda);
    crearCarrito();
    
}

init()


// Ejercicio 3 _____________ 1 punto
/*Implementa una función que imprima en pantalla los productos (frutas) del array de objetos. Agrega esta función dentro de
init() .
*/

function mostrarFrutas(array){
    cardProducto = ""; //necesario resetear los divs previos
    array.forEach(producto =>{
        cardProducto += `
            <div class="cardProducto">
                <img src="${producto.ruta_img}" alt="">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <button class="agregarAlCarrito" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div> 
            `;
        });
    listadoProductos.innerHTML = cardProducto;
}

// Ejercicio 4 _____________ 1 punto
/*Implementar una función de filtro, que se dispare al escribir en un campo input, filtrando los productos que coincidan con el
campo de texto.
*/

// funcion para filtrar los productos
barraBusqueda.addEventListener("keyup", function(){
    let valorDeBusqueda = barraBusqueda.value;
    let productosFiltrados = productosTienda.filter(pruducto => 
        pruducto.nombre.includes(valorDeBusqueda))
        mostrarFrutas(productosFiltrados);      
})

// Ejercicio 5 _____________ 2 puntos

function agregarAlCarrito(id){
    //me busca por id el agregar al producto 
    let productoSeleccionado = productosTienda.find(producto => producto.id == id);
    carrito.push(productoSeleccionado);
    console.log(carrito);
    mostrarCarrito() //se lo muestra al carrito
    guardarConLocalStorage();
}

//Muestra el carrito de frutas seleccionadas, llamo esta funcion en agregar al producto:
function mostrarCarrito(){
    cardCarrito = "";
    carrito.forEach((producto, indice) => {
        cardCarrito += `
        <li class = "bloqueItem">
            <p class = "nombreItem">${producto.nombre} - $ ${producto.precio}</p>
            <button class= "botonEliminar" onclick ="elimarProducto(${indice})">Eliminar</button>
        </li>
        `;
    });
    frutasEnCarrito.innerHTML = cardCarrito;
    crearContadorCarrito();
}

function elimarProducto(indice){
// el splice elimina el elemento y paso de donde hasta donde
    carrito.splice(indice,1);
    mostrarCarrito(); //lo muestra al usario
    guardarConLocalStorage();
}


//Ejercicio 6 _____________ 1 punto

/*
Almacena los productos del carrito en localStorage .
• Los productos en el localStorage deben estar además con los últimos cambios de carrito y los productos que se hayan
eliminado del carrito
• Si existen productos previamente en el localStorage, deben poder verse cuando se cargue la pagina
• Actualiza el precio del valor total del carrito abajo de todo a la derecha (cuando haya productos en el carrito)

*/
function guardarConLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function crearCarrito(){
    let guardar = localStorage.getItem("carrito"); //creo la variable guardar para usar con el carrito
    if(guardar != null){ //quiere decir que lo guarde
        carrito = JSON.parse(localStorage.getItem("carrito"));
        mostrarCarrito();
    }
};

// Ejercicio 7 _____________ 1 punto

/*
Implementa un contador de números de productos del carrito. Si hay 0 productos se eliminan del carrito.
• Actualiza la cantidad de productos en el header en la parte de Carrito: 0 productos
• Actualiza el precio del valor total del carrito abajo de todo a la derecha (cuando haya productos en el carrito)

*/

function crearContadorCarrito(){
    let totalVentas = carrito.length; //para que diga cuantas frutas tiene el carrito
    contadorCarrito.innerHTML = `<p>Carrito: ${totalVentas}</p>`
}

//creo la funcio que se encarga de dar el total del precio:
function totalCarritoPrecio (){
    let acumulador = 0; 
    
}