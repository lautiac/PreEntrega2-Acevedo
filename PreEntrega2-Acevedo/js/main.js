class Producto{
    constructor(nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio = Number(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.stock = true;
    }
    sumarIva(){
        return this.precio * 1.22;
    }
    vender(){
        this.stock = false;
    }
    precioSugerido(){
        return this.precio * 1.22 * 1.25;
    }
}

let arrayProductos = [];

do{
    let comprobacion = prompt("Ingrese el nombre del producto que desee agregar.");
    if (comprobacion === "fin"){
    break;
}else{
    nombreProducto = comprobacion;
    let precioProducto = prompt("Ingrese el precio del producto");
    let detalleProducto = prompt("Ingrese el detalle del producto");
    let cantidadProducto = prompt("Ingrese la cantidad comprada de dicho producto");
    arrayProductos.push(new Producto(nombreProducto, precioProducto, detalleProducto, cantidadProducto));
    }
}
while(comprobacion != "fin")
console.log(arrayProductos)

for(let producto of arrayProductos){
    document.write("<ul><li><h4>Nombre: " + producto.nombre + "</li></h4>");
    document.write("<li><h4>Detalle: " + producto.detalle + "</li></h4>");
    document.write("<li><h4>Cantidad: " + producto.cantidad + "</li></h4>");
    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.sumarIva());
}

let noStock = arrayProductos.map(producto => producto.cantidad === 0 || producto.stock === false);
console.log(noStock);
document.write("<h3>Producto sin stock</h3>");

for(let producto of noStock){
    document.write("<ul><li><h4>Nombre: " + producto.nombre + "</li></h4>");
    document.write("<li><h4>Detalle: " + producto.detalle + "</li></h4>");
    document.write("<li><h4>Cantidad: " + producto.cantidad + "</li></h4>");
}



