// Tiempo de viaje

// Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).


const distancia = Number(prompt("Por favor, ingrese la distancia que desea recorrer en km."));

const aPie = distancia / 5;
const enBici = distancia / 10;
const enAuto = distancia / 100;


alert(`Los ${distancia} kilómetros que deseas recorrer te llevarán: 

- A pie ${aPie} horas.
- En bicicleta ${enBici} horas.
- En auto ${enAuto} horas.`)