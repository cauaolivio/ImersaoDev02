function adicionarFilme() {

    var filmeFavorito = document.querySelector('#filme').value;

    if (filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('.png')) {
        listarFilmesNaTela(filmeFavorito);
    } else {
        alert("Imagem inválida");
    }
    filmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes');
    var elementoFilme = "<img src=" + filme + ">";
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}