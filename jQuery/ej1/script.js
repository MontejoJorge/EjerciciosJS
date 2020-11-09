$(document).ready(
    function links(){
        let links = $("a");
        alert("Numero de enlaces:"+links.length);

        let lastLink = "El penultimo enlace enlaza a: "+ links[links.length-2].href;
        alert(lastLink);

        let enlacesPrueba = $("[href=http://prueba]").length;
        alert(enlacesPrueba);
    }

);

