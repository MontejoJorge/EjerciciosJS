var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
var Proyecto = /** @class */ (function () {
    function Proyecto(usuario, proyecto) {
        this.usuario = usuario;
        this.proyecto = proyecto;
    }
    return Proyecto;
}());
var user1 = new User("jorge", "Jm12345");
var usuarios = [user1];
var storage = localStorage.getItem("users");
if (storage == null) {
    localStorage.setItem('users', JSON.stringify(usuarios));
}
$(document).ready(function () {
    $("#proyectos").css("display", "none");
    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].username == username && usuarios[i].password == password) {
                setCookie("user", username, 100);
                var bgColor = prompt("Que color quires de fondo? (ej: red, green, blue ...", "white");
                setCookie("color", bgColor, 100);
                home();
            }
        }
    });
    $("#register").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        var userExist = false;
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].username == username) {
                userExist = true;
            }
        }
        if (!userExist) {
            var username = $("#username").val();
            var password = $("#password").val();
            var user = new User(username, password);
            usuarios.push(user);
            localStorage.setItem('users', JSON.stringify(usuarios));
        }
        else {
            alert("el usuario ya existe");
        }
    });
});
function home() {
    var bgColor = getCookie("color");
    $("body").css("background-color", bgColor);
    $("#proyectos").css("display", "block");
    generateList(getCookie("user"));
    $("#añadir").click(function () {
        var textProyecto = prompt("introduce el proyecto");
        var proyecto = new Proyecto(getCookie("user"), textProyecto);
        var proyectos = JSON.parse(localStorage.getItem("proyectos"));
        if (proyectos == null) {
            proyectos = [proyecto];
            localStorage.setItem("proyectos", JSON.stringify(proyectos));
        }
        else {
            proyectos.push(proyecto);
            localStorage.setItem("proyectos", JSON.stringify(proyectos));
        }
        generateList(getCookie("user"));
    });
    $("#borrar").click(function () {
        var proyectDelete = prompt("introduce el titulo del proyecto a borrar");
        var proyectos = JSON.parse(localStorage.getItem("proyectos"));
        for (var i = 0; i < proyectos.length; i++) {
            if (proyectos[i].usuario == getCookie("user") && proyectos[i].proyecto == proyectDelete) {
                delete proyectos[i];
                localStorage.removeItem("proyectos");
                if (proyectos != null) {
                    localStorage.setItem("proyectos", JSON.stringify(proyectos));
                }
            }
        }
        generateList(getCookie("user"));
    });
}
function generateList(usuario) {
    var proyectos = JSON.parse(localStorage.getItem("proyectos"));
    $("#listaProyectos").empty();
    if (proyectos != null) {
        for (var i = 0; i < proyectos.length; i++) {
            if (proyectos[i].usuario == getCookie("user")) {
                $("#listaProyectos").append("<li>" + proyectos[i].proyecto + "</li>");
            }
        }
    }
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
