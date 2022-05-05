/*
ARRAY + PUSH (opcion 1)
let carrito = []

let producto = prompt ("Ingrese productos a su carrito. Para finalizar escriba listo")

while (producto != "listo")
{
    carrito.push (producto);
    alert (carrito)
    producto = prompt ("Ingrese otro producto. Para finalizar escriba listo")
}
alert ("Este es su carrito de compras: ")
alert (carrito)

*/

// ARRAY  (opcion 2)

let productos = [
    { nombre: 'Televisor', precio: 2000 },
    { nombre: 'Celular', precio: 1800 },
    { nombre: 'Laptop', precio: 1600 },
];

// MAP + RETURN

const nombreProducto = productos.map(function (productos) { return productos.nombre; });
const precioProducto = productos.map(function (productos) { return productos.precio; }); 

alert("Usted tiene entre estos tres productos. " + nombreProducto);

let eleccion = prompt("Indique uno de los tres producto");

    if (eleccion == "televisor" ||  eleccion == "Televisor") {
        alert("Usted a seleccionado el televisor, su precio es de $" + precioProducto [0]);
    }

    else if (eleccion == "celular" || eleccion == "Celular") {
        alert("Usted a seleccionado el celular, su precio es de $" + precioProducto [1]);
    }

    else if (eleccion == "laptop" || eleccion == "Laptop") {
        alert("Usted a seleccionado la laptop, su precio es de $" + precioProducto [2]);
    }

    else { alert ("Muchas gracias!!!")}

 /*
    
//SIMULADOR + ARROW

const resta = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

let precio = prompt("Ingrese su monto para aplicar el descuento del 10%.")
let descuento = precio * 0.10;
let nuevoPrecio = resta(precio, descuento);

alert("El nuevo precio con el descuento aplicado es de $" + nuevoPrecio);

let cantidad = prompt("Ahora ingrese la cantidad de articulos")
let nuevoPrecio1 = multiplicar(nuevoPrecio, cantidad);

alert("El total es de $" + nuevoPrecio1)


//FORMULARIO

let miFormulario = document.getElementById("formulario");
let enviar = document.getElementById("enviar")

miFormulario.addEventListener("submit", function () {miFormulario.submit; (console.log ("ok"))})

*/
