// Días de vacaciones

// Crear un programa que pida al usuario ingresar cuántos años lleva trabajando en una empresa, y le devuelva la cantidad de días de vacaciones al año que le corresponden, siendo 15 días hasta 3 años y 2 días más por cada año extra (p. ej.: a 6 años corresponden 21 días).

let aniosTrabajados = Number(prompt("Ingrese cuántos años trabajados tiene en su empresa"));

let diasExtra = (aniosTrabajados - 3) * 2 + 15;

let vacaciones = aniosTrabajados < 3 && "Le corresponden 15 días de vacaciones" ||
                 aniosTrabajados > 3 && `Le corresponden ${diasExtra} días de vacaciones`;

alert(vacaciones);