class Proyecto {
    proyecto: string;
    constructor(proyecto:string) {
        this.proyecto = proyecto;
    }
}
class User {
    username: string;
    password: string;
    proyectos: Proyecto[];
    constructor(username:string, password:string) {
        this.username = username;
        this.password = password;
    }
}
//Usuario por defecto
var user1: User = new User("jorge", "Jm12345");
user1.proyectos = [new Proyecto("proc1"), new Proyecto("proc2")]
var usuarios: User[] = [user1];

var storage: User[] = JSON.parse(localStorage.getItem("users"));
if (storage == null) {
    localStorage.setItem('users', JSON.stringify(usuarios));
}

$(document).ready(function () {
    $("#proyectos").css("display", "none");

    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();

        //Recojo los usuarios
        var usuarios: User[] = JSON.parse(localStorage.getItem("users"));
        var encontrado: boolean = false;
        //Busco si los datos coindiden con los que hay guardados
        for (var i: number = 0;i<usuarios.length && encontrado == false; i++){
            if (usuarios[i].username == username && usuarios[i].password == password){
                encontrado = true;
            }
        }

        if (encontrado){
            //si el usuario se ha encontrado lo guardamos en cookie y preguntamos el color
            setCookie("user",username,100);
            var bgColor: string = prompt("Que color quires de fondo? (ej: red, green, blue ...", "white");
            setCookie("color", bgColor, 100)

            //llamamos a la funcion que carga los proyectos
            home();
        } else {
            alert("el usuario no existe o la contraseña es incorrecta");
        }

    });
    $("#register").click(function () {
        var username: string = $("#username").val();
        var password: string = $("#password").val();

        //Buscamos si hay algun usuario ya con ese nombre
        let userExist: boolean = false;localStorage.getItem("users")
        for (var i: number = 0;i<usuarios.length && userExist == false; i++){
            if (usuarios[i].username == username){
                userExist = true;
            }
        }

        if (!userExist){
            var user: User = new User(username,password);
            usuarios.push(user);
            localStorage.setItem('users', JSON.stringify(usuarios));
        } else {
            alert("el usuario ya existe")
        }

    });

});

function home(){
    var bgColor: string = getCookie("color");
    $("body").css("background-color", bgColor);

    $("#proyectos").css("display", "block");

    generateList(getCookie("user"));

    $("#añadir").click(function () {
        var textProyecto: string = prompt("introduce el proyecto");
        var proyecto: Proyecto = new Proyecto(textProyecto);

        //No puedo asignar el tipo User[] a datos por que luego no me dejaria llamar a findIndex
        var datos = JSON.parse(localStorage.getItem("users"));
        //Busco la posicion del usuario loggeado
        var index: number = datos.findIndex(x => x.username == getCookie("user"));

        //Segun la posicion del usuario loggeado busco en sus proyectos
        if (datos[index].proyectos!=null){
            //Si el usuario tenia proyectos le añado uno
            datos[index].proyectos.push(proyecto);
        } else {
            //Si el usuario no tenia proyectos le creamos un array con el proyecto que acaba de crear
            datos[index].proyectos = [proyecto];
        }

        localStorage.setItem("users", JSON.stringify(datos));

        generateList(getCookie("user"));
    });

    $("#borrar").click(function () {
        var proyectDelete: string = prompt("introduce el titulo del proyecto a borrar");

        var datos = JSON.parse(localStorage.getItem("users"));
        //Busco la posicion del usuario loggeado
        var index: number = datos.findIndex(x => x.username == getCookie("user"));

        //Segun la posicion del usuario loggeado busco el proyecto que quiere borrar
        var indexToDelete: number = datos[index].proyectos.findIndex(x => x.proyecto == proyectDelete);
        datos[index].proyectos.splice(indexToDelete, 1);

        localStorage.setItem("users", JSON.stringify(datos));
        generateList(getCookie("user"));
    });
}

function generateList(usuario: string){
    var datos = JSON.parse(localStorage.getItem("users"));
    $("#listaProyectos").empty();

    for (var i: number = 0; i<datos.length;i++){
        if (datos[i].username==getCookie("user") && datos[i].proyectos!=null){
            for (var a=0; a<datos[i].proyectos.length; a++){
                $("#listaProyectos").append("<li>"+datos[i].proyectos[a].proyecto+"</li>");
            }
            break;
        }
    }
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