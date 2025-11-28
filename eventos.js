//Seleciona o botão ID

var button = document.getElementById("button");
var email = document.getElementById("email");
var senha = document.getElementById("senha");

button.addEventListener("click", function(){
    if (email.value == "" || senha.value == ""){
        alert("campo e-email ou senha não preenchidos");

    }else{
        alert("Campos preeenchidos com sucesso");
    }
});