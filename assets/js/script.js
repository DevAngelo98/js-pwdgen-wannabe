// Password Generator
function generator(){
var nome = document.getElementById("formNome").value;
var cognome = document.getElementById("formCognome").value;
var colore = document.getElementById("formColore").value;
var password = nome+cognome+colore+"19";

// Creo l'array dalla stringa
var arrayPassword = password.split("");

// Genero un array random
arrayPassword = arrayPassword.sort(function(){
  return Math.random() - 0.5;
});

// Converto l'array in Stringa
var finalPassword = arrayPassword.join('');

document.getElementById("formPass").innerHTML = finalPassword;

}

