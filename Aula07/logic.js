var cartaRick = {
    nome: "Rick Sanchez",
    atributos: {
        ataque: 97,
        inteligencia: 100,
        defesa: 73
    }
}

var cartaMorty = {
    nome: "Morty Smith",
    atributos: {
        ataque: 51,
        inteligencia: 39,
        defesa: 81
    }
}

var cartaEvilMorty = {
    nome: "Evil Morty Smith",
    atributos: {
        ataque: 87,
        inteligencia: 93,
        defesa: 90
    }
}


// Lista que contem as três cartas
var cartaMaquina;
var cartaJogador;
var cartas = [cartaRick, cartaMorty, cartaEvilMorty];

//Fução que vamos usar para sortear as cartas
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);

    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibirOpcoes();
}



// Função usada para selecionarmos os atributos das cartas
function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes');

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}



//Seleciona os atributos que o jogador deseja
function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');

    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}



//Cria uma disputa entre o jogador e a maquina, usando os atributos
function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        alert('Parabéns, jogador! Você venceu a maquina');
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Você perdeu! A carta da máquina é maior');
    } else {
        alert('Empatou!');
    }
    console.log(cartaMaquina);
}