// Duración vuelo

// Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.



let destino = prompt("Ingrese el primer destino en el cual desea realizar una escala");
let duracion = Number(prompt("Ingrese cuánto tiempo tarda el vuelo"));

let duracionTotal = duracion;
let destinoFinal = destino;

destino = prompt("Ingrese el segundo destino en el cual desea realizar una escala");
duracion = Number(prompt("Ingrese cuánto tiempo tarda el vuelo"));

duracionTotal += duracion;
destinoFinal += `, ${destino}`;

destino = prompt("Ingrese el tercer destino en el cual desea realizar una escala");
duracion = Number(prompt("Ingrese cuánto tiempo tarda el vuelo"));

duracionTotal += duracion;
destinoFinal += ` y ${destino}`;

alert(`Su vuelo tendrá escalas en ${destinoFinal} y su vuelo durará ${duracionTotal} horas.`);

