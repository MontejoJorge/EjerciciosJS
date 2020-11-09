var arrContact = [];
class Contacto {
    constructor(nombre,organizacion,numero){
        this.nombre = nombre;
        this.organizacion = organizacion;
        this.numero = numero;
    }
}


document.getElementById("dos").style.display="none";
document.getElementById("uno").style.display="none";

function addContact(){
    document.getElementById("uno").style.display="block";
    document.getElementById("dos").style.display="none";

}
function searchContact(){
    document.getElementById("uno").style.display="none";
    document.getElementById("dos").style.display="block";

}
function saveContact(){
    let c = new Contacto;

    let name = document.getElementById("name").value;
    let pName = new RegExp("[A-z]+");
    if (pName.test(name)) {
        c.nombre = name;
    }

    let org = document.getElementById("org").value;
    let pOrg = new RegExp("[A-z]+");
    if (pOrg.test(org)) {
        c.organizacion = org;
    }

    let numero = document.getElementById("number").value;
    let pNumero = new RegExp("[0-9]+")
    if (pNumero.test(numero)) {
        c.numero = numero;
    }
    
    arrContact.push(c);
    console.log(arrContact);

    document.getElementById("name").value = "";
    document.getElementById("org").value = "";
    document.getElementById("number").value = "";

}
function searchContact() {
    
}