// Segundos a horas, minutos y segundos

// Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)


let segundosAConvertir = Number(prompt("Ingrese la cantidad de segundos que desea convertir"));

let minutos = segundosAConvertir / 60;
let restoSegundos = segundosAConvertir % 60;

let minutosFinales = (segundosAConvertir - restoSegundos) / 60;




alert(`Los ${segundosAConvertir} segundos ingresados son equivalentes a ${minutosFinales} minutos con ${restoSegundos} segundos`);