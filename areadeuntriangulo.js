// Área de un triangulo

// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

const base = Number(prompt("Ingrese el valor de la base"));
const altura = Number(prompt("Ingrese el valor de la altura"));

const area = (base * altura) / 2;

alert(`El área de un triángulo de base ${base} y altura ${altura} es de ${area}.`);