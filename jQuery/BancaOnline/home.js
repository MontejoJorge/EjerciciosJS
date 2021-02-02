var cuenta;
$(document).ready(function () {
    var dni = document.cookie.split("=")[1];
    $("#dni").append(dni);
    createData();
    searchAccount(dni);
    createTable();
});
function searchAccount(dni){
    for (let i = 0; i < cuentas.length; i++) {
        if (dni == cuentas[i].usuario){
            cuenta = cuentas[i].id;
            $("#acc_id").append(cuentas[i].id);
        }        
    }
}
function createTable (){
    $("#table").empty();
    $("#table").append("<tr><th>Importe</th><th>Fecha</th></tr>");
    for (let i = 0; i < movimientos.length; i++) {
        if (cuenta==movimientos[i].id_cuenta){
            $("#table").append("<tr><td>"+movimientos[i].importe+"</td><td>"+movimientos[i].fecha+"</td></tr>")

        }        
    }
}
