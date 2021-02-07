/// <reference path="jquery-3.5.1.js" />
var Mensaje = /** @class */ (function () {
    function Mensaje(texto) {
        this.texto = texto;
    }
    return Mensaje;
}());
var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, email, contraseña, genero) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.genero = genero;
    }
    return Cuenta;
}());
var datos = JSON.parse(localStorage.getItem("datos"));
if (datos == null) {
    var cuenta1 = new Cuenta("Jorge Montejo", "jorgemon.lopez@gmail.com", "Jm12345", "hombre");
    cuenta1.mensajes = [new Mensaje("Mensaje 1"), new Mensaje("Mensaje 2")];
    var cuentas = [cuenta1];
    localStorage.setItem("datos", JSON.stringify(cuentas));
}
$(document).ready(function () {
    try {
        inicio();
    }
    catch (error) {
        alert(error);
    }
});
function inicio() {
    $("#loginForm").css("display", "none");
    $("#mensajes").css("display", "none");
    $("#crear").click(function () {
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var contraseña = $("#contraseña").val();
        var contraseña2 = $("#contraseña2").val();
        var genero = $("[name='gender']:checked").val();
        var validaciones = validar(nombre, email, contraseña, contraseña2, genero);
        if (validaciones != true) {
            alert(validaciones);
        }
        else {
            var datos = JSON.parse(localStorage.getItem("datos"));
            var cuenta = new Cuenta(nombre, email, contraseña, genero);
            datos.push(cuenta);
            localStorage.setItem("datos", JSON.stringify(datos));
        }
    });
    $("#login").click(function () {
        var email = $("#emailLogin").val();
        var contraseña = $("#contraseñaLogin").val();
        var datos = JSON.parse(localStorage.getItem("datos"));
        var encontrado = false;
        for (var i = 0; i < datos.length; i++) {
            if (datos[i].email == email && datos[i].contraseña == contraseña) {
                encontrado = true;
                setCookie("user", email, 100);
                cargarMensajes();
            }
        }
        if (!encontrado) {
            alert("Contraseña o email incorrecto");
        }
    });
    var crear = true;
    $("#form").click(function () {
        if (crear) {
            $("#crearCuenta").css("display", "none");
            $("#loginForm").css("display", "block");
            crear = false;
        }
        else {
            $("#crearCuenta").css("display", "block");
            $("#loginForm").css("display", "none");
            crear = true;
        }
    });
}
function cargarMensajes() {
    $("#mensajes").css("display", "block");
    var user = getCookie("user");
    var datos = JSON.parse(localStorage.getItem("datos"));
    $("#mensajesList").empty();
    for (var i = 0; i < datos.length; i++) {
        if (datos[i].email == user && datos[i].mensajes != null) {
            for (var a = 0; a < datos[i].mensajes.length; a++) {
                $("#mensajesList").append("<li>" + datos[i].mensajes[a].texto + "</li>");
            }
            break;
        }
    }
}
function validar(nombre, email, contraseña, contraseña2, genero) {
    var regNombre = new RegExp("^([A-z]){2,10}$");
    var regEmail = new RegExp('^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$');
    var regContraseña = new RegExp("([A-z0-9]){7,}");
    if (genero == null) {
        return "Porfavor selecciona tu genero";
    }
    if (!regContraseña.test(contraseña)) {
        return "La contraseña no es valida";
    }
    if (contraseña != contraseña2) {
        return "Las contraseñas no coinciden";
    }
    if (!regNombre.test(nombre)) {
        return "El nombre no es valido";
    }
    if (!regEmail.test(email)) {
        alert(email);
        return "El email no es valido";
    }
    var datos = JSON.parse(localStorage.getItem("datos"));
    for (var i = 0; i < datos.length; i++) {
        if (datos[i].email == email) {
            return "El email no esta disponible";
        }
    }
    return true;
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires;
}
function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i += 1) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1);
        if (c.indexOf(name) === 0)
            return c.substring(name.length, c.length);
    }
    return '';
}
