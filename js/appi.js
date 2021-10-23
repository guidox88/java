
console.log(document.getElementById("zoom"));
console.log(document.getElementsByClassName("coder"));
console.log(document.getElementsByTagName("h1"));

console.log("- - - - - - - - -");

console.log($("h1"));
console.log($("#zoom"));
console.log($(".coder"));
 

console.log("- - - - - - - - -");



$("#btn").addEventListener("click", () => {
	console.log(document.getElementById("dato").value);
})


const elemento = document.createElement("p")
 elemento.textContent = "texto de create element"

 document.getElementById("print").appendChild(elemento)
