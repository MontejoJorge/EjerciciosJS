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
        this.persona = null;
    }
}

class Coche extends Vehiculo{}

class Moto extends Vehiculo{}

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
        let tipo = confirm("¿ Es un coche?");
        if (tipo)
            aVehiculosUnaPersona.push(new Coche(matricula,marca,modelo,color));
        else
            aVehiculosUnaPersona.push(new Moto(matricula,marca,modelo,color));
        //alert(aVehiculosUnaPersona[aVehiculosUnaPersona.length -1] instanceof Moto);
    }
    while(confirm("¿Tiene más vehiculos?"));
    aVehiculos = aVehiculos.concat(aVehiculosUnaPersona);

    // Crear objetos
    aPersonas.push(new Persona(dni,nss,nombre,apellidos,fecha,edad,casado,aVehiculosUnaPersona));
    aVehiculosUnaPersona.forEach(dato=>dato.persona = aPersonas[aPersonas.length - 1])
}
while (confirm("¿Hay más personas?"));

// Personas solteras con moto
let personasSolteras = aPersonas.filter(persona => !persona.casado);
alert("Nombre de las personas solteras que tiene motos");
let solterasConMoto = personasSolteras.forEach(persona => {
       let motoEncontrada = false;
       for(let x = 0; !motoEncontrada && x < persona.vehiculos.length; x++)
       {
           if (persona.vehiculos[x] instanceof Moto)
           {
                motoEncontrada = true;
                alert(persona.nombre);
           }
       }
    });



// Nombre de la persona que más coches tiene.
let maximo = 0;
let posicionMaximo = 0;
for(x in aPersonas)
{
    let contador = 0;
    for ( let y in aPersonas[x].vehiculos)
    {
        if (aPersonas[x].vehiculos[y] instanceof Coche)
            contador++;
    }
    if (contador > maximo)
    {
        maximo = contador;
        posicionMaximo = x;
    }
}
alert("La persona con más coches es " + aPersonas[posicionMaximo].nombre);