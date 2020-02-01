// Cantidad de huéspedes

// Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

let habitacion = Number(prompt("Ingrese cuántas habitaciones de dos personas tiene el hotel"));

let huespedes = (habitacion * 2);

habitacion = Number(prompt("Ingrese cuántas habitaciones de tres personas tiene el hotel"));

huespedes = huespedes + (habitacion * 3);

habitacion = Number(prompt("Ingrese cuántas habitaciones de cuatro personas tiene el hotel"));

huespedes = huespedes + (habitacion * 4);

alert(`El hotel puede albergar una cantidad de ${huespedes} huespedes`);