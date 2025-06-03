const frutas = [
    {nome: "uva", preco: 12.90, quantidade: 50},
    {nome: "laranja lima", preco: 5.50, quantidade: 120},
    {nome: "abacaxi", preco: 10, quantidade: 12}
]
console.log(frutas)
const encontrado = frutas.find((fruta) => fruta.nome === "uva")
console.log(encontrado)
const filtrado = frutas.filter((fruta) => fruta.nome === "uva")
console.log(filtrado)
const alterado = frutas.map ((fruta) => { return {
    ...frutas,
    preco: fruta.preco * 0.5
 }
}
)
console.log (alterado)