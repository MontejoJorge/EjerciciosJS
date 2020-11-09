function addFirst(){
    let node = document.createElement("input");
    node.value="al principio";
    document.getElementById("form").prepend(node);
}
function addLast(){
    let node = document.createElement("input");
    node.value="al final";
    document.getElementById("form").appendChild(node);
}
function removeFirst(){
    var form = document.getElementById("form")
    form.removeChild(form.childNodes[0]);
}
function removeLast(){
    var form = document.getElementById("form")
    form.removeChild(form.childNodes[inputArrayLength-2]);
}