let cadena = prompt("Escribe");
let contador = 0;

for (let i=0;i<cadena.length;i++){
    if (cadena.charAt(i)=='a' || cadena.charAt(i)=='e' || cadena.charAt(i)=='i'|| cadena.charAt(i)=='o' || cadena.charAt(i)=='u'){
        contador++;
    }
}

let porcentaje = (contador*100)/cadena.length