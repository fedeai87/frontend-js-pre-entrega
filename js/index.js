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

let primerNumero = prompt("Ingrese un número: ");
let segundoNumero = prompt ("Ingrese otro número: ");
primerNumero = parseFloat(primerNumero);
segundoNumero = parseFloat(segundoNumero);
console.log("Suma: " + (primerNumero + segundoNumero));
console.log("Resta: " + (primerNumero - segundoNumero));
console.log("Multiplicación: " + (primerNumero * segundoNumero));
console.log("División: " + (primerNumero / segundoNumero));
console.log("Módulo: " + (primerNumero % segundoNumero));
isNaN(primerNumero, segundoNumero);