class User {

    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}


class Producto {

    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
        this.img = "../media/img/aliomentoa.jpg"
    }

}


const guido = new User("guido", "nofx")



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


const confirmacionDeAcceso = () => {

    let bucle = true

    while (bucle) {

        const nombre = prompt("Ingresa tu nombre");
        const pass = prompt("Ingresa tu pass")

        if (nombre === guido.nombre && pass === guido.pass) {
            bucle = false

            let ciclo = true;

            while (ciclo) {

                const nombre = prompt("ingrese nombre del producto");
                const categoria = prompt("ingrese categoria del producto");
                const precio = Number(prompt("ingrese precio del producto"));
                const stock = parseInt(prompt("Ingrese la cantidad de productos"))

                listaProductos.push(crearProducto(nombre, categoria, precio, stock))

                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm("Deseas agregar otro mas?")
            }

            break;
        } else {
            alert("USUARIO INCORRECTO");
        }

    }

}

confirmacionDeAcceso()


let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {

    let index = listaObjetos.indexOf(element)

    imprimirDatos.innerHTML += `
    <div class="card border-success p-1 m-1 conteiner-fluid row" style="max-width: 18rem;">
      <div class="card-header">${element.nombre}</div>
     
      <div>
        <img class="w-100" src="../media/img/alimentoa.jpg">
      </div>

     <div>
      <div text-success">
        <h5 class="card-title">${element.categoria}</h5>  
        <p class="card-text">$${element.precio}</p>
        <p class="card-text">Stock: ${element.stock}</p>
      </div>
       <div class = "text-center">   
        <button class="card-link mb-2" onclick="comprar(${index})">Comprar</button>
        <button onclick="eliminarDeLaLista(${element.nombre})"> Eliminar </button>
        
        </div>
      </div>
    </div>
  `
});

const eliminarDeLaLista = (nombre) => {

    let listaVieja = JSON.parse(localStorage.getItem("listaObjetos"))
    let listaNueva = listaVieja.filter(e => e.index != index)

    localStorage.setItem("listaObjetos", JSON.stringify(listaNueva))
    location.reload()



}
