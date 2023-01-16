/* creamos un array vacio que simulara la secciond e carrito de compras donde se podran visualizar los productos del carrito de compras. */
const productosCarrito = [];

/* Creamos una clase que nos ayudara a crear nuestros productos, esta simulacion solo para ver el funcionamiento de   las clases */
class Producto {
  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }

  /* Metodos que llamaremos mas abajo */
  obtenerEscritura() {
    return `el producto ingresado es ${this.nombre}`;
  }
  obtenerPrecio() {
    return `El precio ingresado es ${this.precio}`;
  }

  obtenerCategoria() {
    return ` La categoria ingresada es ${this.categoria}`;
  }
}
/*  creamos una funcion que  reciba los datos por parametros del usuario, esta simula como deberian capturar los datos que ingresa para el control de inventario */
function entradaDeDatos() {
  const nombre = prompt("ingresa el nombre del producto");
  const precio = parseInt(prompt("ingresa el precio del producto"));
  const categoria = prompt("Ingresa la categoria del producto");

  /*  Aqui instanciamos los productos que crearemos */
  const instanciaProducto = new Producto(nombre, precio, categoria);
  instanciaProducto.obtenerEscritura(),
    instanciaProducto.obtenerPrecio(),
    instanciaProducto.obtenerCategoria();

  /*  Agregamos los productos instanciados al carrito */
  productosCarrito.push(instanciaProducto);

  /*  preguntamos si desea agregar algo mas al carrito */
  if (confirm("deseas agregar otro producto al carrito??")) {
    entradaDeDatos();
  } else {
    /* Recorremos los productos que estan incluidos en el carrito y luego los mostramos por consola */
    for (let producto of productosCarrito) {
      console.log(`
    Productos en el Carrito:
    Producto: ${producto.nombre} 
    Precio Sin Iva: ${producto.precio}, 
    Categoria: ${producto.categoria} 
    `);
    }
  }
}

entradaDeDatos();
