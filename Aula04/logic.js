// Lista dos filmes de ação
var filmesAcao = ["https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"];

//Variavel que pega qual filme de ação o usuário deseja
var escolheFa = parseInt(prompt("Qual destes filmes de ação você deseja?\n Digite 0 - Velozes e Furiosos\n Digite 1 - Thor Ragnarok\n Digite 2 - Truque de Mestre"));

//mostrar na tela o filme escolhido
document.write(`<img src = ${filmesAcao[escolheFa]}>`)


//------------------------------------------------------


// Lista dos filmes de romance
var filmesRomance = ["https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzU3NTYxM2MtNjViMS00YmNlLWEwM2MtYWI2MzgzNTkxODFjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"];

//Variavel que pega qual filme de romance o usuário deseja
var escolheFr = parseInt(prompt("Qual destes filmes de romance você deseja?\n Digite 0 - Como eu era antes de você\n Digite 1 - Orgulho e preconceito\n Digite 2 - Um amor para recordar"));

//mostrar na tela o filme escolhido
document.write(`<img src = ${filmesRomance[escolheFr]}>`)


//------------------------------------------------------


// Lista dos filmes de suspense
var filmesSuspense = ["https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjAzMTI1MjMyN15BMl5BanBnXkFtZTgwNzU5MTE2NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNDM2YjliZDUtZWUzYi00ZDY4LWJlMTEtZGZiZDViZjJiMTllXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"];

//Variavel que pega qual filme de suspense o usuário deseja
var escolheFs = parseInt(prompt("Qual destes filmes de romance você deseja?\n Digite 0 - Silencio dos inocentes\n Digite 1 - Bird Box\n Digite 2 - No limite da traição"));

//mostrar na tela o filme escolhido
document.write(`<img src = ${filmesSuspense[escolheFs]}>`)