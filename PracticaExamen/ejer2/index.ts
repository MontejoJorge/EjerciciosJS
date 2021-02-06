class Mensaje {
    texto: string;
    constructor(texto: string) {
        this.texto = texto;
    }
}
type Genero = "hombre" | "mujer";
class Cuenta {
    nombre: string;
    email: string;
    contraseña: string;
    sexo: Genero;
    mensajes: Mensaje[];
    constructor(nombre: string, email: string, contraseña: string, sexo: Genero) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.sexo = sexo;
    }
}
var datos: Cuenta = JSON.parse(localStorage.getItem("datos"));
if (datos==null){
    var cuenta1 = new Cuenta("Jorge Montejo", "jorgemon.lopez@gmail.com", "Jm12345", "hombre");
    cuenta1.mensajes = [new Mensaje("Mensaje 1"), new Mensaje("Mensaje 2")];
    localStorage.setItem("datos", JSON.stringify(cuenta1));
}

$(document).ready(function () {
    $("#crear").click(function () {
        var nombre: string = $("#nombre").val();
        var email: string = $("#email").val();
        var contraseña: string = $("#contraseña").val();
        var contraseña2: string = $("#contraseña2").val();
        var generoFields = $("[name='gender']");

        for (var i=0;i<generoFields.length;i++){
            if (generoFields[i].checked){
                var genero: Genero = generoFields[i].val();
                break;
            }
        }

        validaciones();

    });
});