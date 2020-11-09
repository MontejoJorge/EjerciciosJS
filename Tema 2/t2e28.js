// Validar un dni 
try
{
    let dni = prompt("Dame un dni con el siguiente formato 00000000A:").toUpperCase();
    regDni = new RegExp("^[0-9]{8}([A-H]|[J-N]|[P-T]|[V-Z])$");
    if (regDni.test(dni)) 
    {
        validarLetra(dni);
    } 
    else
    {
       throw "El formato del dni no es correcto";
    }
}
catch(err)
{
    alert(err);
}

function validarLetra(dni)
{
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Separación
    let letra = dni.charAt(8);
    let numeroDni = parseInt(dni.substring(0,8));
    // Comprobación
    const DIVISOR = 23;
    let resto = numeroDni % DIVISOR;
    if (letra === letras[resto])
        alert("Dni correcto");
    else
        throw "Letra incorrecta";
}

// Validar un nombre
try
{
    let nombre = prompt("Dame un nombre:");
    let regNombre = new RegExp("^[A-Z][a-z]+([ ][A-Z][a-z]+)*$");
    if (regNombre.test(nombre))
        throw"El formato del nombre es correcto";
    else 
        throw "El formato del nombre no es correcto";
}
catch(err)
{
    alert(err)
}
finally{
    alert("Fin de la validación del nombre");
}
//Validar una url 
url = prompt("Dame una url:");
/*regUrl = new RegExp(
"^(http:\/\/\.|https:\/\/\.)?(www.)?[a-z0-9]+([\-\.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");*/
regUrl = new RegExp("^(http)[s]?(:www.)[A-Za-z0-9]+[.][A-Za-z]{2,3}$")
if (regUrl.test(url)) {
alert("El formato de la url es correcto");
} else {
alert("El formato de la url no es correcto");
}


// Validar una IP ------------------

ip = prompt("Dame una ip:");
/*regIp = new RegExp(
"^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$");*/
regIp = new RegExp("^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$");
if (regIp.test(ip)) {
alert("El formato de la ip es correcto");
} else {
alert("El formato de la ip no es correcto");
}

// Poner en mayúsculas todas las vocales de un string

frase = prompt("Escribe una frase");
regFrase = new RegExp("[A-Z]");
frase = frase.replace(/[a-z]/g, function (x) {
    return x.toUpperCase();
    });
alert(frase);