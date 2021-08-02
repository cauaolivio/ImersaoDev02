var numeroSecreto = parseInt(Math.random() * 10);
var tentativas_do_num = 3;

acerteNum(numeroSecreto, tentativas_do_num)

function acerteNum(numSecreto, tentativas) {
    while (tentativas > 0) {
        var chute = parseInt(prompt("Digite um número de 0 a 10: "));

        if (numSecreto == chute) {
            document.write(`<h2>Acertou! </h2>`);
            break;
        } else {
            alert(`Errou!`);
            if (numSecreto > chute) {
                alert("O número secreto é maior do que seu chute. ");
                tentativas = tentativas - 1;
            } else if (numSecreto < chute) {
                alert("O número secreto é menor do que seu chute.");
                tentativas = tentativas - 1;
            }
        }
    }

    if (chute != numSecreto) {
        document.write(`<h2> Errou!! O númeo era ${numSecreto}</h2>`)
    }
}




