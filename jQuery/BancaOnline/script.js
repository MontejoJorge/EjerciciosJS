$(document).ready( function(){
    createData();
    var buttons = $("button");
    var numbers = [0,1,2,3,4,5,6,7,8,9];

    numbers = shuffle(numbers);

    for (let i = 0; i < buttons.length; i++) {
        buttons.eq(i).html(numbers[i]);
        buttons.eq(i).val(numbers[i]);
    }

    buttons.on("click", function(){
        let number = $(this).val();
        let passwordInput = $("#password");
        passwordInput.val($("#password").val()+number);
    })

    let loginButton = $("#loginButton");

    loginButton.on("click", function(){
        // TODO validar datos de entrada
        
        for (let i = 0; i < users.length; i++) {
            use
            
        }


    })

    function shuffle(array){
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

    function createData(){
        var users = [];
        let u1 = {dni: "72852285S", clave:123987};
        var u2 = {dni: "12345678A", clave:123456};
        var u3 = {dni: "87654321B", clave:987654};

        users.push(u1,u2,u3);
    }
});