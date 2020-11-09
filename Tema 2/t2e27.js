

// Función con nombre
function solicitarSueldo()
{
    let error = true;
    do
    {
        try
        {
            // Variable global -- no return
            sueldo = parseInt(prompt("Teclea el sueldo actual"));
            if (isNaN(sueldo))
                throw "El sueldo debe ser un dato numérico";
            if (sueldo < 0)
                throw "El sueldo no puede ser un número negativo";
            error = false;
        }
        catch(err)
        {
            alert(err);
        }
    }
    while(error);
}

// Función anónima
let solicitarAnnos = function()
{
    let error = true;
    let annos = 0;
    do
    {
        try
        {
            annos = parseInt(prompt("Teclea los años trabajados"));
            if (isNaN(annos))
                throw "El dato debe ser un dato numérico";
            if (annos < 0)
                throw "El dato no puede ser un número negativo";
            error = false;
        }
        catch(err)
        {
            alert(err);
        }
    }
    while(error);
    return annos;
}

// Función flecha
let cambiarSueldo = (annos)=>{
    if (sueldo < 500)
        if (annos >= 10)
            sueldo = sueldo + sueldo * 0.2;
        else
            sueldo = sueldo + sueldo * 0.1;
}

// Programa
var sueldo = 0;

solicitarSueldo();

let annos = solicitarAnnos();

cambiarSueldo(annos);

alert(sueldo);

