let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    alert("Carrito Vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
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
     
        <button onclick="eliminarDeLaLista(${element.nombre})"> Eliminar </button>
        
        </div>
      </div>
    </div>
  `
    
     
    
});



const finalizarCompra = () => {

    let monto = 0

    listaObjetos.forEach(e => {
        monto += e.precio
    })

    alert("Felicitaciones, tu compra fue aprobada, gastaste " + monto);
    localStorage.removeItem("carrito")
}

btn.addEventListener("click", () => {
    finalizarCompra()
})
 


