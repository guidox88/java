

let producto = Number(prompt("¿cuantos quieres comprar?"))
const precio1 = 250
let resultado = 0
let resultadoiva= 0
let iva = 1.21
let precio10 = 10
let resultadox10 = 0
const descuento = 1.10


	function calcularPrecio(producto, precio1){	
	resultado = producto * precio1;
	}

	function mostrar(mensaje){
		alert(mensaje);
	}
calcularPrecio(producto, precio1);
mostrar(`el precio sin iva es ${resultado}`);
	
	function precioMasIva(resultado,iva){
		resultadoiva = resultado * iva;
	}
	precioMasIva(resultado,iva);
	mostrar(`el precio con iva es ${resultadoiva}`);

	function precioX10(precio1,precio10){
	resultadox10 = precio1 * precio10;
	}
	precioX10(precio1,precio10);
	mostrar(`si queres 10 sale ${resultadox10} sin iva `);

	
function calculadora(precio1, producto, operacion) {
    switch (operacion) {
        case "*":
            return precio1 * producto;
            break;
      	case "/":
      		return resultado / descuento;
      		break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(precio1, producto, "*"));
let finaldesc =(calculadora( resultado, descuento, "/" ) ) ;
mostrar (`En efectivo pagas con descuento ${finaldesc} `)