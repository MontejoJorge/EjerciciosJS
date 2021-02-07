/// <reference path="jquery-3.5.1.js" />
class Mensaje {
    texto: string;
    constructor(texto: string) {
        this.texto = texto;
    }
}
class Cuenta {
    nombre: string;
    email: string;
    contraseña: string;
    genero: string;
    mensajes: Mensaje[];
    constructor(nombre: string, email: string, contraseña: string, genero: string) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.genero = genero;
    }
}
var datos: Cuenta = JSON.parse(localStorage.getItem("datos"));
if (datos==null){
    var cuenta1 = new Cuenta("Jorge Montejo", "jorgemon.lopez@gmail.com", "Jm12345", "hombre");
    cuenta1.mensajes = [new Mensaje("Mensaje 1"), new Mensaje("Mensaje 2")];
    var cuentas: Cuenta[] = [cuenta1];
    localStorage.setItem("datos", JSON.stringify(cuentas));
}

$(document).ready(function () {
    try {
        inicio();
    } catch (error) {
        alert(error)
    }
});

function inicio(){
    $("#loginForm").css("display", "none");
    $("#mensajes").css("display", "none");
    $("#crear").click(function () {
        var nombre: string = $("#nombre").val();
        var email: string = $("#email").val();
        var contraseña: string = $("#contraseña").val();
        var contraseña2: string = $("#contraseña2").val();
        var genero: string = $("[name='gender']:checked").val();

        var validaciones = validar(nombre, email, contraseña, contraseña2, genero);
        if (validaciones!=true){
            alert(validaciones);
        } else {
            var datos = JSON.parse(localStorage.getItem("datos"));
            var cuenta: Cuenta = new Cuenta(nombre,email,contraseña,genero);
            datos.push(cuenta);
            localStorage.setItem("datos", JSON.stringify(datos));
        }
    });

    $("#login").click(function () { 
        var email: string = $("#emailLogin").val();
        var contraseña: string = $("#contraseñaLogin").val();

        var datos = JSON.parse(localStorage.getItem("datos"));
        
        var encontrado: boolean = false;
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].email == email && datos[i].contraseña == contraseña){
                encontrado = true;
                setCookie("user",email,100);
                cargarMensajes();
            }
        }

        if (!encontrado){
            alert("Contraseña o email incorrecto");
        }

    });
    
    var crear: boolean = true;
    $("#form").click(function () {
        if (crear){
            $("#crearCuenta").css("display", "none");
            $("#loginForm").css("display", "block");
            crear = false;
        } else {
            $("#crearCuenta").css("display", "block");
            $("#loginForm").css("display", "none");
            crear = true;
        }
    });

}

function cargarMensajes(){
    $("#mensajes").css("display", "block");
    var user = getCookie("user");
    var datos = JSON.parse(localStorage.getItem("datos"));

    $("#mensajesList").empty();
    for (let i = 0; i < datos.length ; i++) {
        if (datos[i].email==user && datos[i].mensajes!=null){
            for (let a = 0; a < datos[i].mensajes.length; a++) {
                $("#mensajesList").append("<li>"+datos[i].mensajes[a].texto+"</li>");
            }
            break;
        }     
    }
}

function validar(nombre: string, email: string, contraseña: string, contraseña2: string, genero: string){
    var regNombre = new RegExp("^([A-z]){2,10}$");
    var regEmail = new RegExp('^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$');
    var regContraseña = new RegExp("([A-z0-9]){7,}")

    if (genero==null) {
        return "Porfavor selecciona tu genero";
    }
    if (!regContraseña.test(contraseña)){
        return "La contraseña no es valida";
    }
    if (contraseña!=contraseña2){
        return "Las contraseñas no coinciden";
    }
    if (!regNombre.test(nombre)){
        return "El nombre no es valido";
    }
    if (!regEmail.test(email)){
        alert(email)
        return "El email no es valido";
    }
    var datos = JSON.parse(localStorage.getItem("datos"));
    for (var i = 0; i < datos.length; i++) {
        if (datos[i].email == email){
            return "El email no esta disponible";
        }
    }
    
    return true;
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires;
}
function getCookie(cname) {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return '';
}