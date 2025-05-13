let nome = "Gustavo"
let NumeroChamada = 6


let listaJogos = ["GTA online", "Days gone", "God Of War"];


let tamanho = listaJogos.length;
let contador = 0;


console.log("Os jogos favoritos do Gustavo é :");

while (contador < tamanho) {
  console.log(listaJogos[contador]);
  contador = contador + 1;
}


let filmeFavorito = {
  nome: "Gustavo",
  nomeFilme: "Piratas do caribe",  
  anoLancamento: 2003,
  notaIMDb: 8.1
};


console.log(filmeFavorito);

let notaFilme = 8.1;  
if (notaFilme <= 4.0) {
  console.log("O filme possui uma nota baixa.");
}

 else if (notaFilme > 4.0 && notaFilme <= 7.0) {
  console.log("O filme é considerado aceitavel.");
} 


else if (notaFilme > 7.0) {
  console.log("O filme é otimo!");
  
} 


