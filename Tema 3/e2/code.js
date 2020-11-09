class Nota {
    constructor(day, text) {
        this.day = day;
        this.text = text;
    }
}

let aNotas = [];

function guardarDato() {
    var N = new Nota;
    N.day = this.id;
    if (document.getElementById("nota").value == "") {
        alert("Debes introducir algun texto");
    } else {
        N.text = document.getElementById("nota").value;
        aNotas.push(N);
    }
}

var botones = document.getElementsByClassName("boton");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click",
        guardarDato);
}

document.getElementById("show").addEventListener("click",
    showNota);

function showNota(){
    for (let i = 0; i < aNotas.length; i++) {
        var stringNotas = stringNotas+aNotas[i].day+" "+aNotas[i].text+"<br>";         
    }
    document.getElementById("display").innerHTML = stringNotas;
    alert(stringNotas);
}

