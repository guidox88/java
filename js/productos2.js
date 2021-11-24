

//Funcion Crear Residente
//Return Object
class Producto {

	constructor ({
		nombre,
		sku,
		precio,
		stock,
		listaNegra = false ,
	})

	{
		this.nombre = nombre;
		this.sku = sku;
		this.precio = precio;
		this.stock = stock;
		this.listaNegra = listaNegra;
	}
}

let listaPersonas =[];



const crearProducto = () => {

	const producto = new Producto({
		nombre: document.getElementById("nombre").value,
		sku: document.getElementById("sku").value,
		precio: document.getElementById("precio").value,
		stock: document.getElementById("stock").value,
	})

 	let lista;
	if(localStorage.getItem("listaPersonas") != null){
		lista = JSON.parse(localStorage.getItem("listaPersonas")) 
		lista.push(producto)
		localStorage.setItem("listaPersonas",JSON.stringify(lista))

}
	listaPersonas.push(producto)
	return producto

}



//guardar datos
const guardaEnBaseDeDatos = () => {
 
 crearProducto()

 if(verificarStorage() != undefined) {

 	localStorage.setItem("listaPersonas", JSON.stringify(verificarStorage()))
 }else{
 	localStorage.setItem("listaPersonas", JSON.stringify(listaPersonas))
 }
	
}

//Verificar Storage
//Devuelve array
const verificarStorage = () => {

	let dato = [];
	if (localStorage.getItem("listaPersonas") != null){
		dato = JSON.parse(localStorage.getItem("listaPersonas"))
		return dato
	}		
	
}


//imprimir datos
const imprimirDatos = () => {
	

	verificarStorage().forEach(obj => {
		

		document.getElementById("tabla").innerHTML += `
		<div class="card border-danger p-1 m-1" style="max-width: 18rem;">
	      <div class="card-header">${obj.nombre}</div>
	      <div class="card-body text-success">
	       <h5 class="card-number">sku: ${obj.sku}</h5>  
	       <p class="card-text">precio: ${obj.precio}</p>
	       <p class="card-text">stock: ${obj.stock}</p>    
	        
		  </div>
   		</div>

		`

	});
 
}

const eliminarDeLaLista = (sku) => {

	let listaVieja = JSON.parse(localStorage.getItem("listaPersonas"))
	let listaNueva = listaVieja.filter(e => e.sku != sku)

	localStorage.setItem("listaPersonas", JSON.stringify(listaNueva))
	location.reload()



}

document.getElementById("btnSave").addEventListener("click", () => {
	
	guardaEnBaseDeDatos()

})

if (localStorage.getItem("listaPersonas") != null) {
imprimirDatos()

}

console.log(verificarStorage())
