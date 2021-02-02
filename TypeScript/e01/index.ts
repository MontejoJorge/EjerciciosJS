/// <reference path="index.d.ts" />
/// <reference path="Persona.ts" />
//@ts-ignore
$(document).ready(function () {
    //@ts-ignore
    var arrPersonas = [];
    $("#enviar").on("click", function(){
        //@ts-ignore
        var nombre = $("#nombre").val();
        var edad = $("#edad").val();
        var DNI = $("#DNI").val();
        var sexo = $("#sexo").val();
        var altura = $("#altura").val();
        var peso = $("#peso").val();
        var estadoCivil = $("#estado_civil").val();

        var persona = new Persona(nombre,edad,sexo,peso,altura,estadoCivil);
        console.log(persona);
        var imc = persona.calcularIMC();

        alert(imc);

        switch (imc){
            case -1: alert("Delgado")
                break;
            case 0: alert("Peso ideal")
                break;
            case 1: alert("Sobrepeso")
        }
        arrPersonas.push(persona);

    });
});