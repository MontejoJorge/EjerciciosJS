function Persona(dni,nss,nombre,apellidos,fNacimiento,edad,casado)
{
    this.dni = dni;
    this.nss = nss;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fNacimiento = fNacimiento;
    this.edad = edad;
    this.casado = casado;

    this.casarse = function()
    {
        this.casado = true;
    }
    this.divorciarse = function()
    {
        this.casado = false;
    }
    this.cumplirAnos=function()
    {
        this.edad = edad +1;
    }
}

// Crear objetos a partir de datos de entrada y guardarlos en un array
aPersonas = [];
do
{
    let dni = prompt("Teclea el dni de la persona");
    let nss = prompt("Teclea el número de la seguridad social");
    let nombre = prompt("Teclea el nombre de la persona");
    let apellidos = prompt("Teclea el apellidos de la persona");
    let fecha = prompt("Teclea la fecha de nacimiento");
    fecha = new Date(fecha);
    let edad= calcularEdad(fecha);
    let casado=confirm("¿Estás casado o casada?");

    // Crear objetos
    aPersonas.push(new Persona(dni,nss,nombre,apellidos,fecha,edad,casado));
}
while (confirm("¿Hay más personas?"));

// Nombre de la persona más joven
// ordeno de mayor a menor.
let aOrdenado = aPersonas.sort(function (a, b) {
  if (a.fNacimiento.getTime() > b.fNacimiento.getTime()) {
    return 1;
  }
  if (a.fNacimiento.getTime() < b.fNacimiento.getTime()) {
    return -1;
  }
  // a igual a b
  return 0;
});
alert("La persona más joven es " + aOrdenado[aOrdenado.length - 1].nombre);

// Número de personas casadas 
let aPersonasCasadas = aPersonas.filter(dato => dato.casado);
alert("Hay " + aPersonasCasadas.length + " personas casadas");

// Número de personas cuyo número de la seguridad social acaba en 98.
let anss = aPersonas.filter(dato => {
     reg = new RegExp("98$");
     return reg.test(dato.nss);
});
alert("Hay " + anss.length + " personas con número de la seguridad social acabado en 98");

function calcularEdad(fecha)
{
   
    let fechaHoy = new Date();
    let edad = fechaHoy.getFullYear() - fecha.getFullYear();
    // alert(fechaHoy.getMonth() + " " + fecha.getMonth());
    if((fechaHoy.getMonth()) < fecha.getMonth())
    {
       edad = edad - 1;
    }
    else
        if ((fechaHoy.getMonth()) == fecha.getMonth())
        {
            if (fechaHoy.getDate()<fecha.getDate())
                edad = edad -1;
        }
    return edad;
}
