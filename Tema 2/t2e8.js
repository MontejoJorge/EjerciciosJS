var v1 = prompt("numero")
var n1 = parseInt(v1)

var v2 = prompt("numero")
var n2 = parseInt(v2)

var v3 = prompt("numero")
var n3 = parseInt(v3)

if(v1>v2){
    //el 1 es mayor que el 2
    if (v1>v3){
        alert("El mas grande es: "+v1)
    }else {
        //el 3 es mayor que 1
        alert("El mas grande es: "+v3)
    }

} else {
    //el 2 es mayor que el 1
    if (v2>v3){
        alert("El mas grande es: "+v2)
    }else {
        //el 3 es mayor que 2
        alert("El mas grande es: "+v3)
    }
}