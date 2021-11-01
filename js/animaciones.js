







$(".btn5").on("click", () => {

	
	class Producto {

   		constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
  	  }

	}


	let listaProductos;	

	if (localStorage.getItem("lista") == null) {
    	listaProductos = []	
	} else {
    	listaProductos = JSON.parse(localStorage.getItem("lista"))
	}

	const crearProducto = (nombre, categoria, precio, stock) => {
    const producto = new Producto(nombre, categoria, precio, stock)
    return producto
	}


    let ciclo = true;

            while (ciclo)
            {

                const nombre = prompt("ingrese nombre del producto");
                const categoria = prompt("ingrese categoria del producto");
                const precio = Number(prompt("ingrese precio del producto"));
                const stock = parseInt(prompt("Ingrese la cantidad de productos"))

                listaProductos.push(crearProducto(nombre, categoria, precio, stock))

                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm("Deseas agregar otro mas?")
            }
           
    })






//modificar css con jquery
let altura = "height"



 
//encadenar animaciones





//se puede concatenar delya t mas slides

$(".btn1").css("altura", "10px")
	.slideUp(1000)
	.slideDown(1000);

$(".btn2").css("altura", "10px")
	.slideUp(1000)
	.slideDown(1000);

$(".btn3").css("altura", "10px")
	.slideUp(1000)
	.slideDown(1000);

$(".btn4").css("altura", "10px")
	.slideUp(1000)
	.slideDown(1000);

$(".btn5").css("altura", "10px")
	.slideUp(1000)
	.slideDown(1000);

$("#carritoimg").animate({
	
	opacity: `0.9`,
	height: `80px`,
	width: `80px`,
	

},
1000,
function() {
	console.log("fin de animacion");
})


	
	
	
