let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}


let dato = prompt("ingresa tu categoria")
listaFiltrada = listaObjetos.filter(e => e.categoria === dato)


if (listaFiltrada.length != 0) {

    listaFiltrada.forEach(element => {

        let index = listaFiltrada.indexOf(element)
        imprimirDatos.innerHTML += `
        <div class="card border-success mb-3" style="max-width: 18rem;">
         <div class="card-header">${element.nombre}</div>
          <div class="card-body text-success">
            <h5 class="card-title">${element.categoria}</h5>
            
            <p class="card-text">$${element.precio}</p>
            <p class="card-text">Stock: ${element.stock}</p>
            <button class="card-link mb-2" onclick="comprar(${index})">Comprar</button>
          </div>
        </div>
        `

    });
} else {
    console.log("NO TENES NINGUN PRODUCTO CON ESA CATEGORIA");
}

const comprar = (index) => {

    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }


    carrito.push(listaObjetos[index])
    localStorage.setItem("carrito", JSON.stringify(carrito))
}



