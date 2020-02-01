// Múltiplos

// Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

let numero1 = Number(prompt("Ingrese un número"));
let numero2 = Number(prompt("Ingrese otro número"));

let multiplo = numero1 % numero2;

let resto = 
            multiplo === 0 && `el número ${numero1} es múltiplo del número ${numero2}` || 
            multiplo !== 0 && `el número ${numero1} NO es múltiplo del número ${numero2}`;

alert(resto);
