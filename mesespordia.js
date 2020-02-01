/*Meses por día

Crear variables que contengan arrays de strings con los nombres de meses, un array para meses de 31 días, uno para de 30, y otro para 29. Completar cada array con los nombres correspondientes. Mostrarlos en un mensaje indicando cuál es cuál, p.ej: "Meses con 31 días: Enero, Marzo, Mayo...".*/

const meses30 = ["enero", " marzo", " mayo", " julio", " agosto", " octubre", " diciembre"];
const meses31 = ["abril", " junio", " septiembre", " noviembre"];
const meses29 = ["febrero"];

alert(`Los meses con 31 días son: ${meses31}. 
Los meses con 30 días son: ${meses30}.
El mes con 29 días es: ${meses29}.`)