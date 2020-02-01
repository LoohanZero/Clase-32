// Celsius a Fahrenheit

// Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit. (0 °C × 9/5) + 32 = 32 °F


let celsius = Number(prompt("Por favor, ingrese la cantidad de grados Celsius que desea convertir a Farenheit"));

let farenheit = (celsius * 9 / 5) + 32;


alert(`La cantidad de grados ingresada en Celsius de ${celsius} es equivalente a ${farenheit} grados Farenheit`);