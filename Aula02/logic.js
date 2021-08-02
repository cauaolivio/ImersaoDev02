var valorUm = parseFloat(prompt("Digite o primeiro valor: "));

var valorDois = parseFloat(prompt("Digite o segundo valor: "));

operacoes(valorUm, valorDois);

function operacoes(n1, n2) {
    var opc = parseInt(prompt("Digite 1 - Adição \nDigite 2 - Subtração \nDigite 3 - Multiplicação \nDigite 4 - Divisão"))
    if (opc == 1) {
        soma = n1 + n2;
        document.write(`<h2>${n1} + ${n2} = ${soma.toFixed(2)}</h2>`);
    } else if (opc == 2) {
        sub = n1 - n2;
        document.write(`<h2>${n1} - ${n2} = ${sub.toFixed(2)}</h2>`);
    } else if (opc == 3) {
        mult = n1 * n2;
        document.write(`<h2>${n1} x ${n2} = ${mult.toFixed(2)}</h2>`);
    } else if (opc == 4) {
        div = n1 / n2;
        document.write(`<h2>${n1} / ${n2} = ${div.toFixed(2)}</h2>`);
    } else {
        document.write("<h2>OPC inválida</h2>")
    }
}
