cumple = new Date(prompt("Fecha yyyy/mm/dd"));

hoy = new Date();

c = new Date (hoy-cumple)

let años = c / 31536000000; 

años = parseInt(años);

alert(años)