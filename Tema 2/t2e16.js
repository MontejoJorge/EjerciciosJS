var dni = prompt("DNI");

var num = parseInt(dni);

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

if (num < 0 || num > 99999999) {
    alert("El DNI debe tener 8 cifras");
} else {
    if (dni.substr(8, 1) == letras[num % 23]) {
        alert("El dni es correcto")
    } else {
        alert("El dni es incorrecto");
    }
}