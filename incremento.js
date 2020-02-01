// Incremento

// Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).

let numeroInicial = Number(prompt("Ingrese un número"));
let numeroDePase = 1;

let numeroIncrementado = numeroInicial + 5;
let sumaDePases = numeroDePase ++;

alert(`Este es el mensaje número ${sumaDePases}, a su número incial se le han sumado 5 dando un total de ${numeroIncrementado}`);

numeroIncrementado += 5;
sumaDePases += 1;

alert(`Este es el mensaje número ${sumaDePases}, al número anterior se le han sumado 5 dando un total de ${numeroIncrementado}`);

numeroIncrementado += 5;
sumaDePases += 1;

alert(`Este es el mensaje número ${sumaDePases}, al número anterior se le han sumado 5 dando un total de ${numeroIncrementado}`);

numeroIncrementado += 5;
sumaDePases += 1;

alert(`Este es el mensaje número ${sumaDePases}, al número anterior se le han sumado 5 dando un total de ${numeroIncrementado}`);

numeroIncrementado += 5;
sumaDePases += 1;

alert(`Este es el mensaje número ${sumaDePases}, al número anterior se le han sumado 5 dando un total de ${numeroIncrementado}`);

