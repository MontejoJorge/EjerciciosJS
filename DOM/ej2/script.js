function crearElemento(){
    let element = document.createElement("li");
    var newContent = document.createTextNode("Elemento");

    element.appendChild(newContent);
    document.getElementById("list").appendChild(element);
}