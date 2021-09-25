let nombre = prompt("Escribe tu nombre")
console.log(nombre);
//Guido Negrisoli

let apellido = prompt("Escribe tu apellido")
console.log(apellido);

let edad = Number (prompt("Escribe tu edad"))
console.log(edad);

console.log(nombre + " " + apellido + " " + edad);



let hola = "hola"
let salida = (`${hola} ${nombre} ${apellido} `) //comillas invertidas alt + 96
let menor = "Sos menor no podes ingresar al sitio"
let mayor = "Sos mayor podes ingresar "
let mmayor = "Sos muy mayor para ingresar"
let admin = "sos admin"


 //alt + 60 <  alt + 62 >
	if(edad >= 18 && edad <= 49) {
		console.log("Sos mayor podes ingresar");
		alert(salida + mayor)
	}	
		else if(edad >= 50) {
			console.log("Sos muy mayor")
			alert(mmayor)
		}

		else{
			console.log("sos menor no podes ingresar");
			alert(menor)

		}
	if(nombre === "guido" && apellido === "negrisoli"){
		console.log("Sos Admin")
		alert(admin)
	}

let pass = Number(prompt("ingresa tu contraseña"))
let dato = Number(prompt("pone tu contraseña para ingresar"))
let intentos = 5

	while (dato != pass && intentos > 0) {
		alert(`La contraseña es incorrecta te quedan ${intentos} intentos`);
		intentos --
		dato = Number(prompt("ingresa nuevamente tu contraseña"))

		let validar = confirm("¿Quieres cambiar la contraseña?")

			if (validar) {
				let passVieja = prompt( "ingresa tu contraseña anterior")
				if(passVieja == pass){
					pass = Number(prompt("ingresa tu nueva contraseña"))
					alert("Atencion cambiastes tu contraseña");
					dato = prompt("ingresa tu nueva contraseña para poder ingresar")	
				}
			}		
		}

	
