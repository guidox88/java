

const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

setInterval(() => {
$.get(url, (data, est) =>{
  document.getElementById("dolar").innerHTML = ""
	if(est == "success"){
		//console.log(data)
		console.log("DOLAR ACTUALIZADO")

		data.forEach(element => {
			document.getElementById("dolar").innerHTML +=	`
				<div class="col-3">
					<p>${element.casa.nombre}</p>
					<p class="text-danger">${element.casa.compra}</p>
					<p class="text-success">${element.casa.venta}</p>
				</div>	


			`

			;
		});
	}
})

},3000)

