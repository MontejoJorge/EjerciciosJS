$(document).ready(
    function(){
    let button = $("button").eq(0);
    let list = $("ul").eq(0);
    

    button.on("click", function(){
        list.append("<li>Nuevo elemento</li>");
    })
});