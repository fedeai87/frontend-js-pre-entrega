let nombre = "Fede";
const PI = 3.14;

let numero = 12;
let numeroString = "20";

let booleano = true

console.log ("Resultado de numero + numeroString:", numero + numeroString);

console.log ("Resultado de numero + parseInt(numeroString):", numero + parseInt(numeroString));

console.log ("Resultado de numero - numeroString:", numero - numeroString)

let entradaInput = prompt("Ingrese su nombre:");

console.log("Ingresaste: ", entradaInput);

//Simil f-string para interpolar variables
alert(`Ingresaste: ${entradaInput}`);