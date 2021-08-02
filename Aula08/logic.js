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
    imagem: "https://uploads.jovemnerd.com.br/wp-content/uploads/2018/04/rick-and-morty-game-of-thrones-picles-1210x540.png",
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

//Fução que vamos usar para sortear as cartas
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 6);

    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 6);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

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
        htmlResultado = `<p class = "resultado-final">Venceu</p>`;
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = `<p class = "resultado-final">Perdeu</p>`;
    } else {
        htmlResultado = `<p class = "resultado-final">Empatou</p>`;
    }

    divResultado.innerHTML = htmlResultado;

    exibeCartaMaquina();
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