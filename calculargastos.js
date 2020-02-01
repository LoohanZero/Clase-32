// Calculador gastos

// Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.


let dineroDisponible = Number(prompt("Ingrese cuánto dinero posee"));

let sumaServicio = 3;


let servicioAPagar = prompt(`Quedan por abonar ${sumaServicio} de 3 servicios, ¿qué servicio desea abonar? 
Quedan disponibles ${dineroDisponible} pesos.`)

let montoAPagar = Number(prompt("Ingrese qué monto del servicio desea abonar"));

let numeroServicio = 0 * servicioAPagar.length + 1;

dineroDisponible -= montoAPagar; 
let servicioPagado = servicioAPagar;
let montoGastado = montoAPagar;
sumaServicio -= numeroServicio;


servicioAPagar = prompt(`Quedan por abonar ${sumaServicio} de 3 servicios, ¿qué servicio desea abonar? 
Quedan disponibles ${dineroDisponible} pesos.`)

montoAPagar = Number(prompt("Ingrese qué monto del servicio desea abonar"));


dineroDisponible -= montoAPagar;
servicioPagado += `, ${servicioAPagar}`;
numeroServicio = 0 * servicioAPagar.length + 1;
montoGastado += `, ${montoAPagar}`;
sumaServicio -= numeroServicio;



servicioAPagar = prompt(`Quedan por abonar ${sumaServicio} de 3 servicios, ¿qué servicio desea abonar? 
Quedan disponibles ${dineroDisponible} pesos.`)

montoAPagar = Number(prompt("Ingrese qué monto del servicio desea abonar"));

dineroDisponible -= montoAPagar;
servicioPagado += ` y ${servicioAPagar}`;
numeroServicio = 0 * servicioAPagar.length + 1;
montoGastado += ` y ${montoAPagar}`;
sumaServicio -= numeroServicio;


alert(`Usted tiene ${sumaServicio} de 3 servicios por abonar, su dinero disponible es de ${dineroDisponible}. Usted ha abonado los siguientes servicios ${servicioPagado} cuyos valores han sido ${montoGastado} respectivamente.`)