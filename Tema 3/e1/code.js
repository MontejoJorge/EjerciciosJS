class Usuario {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}
let aUsuarios = new Array();

var U = new Usuario();

U.username = "admin";
U.password = "admin";

aUsuarios.push(U);

function validar() {
  for (let i = 0; i < aUsuarios.length; i++) {
    let user = aUsuarios[i];
    if (
      user.username == document.getElementById("name").value &&
      user.password == document.getElementById("pass").value
    ) {
      alert("Dale");
    }
  }
}
