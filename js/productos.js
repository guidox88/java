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
    <div class="card border-dark text-dark bg-light mx-1 mb-1" style="max-width: 18rem;"
    <div class="card-body bg-light">
        <h5 class="card-title">${element.nombre}</h5>

        <h6 class="card-subtitle mb-2 text-muted"> ${element.categoria}</h6>

        <p class="card-text">$${element.precio}</p>
        <p class="card-text">Stock: ${element.stock}</p>
        <button class="card-link mb-2" onclick="comprar(${index})">Comprar</button>
    </div>
    </div>
    `
});



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