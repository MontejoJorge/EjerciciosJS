var arrList = [];
window.onload = function(){
    rellenar();
}
function rellenar(){
    
    var jstonList = document.cookie;
    if (!arrList.length==0 ) {
        arrList = JSON.parse(jstonList);
    }
    
    for (let i = 0; i < arrList.length; i++) {
        alert(arrList[i]);
        let elementName = arrList[i];
        let element = document.createElement("li");
        element.appendChild(elementName);
        document.getElementById("list").appendChild(element);
    }
}
function crearElemento(){
    try {
        document.getElementById("error").innerHTML = "";
        let element = document.createElement("li");

        if (!document.getElementById("elementName").value==""){
            let elementName = document.createTextNode(document.getElementById("elementName").value);
            document.getElementById("elementName").value="";
    
            element.appendChild(elementName);
            document.getElementById("list").appendChild(element);

            arrList.push(elementName);
            jstonList = JSON.stringify(arrList);

            document.cookie= "list="+jstonList;

        } else {
            throw "no puedes añadir un elemento vacio";
        }
    
    } catch (error) {
        document.getElementById("error").innerHTML = error;
    }
}
