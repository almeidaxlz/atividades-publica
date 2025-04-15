let times = require("./dados.json");
function vertimes (){
      times.forEach ((time)=>{
        console.log (time.nome + "-" + time.goleiro + "(goleiro)," + time.alaDireita + "(alaDireita)," + time.alaEsquerda + "(alaEsquerda)," + time.pivo + "(pivo)," + time.fixo + "(fixo)," + time.tecnico + "(tecnico)," + time.vitorias + "(vitorias)," + time.derrotas + "(derrotas),")
      });

}
vertimes();

function vertimes(){

}


function criarArquivo(){
    let dadosEmTexto = JSON.stringify(times);
    const fs = require("fs");
    fs.writeFileSync("dados.json", dadosEmTexto);
console.log("Arquivo criado");
}

function marcarJogos(timeA, timeB, data, horario, estadio, cidade){
   let jogos = require("./jogos.json");
   jogo = {
    timeA: timeA,
    timeB: timeB,
    data: data,
    horario: horario,
    estadio: estadio,
    cidade: cidade

   }

}
criarArquivo();

vertimes();