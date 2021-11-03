const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

$("#busqueda").prepend(`<button id = "btn"> Mostrar </button>`);

$("#btn").click(() => {
	$.get(url, (respuesta, estado) => {
		if (estado == "success"){

			

			console.log(respuesta[0])
   
			$("#respuesta").prepend(`
				
				<p> Compra: ${respuesta[0].casa.compra} </p>`)
			$("#respuesta").prepend(`<p> Venta: ${respuesta[0].casa.venta} </p>`)
			$("#respuesta").prepend(`<p> ${respuesta[0].casa.nombre} </p>`)
		}

	})
})
