// Perímetro de un rectángulo

// Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

const base = Number(prompt("Ingresa el valor de la base del rectángulo"));
const altura = Number(prompt("Ingresa el valor de la altura del rectángulo"));

const perimetro = (base + altura) * 2;

alert(`El perímetro de un rectángulo de base ${base} y altura ${altura} es de ${perimetro}.`)