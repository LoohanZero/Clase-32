// Porcentaje

// Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.


const numero = Number(prompt("Por favor ingrese un número"));
const porcentaje = Number(prompt("Por favor ingrese el porcentaje que desea calcular de ese número"));

const resultado = numero * porcentaje / 100;

alert(`El ${porcentaje}% del número ${numero} equivale a ${resultado}.`);