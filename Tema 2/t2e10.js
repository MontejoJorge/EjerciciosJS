var v = prompt("Numero")
var n = parseInt(v)

switch (n) {
    case 1:
    case 2:
            document.write("Muy deficiente");
        break;
    case 3:
    case 4: 
            document.write("Insuficiente");
        break;
    case 5: 
            document.write("Suficiente");
        break;
    case 6:
    case 7: 
            document.write("Bien");
        break;
    case 8:
            document.write("Notable");
        break;
    case 9:
    case 10: 
            document.write("Sobresaliente");
        break;
}