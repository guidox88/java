


class Producto {
	constructor(nombre,descripcion,precio) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
	}
}

let lista =  [];

	lista.push(new Producto ("pan","salvado", 200))
	lista.push(new Producto ("pan","blanco", 300))

const agregarProducto = () => {

	let nombre = prompt("Nombre del producto");
	let descripcion =prompt("Descripcion del producto");
	let precio = Number(prompt("Precio del producto"));

	let producto = new Producto(nombre,descripcion,precio)
	lista.push(producto)
	
	}
agregarProducto()

lista.sort((a,b) => {


	if (a.precio > b.precio) {

		return 1
	}


	if (a.precio < b.precio) {

		return -1
	}

	return 0
})

console.log(lista)


lista.forEach(obj => {
	console.log(obj.nombre);
	console.log(obj.descripcion);
	console.log(obj.precio);

})


