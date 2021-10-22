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

    <div class="card border-success p-1 m-1 " style="max-width: 18rem;">
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