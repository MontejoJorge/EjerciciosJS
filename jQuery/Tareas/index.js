var personas;
$(document).ready(function () {
    let p1 = new Persona("jorge", "Jm12345");
    let p2 = new Persona("pablo", "Jm12345");
    let p3 = new Persona("juan", "Jm12345");

    personas = new Array(p1,p2,p3);
    
});

function login(){
    let username = $("#username").val();
    let password = $("#password").val();

    let pLogin = new Persona(username,password);

    if (personas.find(x => x.username == username && x.password == password)!=undefined){
        alert("sisas");
    } else {
        alert("nonas");
    }
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires;
}
