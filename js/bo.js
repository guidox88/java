let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    alert("Carrito Vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaObjetos.forEach(element => {
    imprimirDatos.innerHTML += `

     <div class="card border-success mb-3" style="max-width: 18rem;">
      <div class="card-header">${element.nombre}</div>
      <div class="card-body text-success">
        <h5 class="card-title">${element.categoria}</h5>
        
        <p class="card-text">$${element.precio}</p>
    
      </div>
    </div>


    `
});
