let cadena = prompt("Teclea una cadena de caracteres");

// Indicar si está en mayúsculas, minusculas o ambas
if ( cadena === cadena.toUpperCase())
    alert("La cadena está en mayúsculas");
else
    if (cadena === cadena.toLowerCase())
        alert("La cadena está en minusculas");
    else
        alert("La cadena tiene letras en mayúsculas y en minusculas");

let expregMayus = new RegExp("^[A-Z ]+$");
let expregMinus = new RegExp("^[a-z ]+$");
if (expregMayus.test(cadena))
    alert("La cadena está en mayúsculas");
else
    if (expregMinus.test(cadena))
        alert("La cadena está en minusculas");
    else
        alert("La cadena tiene letras en mayúsculas y en minusculas");

// Comprobar si hay una subcadena
let subcadena = prompt("Teclea la subcadena a buscar");
if (cadena.includes(subcadena))
    alert("La subcadena está contenida en la cadena principal");
else
    alert("La subcadena no está contenida en la cadena principal");

// Convertir en un array. Cada letra una posición
let array = cadena.split('');
alert(array);

// Convertir en un array. Cada palabra una posición
let array2 = cadena.split(" ");
alert(array2);

// Sustituir todas las v por b 
// replace('v','b') Solo cambia la primera v.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/replace
//  gi. Esto significa que la búsqueda es global, es decir, busca todas las coincidencias que puedan existir a lo largo de toda la cadena (modificador g) y que no es sensible a mayúsculas (modificador i).
var re = /v/gi;
cadena = cadena.replace(re,'b');
alert(cadena);

// Añadir puntos hasta que la longitud sea 20
if (cadena.length < 20)
{
    for(let x = cadena.length; x < 20 ; x++)
        cadena = cadena.concat('.');
    alert(cadena);
}

