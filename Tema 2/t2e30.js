class Persona{
    constructor(dni,nss,nombre,apellidos,fNacimiento,edad,casado,vehiculos)
    {
        this.dni = dni;
        this.nss = nss;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fNacimiento = fNacimiento;
        this.edad = edad;
        this.casado = casado;
        // Relación
        this.vehiculos=vehiculos;
    }
    casarse()
    {
        this.casado = true;
    }
    divorciarse()
    {
        this.casado = false;
    }
    cumplirAnos()
    {
        this.edad = edad +1;
    }
}

class Vehiculo{
    constructor(matricula, marca, modelo,color)
    {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        // Relación
        this.persona;
    }
}

aPersonas = [];
aVehiculos = [];
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
    let aVehiculosUnaPersona =[];
    do{
        let matricula = prompt("Teclea la matricula del vehiculo propiedad de "+ nombre);
        let modelo = prompt("Teclea el modelo del vehiculo propiedad de "+ nombre);
        let marca = prompt("Teclea la marca del vehiculo propiedad de "+ nombre);
        let color = prompt("Teclea el color del vehiculo propiedad de "+ nombre);
        aVehiculosUnaPersona.push(new Vehiculo(matricula,marca,modelo,color));
    }
    while(confirm("¿Tiene más vehiculos?"));
    aVehiculos = aVehiculos.concat(aVehiculosUnaPersona);

    // Crear objetos
    aPersonas.push(new Persona(dni,nss,nombre,apellidos,fecha,edad,casado,aVehiculosUnaPersona));
    aVehiculosUnaPersona.forEach(dato=>dato.persona = aPersonas[aPersonas.length - 1])
}
while (confirm("¿Hay más personas?"));

// Dni del propietario de un vehiculo a partir de la matricula del mismo.
let matricula = prompt("Teclea la matricula del vehículo");
let v = aVehiculos.find(vehiculo => vehiculo.matricula == matricula);

//let p = aPersonas.find(persona => persona.vehiculos.find(vehiculo => vehiculo == v))
alert(" El coche con matricula " + matricula + " es propiedad de la persona con dni " + v.persona.dni);

// Matriculas de todos los coches de un persona concreta.
let dni = prompt("Teclea un dni");
p = aPersonas.find(persona => persona.dni == dni);
alert("Matriculas de los coches de la persona con dni " + dni);
p.vehiculos.forEach(vehiculo => alert(vehiculo.matricula));

// Matriculas de los vehículos de las personas que estan solteras.
aSolteras = aPersonas.filter(persona => !persona.casado);
alert("Matriculas de los coches de las personas solteras");
aSolteras.forEach(persona=>persona.vehiculos.forEach(vehiculo => alert(vehiculo.matricula)));

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
