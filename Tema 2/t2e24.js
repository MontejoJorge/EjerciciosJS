let hoy = new Date();
//let diaNavidad = new Date (hoy.getFullYear(),11,25)
let diaNavidad = new Date ("2020/12/25");

let milisegundos = diaNavidad.getTime() - hoy.getTime();
let dias = milisegundos / (24 * 60 * 60 * 1000);

alert("Faltan " + parseInt(dias) + " dias para navidad");