
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

$("#elemento").on("click", ()=> {
    console.log("hola mundo2");
});


$("#btna").on("click", ()=> {
    console.log(document.getElementById("datoa").value);
    
});



$("#btnb").on("click", ()=> {
    console.log(document.getElementById("datob").value);
});

$("#ipt1").change((e) => {
    alert("El valor es" + " " + e.target.value );
});

$("#btn1").click(()=> {
    $("#ipt1").trigger("change");

});

