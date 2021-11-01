class User {

    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}


class Producto {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.aapellido = apellido;
        this.edad = edad;
        
    }

}


const guido = new User("guido", "nofx")



let listaProductos;

if (localStorage.getItem("listac") == null) {
    listaProductos = []
} else {
    listaProductos = JSON.parse(localStorage.getItem("listac"))
}




const crearProducto = (nombre, apellido, edad) => {
    const producto = new Producto(nombre, apellido, edad)
    return producto
}


const confirmacionDeAcceso = () => {

    let bucle = true

    while (bucle) {

        const nombre = prompt("Ingresa tu nombre");
        const pass = prompt("Ingresa tu pass");

        if (nombre === guido.nombre && pass === guido.pass) {
            bucle = false

            let ciclo = true;

            while (ciclo) {

                const nombre = prompt("ingrese nombre del producto");
                const apellido = prompt("ingrese categoria del producto");
                const edad = Number(prompt("ingrese precio del producto"));
       

                listaProductos.push(crearProducto(nombre, apellido, edad))

                localStorage.setItem("listac", JSON.stringify(listaProductos))

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
let imprimirDatos = document.getElementById("productosPrinta")

if (localStorage.getItem("listac") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("listac"))
}

listaObjetos.forEach(element => {

    let index = listaObjetos.indexOf(element)

    imprimirDatos.innerHTML += `
    <div class="card border-danger p-1 m-1" style="max-width: 18rem;">
      <div class="card-header">${element.nombre}</div>
      <div class="card-body text-success">
        <h5 class="card-title">${element.apellido}</h5>  
        <p class="card-text">$${element.edad}</p>
        
      </div>
    </div>
  `
});

