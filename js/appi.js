
console.log(document.getElementById("zoom"));
console.log(document.getElementsByClassName("coder"));
console.log(document.getElementsByTagName("h1"));

console.log("- - - - - - - - -");

console.log($("h1"));
console.log($("#zoom"));
console.log($(".coder"));
 

console.log("- - - - - - - - -");

const elemento = document.createElement("p")
 elemento.textContent = "texto de create element"

 document.getElementById("print").appendChild(elemento)

$( document ).ready(function () {
    console.log(`el Dom esta listo`);
});



window.addEventListener(`load`, function ()  {
   console.log("LOAD");
});

$("#elemento");
/*
document.getElementById("elemento").addEventListener("click", () => {
    console.log("hola mundo");
});
java */

$("#elemento").on("click", ()=> {
    console.log("hola mundo2");
});
/*
$("#elemento").click(()=> {
    console.log("hola mundo2");
});
Reducida */

$("#btn").on("click", ()=> {
    console.log(document.getElementById("dato").value);
});

/*
$(`#btn`).addEventListener(`click`, () => {
	console.log(document.getElementById("dato").value);
});
java */


/* Agregar en el body desde aca...
$("body").prepend(`<button id="btn1">Button</button>`);
$("body").prepend(`<input id="ipt1" type="text">`);
*/

$("#ipt1").change((e) => {
    alert("El valor es" + " " + e.target.value );
});

$("#btn1").click(()=> {
    $("#ipt1").trigger("change");

});