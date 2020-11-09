var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var dias = [31,28,31,30,31,30,31,31,30,31,30,31];


var v = prompt("Introduce un numero");

var n = parseInt(v)-1;

if (n<12 || n>1) {
    alert(meses[n]+" "+dias[n])
} else {
    alert("El numero no es validos")
}