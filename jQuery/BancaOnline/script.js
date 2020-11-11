var users = [];
$(document).ready(function () {
    createData();
    var buttons = $("button");
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers = shuffle(numbers);

    //poner un numero aleatorio en los botones
    for (let i = 0; i < buttons.length; i++) {
        buttons.eq(i).html(numbers[i]);
        buttons.eq(i).val(numbers[i]);
    }

    //añadir el numero de los botones al campo de la contraseña
    buttons.on("click", inputPassword);

    //evento para el boton de login
    let loginButton = $("#loginButton");
    loginButton.on("click", searchUser);
})
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function createData() {
    let u1 = { dni: "72852285S", password: 123987 };
    let u2 = { dni: "12345678A", password: 123456 };
    let u3 = { dni: "87654321B", password: 987654 };
    users.push(u1, u2, u3);
}
function inputPassword() {
    let number = $(this).val();
    let passwordInput = $("#password");
    passwordInput.val($("#password").val() + number);
}
function searchUser() {
    try {
        // TODO validar datos de entrada
        var dni = $("#dni").val();
        var password = $("#password").val();

        //regex
        let dniReg = new RegExp("^([0-9]{8}[A-z]{1})$");
        let passReg = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");

        if (!dniReg.test(dni)&&!passReg.test(password)){
            throw "Los datos introducidos no son validos";
        }

        for (let i = 0; i < users.length; i++) {
            if (dni == users[i].dni && password == users[i].password) {
                alert("Login successfull");
                break;
            }
        }
    } catch (error) {
        alert(error);
    }
}