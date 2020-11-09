var v = prompt("Introduce un valor")
var arr = [v]

var res = true


while (res==true){
  var v = prompt("Introduce un valor")
  arr.push(v)

  res = confirm("Desea añadir otro valor?")
}


for (var i = 0; i < arr.length; i++) {
  document.write(arr[i]+"-")
}


