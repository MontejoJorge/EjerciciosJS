var Mensaje = /** @class */ (function () {
    function Mensaje(texto) {
        this.texto = texto;
    }
    return Mensaje;
}());
var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, email, contraseña, sexo) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.sexo = sexo;
    }
    return Cuenta;
}());
var datos = JSON.parse(localStorage.getItem("datos"));
if (datos == null) {
    var cuenta1 = new Cuenta("Jorge Montejo", "jorgemon.lopez@gmail.com", "Jm12345", "hombre");
    cuenta1.mensajes = [new Mensaje("Mensaje 1"), new Mensaje("Mensaje 2")];
    localStorage.setItem("datos", JSON.stringify(cuenta1));
}
$(document).ready(function () {
    $("#crear").click(function () {
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var contraseña = $("#contraseña").val();
        var contraseña2 = $("#contraseña2").val();
        var generoFields = $("[name='gender']");
        for (var i = 0; i < generoFields.length; i++) {
            if (generoFields[i].checked) {
                var genero = generoFields[i].val();
                break;
            }
        }
        validaciones();
    });
});
