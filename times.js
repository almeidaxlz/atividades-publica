let times = [
    {
        nome: "leverkusen",
        goleiro: "Tiago",
        alaDireita: "joao",
        alaEsquerda: "Gabriel",
        pivo: "lucas",
        fixo: "Fernando",
        tecnico: "Carlos",
        vitorias: 137,
        derrotas: 120,
    },
    {
        nome: "bayer",
        goleiro: "Pedro",
        alaDireita: "Diogo",
        alaEsquerda: "Felipe",
        pivo: "Nicolas",
        fixo: "Daniel",
        tecnico: "Vitor",
        vitorias: 101,
        derrotas: 86,
    },
    {
        nome: "PSG",
        goleiro: "Joelinton",
        alaDireita: "Reinaldo",
        alaEsquerda: "Gilberto",
        pivo: "Jefferson",
        fixo: "Raul",
        tecnico: "Fernando",
        vitorias: 124,
        derrotas: 109,
    },
    {
        nome: "real madruga",
        goleiro: "Jose",
        alaDireita: "marcos",
        alaEsquerda: "Renato",
        pivo: "Leonilson",
        fixo: "Hudson",
        tecnico: "Ramon",
        vitorias: 110,
        derrotas: 70,
    },
    {
        nome: "barsemlona",
        goleiro: "Hugo",
        alaDireita: "Matheus",
        alaEsquerda: "Felipe",
        pivo: "Joao",
        fixo: "Caleb",
        tecnico: "Emanuel",
        vitorias: 93,
        derrotas: 78,
    },


]

function vertimes (){
      times.forEach ((time)=>{
        console.log (time.nome + "-" + time.goleiro + "(goleiro)," + time.alaDireita + "(alaDireita)," + time.alaEsquerda + "(alaEsquerda)," + time.pivo + "(pivo)," + time.fixo + "(fixo)," + time.tecnico + "(tecnico)," + time.vitorias + "(vitorias)," + time.derrotas + "(derrotas),")
      });
}
vertimes();
