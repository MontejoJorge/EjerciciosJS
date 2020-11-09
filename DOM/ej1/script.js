window.onload = function(){
    var links = document.getElementsByTagName("a");
    alert("enlaces: "+ links.length);

    var lastLink = "El ultimo enlace va a: " + links[links.length-1];
    alert(lastLink);

    let contador = 0;

    for (let i = 0; i < links.length; i++) {
        if (links[i].href == "http://prueba" || links[i].href == "http://prueba/") {
            contador ++;
        }
    }

    alert(contador);

}