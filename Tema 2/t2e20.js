var arr1 = [1,2,3,4,5];
var arr2 = [];

for (var i=0;i<5;i++){
    arr2[i] = prompt("Valor");
}

alert("a) Mostrar los numeros pares del primer array"+"\n"+"\n"+
"b) Buscar un valor tecleado por el usuario en el segundo array. Si se encuentra hay que indicar la posicion. Ten en cuenta que el mismo valor se puede repetir y si esto ocurre hay que indicartodas las posiciones"+"\n"+"\n"+
"c) Mostrar todos los numeros mayores de 10 del primer array"+"\n"+"\n"+
"d) Crear un string a partir de todos los datos del primer array"+"\n"+"\n"+
"e) Borrar el primer elemento, el ultimo y un elemento intermedio del array dos"+"\n"+"\n"+
"f) Unir los dos arrays formando solo uno. Visualiza el contenidode este tercer array."+"\n"+"\n"+
"g) Crear un nuevo array con todos los numeros impares del array uno"+"\n"+"\n"+
"h) Sumar un dos a cada uno de los elementos del array dos"+"\n"+"\n"+
"i) Duplicar los dos primeros elementos del primer array a partir de la posicion cuatro."+"\n"+"\n"+
"j) Guardar un 6 en cada una de las posiciones del array dos"+"\n"+"\n"+
"k) Mostrar el contenido de un array empezando por la ultima posicion y acabando por la primera"+"\n"+"\n"+
"l) Ordenar de mayor a menor el contenido de un array"+"\n"+"\n"+
"m) Salir"+"\n"+"\n")

var opcion = prompt("Selecciona la letra")

switch (opcion) {
    case "a": a(); 
        break;
    
    case "b": b();
        break;
    
    case "c":
        break;
    
    case "d":
        break;
    
    case "e":
        break;
    
    case "f":
        break;
    
    case "g":
        break;
    
    case "h":
        break;
    
    case "i":
        break;
    
    case "j":
        break;
    
    case "k":
        break;
    
    case "l":
        break;
    
    case "m":
        break;
    
     
}

function a(){
    var as = "";

    for(var i=0;i<arr1.length;i++){
        if (arr1[i]%2==0){
            as=as+arr1[i]+" ";
        }
    }
alert(as);
}

function b(){
    var bf = prompt("Que quieres buscar");

    for(var i=0;i<arr2.length;i++){
        if (arr2[i]==bf){
            alert(i+"(+1)")
        }
    }
}