// Password Generator
function generator(){
var nome = document.getElementById("formNome").value;
var cognome = document.getElementById("formCognome").value;
var colore = document.getElementById("formColore").value;
var password = nome+cognome+colore+"19";
document.getElementById("formPass").innerHTML = password;
}

