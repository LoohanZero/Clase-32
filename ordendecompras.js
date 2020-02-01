// Orden de compras

// Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.
const precio1 = 500;
const precio2 = 700;
const precio3 = 400;


let producto = Number(prompt("¿Cuánta cantidad de pares de zapatillas desea comprar?"));

costoTotal = producto * precio1;
let productoNombre = `${producto} pares de zapatillas`;

producto = Number(prompt("¿Cuánta cantidad de pares de zapatos desea comprar?"));

costoTotal += (producto * precio2);
productoNombre += `, ${producto} pares de zapatos`;

producto = Number(prompt("¿Cuánta cantidad de pares de ojotas desea comprar?"));

costoTotal += (producto * precio3);
productoNombre += ` y ${producto} pares de ojotas`;

let cuotas = prompt(`El costo total de la compra es de ${costoTotal} pesos. ¿En cuántas cuotas desea realizar el pago?`);

costoCuotas = costoTotal / cuotas;

alert(`Usted ha realizado la compra de ${productoNombre} por un total de ${costoTotal} pesos a pagar en ${cuotas} cuotas de ${costoCuotas} pesos.`)