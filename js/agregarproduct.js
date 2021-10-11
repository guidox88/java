
console.log(document.querySelector("#unico"))

document.getElementById("unico").textContent = "Agrega un nuevo producto"

document.getElementById("unico").style.color = "red"



 const h2 = document.createElement("h2")
 h2.setAttribute("id", "elementoAgregado")
 h2.textContent = "Productos nuevos"

 document.getElementById("aca").appendChild(h2)

 document.getElementById("elementoAgregado", "h2").style.color = "red"

 console.log(h2)


 class Produ {
 	constructor({nombre, descripcion, precio}){
 		this.nombre = nombre;
 		this.descripcion = descripcion;
 		this.precio = precio;
 	}
 } 

 const guardarDatos = () => {

 	const pro = new Produ (
 	{	
 		nombre : document.getElementById("nombre").value,
 		descripcion : document.getElementById("descripcion").value,
 		precio : document.getElementById("precio").value,

 	}
 )
 	const productoP = document.createElement("div")

 	const producto = document.createElement("h2")
 	producto.textContent = pro.nombre
 	productoP.appendChild(producto)

 	const producto2 = document.createElement("p")
 	producto2.textContent = pro.descripcion
 	productoP.appendChild(producto2)

 	const producto3 = document.createElement("p")
 	producto3.textContent = pro.precio
 	productoP.appendChild(producto3)


 	document.getElementById("aca").appendChild(productoP)

 	return pro
 }

 	document.getElementById("btn").addEventListener("click", () => {
 		guardarDatos()
 	})



