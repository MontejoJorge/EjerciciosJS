function send() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var age = document.getElementsByName("edad");
    var knowns = document.getElementsByName("conocido");

    validate(name,surname,email,city,province,age,knowns);


}

function validate(name,surname,email,city,province,age,knowns) {
    try {
        let exReg = new RegExp("[A-z]+");
        let pEmail = new RegExp("[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})");

        if (!exReg.test(name)) {
            throw "1";
        }

        if (!exReg.test(surname)) {
            throw "2";
        }

        if (!pEmail.test(email)) {
            throw "3";
        }

        if (!exReg.test(city)) {
            throw "4";
        }

        if (!exReg.test(province)) {
            throw "5";
        }

        for (let i = 0; i < age.length; i++) {
            if (age[i].checked) {
                age = age[i].value;
            }
        }

        let known = "";
        for (let i = 0; i < knowns.length; i++) {
            if (knowns[i].checked) {
                known+=knowns[i].value + " ";
            }
            
        }

        alert(known);

    } catch (err) {
        alert(err)
    }


}