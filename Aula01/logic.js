var valorDol = parseFloat(prompt("Digite o valor em Dolar que deseja converter para Real:"))

converteDolar(valorDol);

function converteDolar(valorDolar) {
    if (!isNaN(valorDolar) && valorDolar != 0 && valorDolar > 0) {
        var valReal = (valorDolar * 5.50).toFixed(2);
        alert(`O valor U$${valorDolar} convertido em real é R$${valReal}`);


    } else {
        while (valorDolar == 0 || valorDolar < 0 || isNaN(valorDolar)) {
            alert("O valor digitado é inválido!!");
            var valorDolar = parseFloat(prompt("Digite o valor que deseja converter: "));
        }

        var valReal = (valorDolar * 5.50);
        alert(`O valor U$${valorDolar.toFixed(2)} convertido em real é R$${valReal.toFixed(2)}`);
    }
}