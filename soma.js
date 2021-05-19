// Document Object Model

function somaValores() {
    var n1 = document.getElementById("numUm").value;
    var n2 = document.getElementById("numDois").value;

    var result = parseInt(n1) + parseInt(n2);

    var divResultado = document.getElementById("resultado");

    divResultado.append("O resultado é: " + result);
    console.log(result);
}