


class Vendedor {
	constructor(nombre,apellido,edad,alimentacion){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.alimentacion = alimentacion;
	}
}


	let nombre = prompt("Escribe tu nombre")
console.log(nombre)

let apellido = prompt("Escribe tu apellido")
console.log(apellido)

let edad = prompt("Escribe tu edad")
console.log(edad)

let alimentacion = prompt("Escribe tu preferencia de alimentacion")
console.log(alimentacion)

const vendedor = new Vendedor(nombre,apellido,edad,alimentacion);


class Productos {
	constructor(nombreProd,tipoDeAlimento,precio){
		this.nombreProd = nombreProd;
		this.tipoDeAlimento = tipoDeAlimento;
		this.precio = precio;
		

	}
}

let nombreProd = prompt("Escribe nombre de tu producto")
console.log(nombreProd)

let tipoDeAlimento = prompt("Escribe el tipo de alimento")
console.log(tipoDeAlimento)

let precio = prompt("Escribe precio")
console.log(precio)

const productos = new Productos(nombreProd,tipoDeAlimento,precio);
