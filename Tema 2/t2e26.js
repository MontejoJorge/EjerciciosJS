
function saludar(nombre)
{
    if (arguments.length == 0)
        alert("Hola");
    for(let x = 0; x < arguments.length; x++)
        alert("Hola " + arguments[x]);
}

// llamadas
saludar();
saludar("Nieves");
saludar("Nieves", "Ruiz");


