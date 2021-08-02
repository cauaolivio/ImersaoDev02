var cartaRick = {
    nome: "Rick Sanchez",
    imagem: "https://lh4.googleusercontent.com/proxy/cDaSX19gd-8ryQzyyi6tgulr4HvINnN3oipi1P0slLGkc0zUrjZziaK-FKlPdMj6CMgx=w1200-h630-p-k-no-nu",
    atributos: {
        Ataque: 97,
        Esquiva: 87,
        Defesa: 83
    }
};

var cartaMorty = {
    nome: "Morty Smith",
    imagem: "https://pbs.twimg.com/profile_images/1243449047710609409/yjZxgR40_400x400.jpg",
    atributos: {
        Ataque: 61,
        Esquiva: 86,
        Defesa: 59
    }
};

var cartaEvilMorty = {
    nome: "Evil Morty Smith",
    imagem: "https://cdn.wallpapersafari.com/27/82/P6R28a.png",
    atributos: {
        Ataque: 87,
        Esquiva: 93,
        Defesa: 90
    }
};

var cartaBeth = {
    nome: "Beth Smith",
    imagem: "https://upload.wikimedia.org/wikipedia/en/2/2f/Rick_and_Morty_characters_-_Beth_Smith.jpg",
    atributos: {
        Ataque: 59,
        Esquiva: 48,
        Defesa: 65
    }
};

var cartaSquan = {
    nome: "Squanchy",
    imagem: "http://pm1.narvii.com/6466/62c9b4681c06e6bd8fe720f636c1848daf6ad671_00.jpg",
    atributos: {
        Ataque: 77,
        Esquiva: 65,
        Defesa: 70
    }
};


var cartaPickle = {
    nome: "Pickle Rick",
    imagem: "https://rollingstone.uol.com.br/media/_versions/pickle-rick_widelg.jpg",
    atributos: {
        Ataque: 80,
        Esquiva: 92,
        Defesa: 41
    }
};

var cartaMaquina;
var cartaJogador;

// Lista que contem as três 
var cartas = [cartaRick, cartaMorty, cartaEvilMorty, cartaBeth, cartaSquan, cartaPickle];


var pontosJogador = 0;
var pontosMaquina = 0;

atualizaPlacar();
atualizaQuantidadeDeCartas();


// Mostra quantas cartas há no jogo
function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas');

    var html = `Quantidade de cartas no jogo: ${cartas.length}`;

    divQuantidadeCartas.innerHTML = html;
}


// Função usada para criar um placar de vitórias
function atualizaPlacar() {
    var divPlacar = document.getElementById('placar');

    var html = "jogador " + pontosJogador + "/" + pontosMaquina + " Maquina";

    divPlacar.innerHTML = html;
}


//Fução que vamos usar para sortear as cartas
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
    cartas.splice(numeroCartaMaquina, 1);

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    cartas.splice(numeroCartaJogador, 1);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibeCartaJogador();
}


//Mostra a imagem na pag e as informações
function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");

    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;">`

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

    var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`;

    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var html = "<div id = 'opcoes' class = 'carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto
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
    var divResultado = document.getElementById("resultado");

    var atributoSelecionado = obtemAtributoSelecionado();

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">Venceu</p>';
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class = "resultado-final">Perdeu</p>';
        pontosMaquina++
    } else {
        htmlResultado = '<p class = "resultado-final">Empatou</p>';
    }

    if (cartas.length == 0) {
        alert("Fim de jogo!");
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class = "resultado-final">Você venceu!</p>';
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class = "resultado-final">Você perdeu!</p>';
        } else {
            htmlResultado = '<p class = "resultado-final">Empatou!</p>';
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false;
    }

    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;

    atualizaPlacar();
    exibeCartaMaquina();
    atualizaQuantidadeDeCartas();
}


//Mostra a carta da maquina na tela
function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");

    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
    style=" width: inherit; height: inherit; position: absolute;">`

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

    var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`;

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<P type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>";
    }

    var html = "<div id = 'opcoes' class = 'carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}


function proximaRodada() {
    var divCartas = document.getElementById('cartas');

    divCartas.innerHTML = `<div id= "carta-jogador" class= "carta"></div> <div id="carta-maquina" class="carta"></div>`;

    document.getElementById('btnSortear').disabled = false;
    document.getElementById('btnJogar').disabled = true;
    document.getElementById('btnProximaRodada').disabled = true;

    var divResultado = document.getElementById('resultado');

    divResultado.innerHTML = "";
}