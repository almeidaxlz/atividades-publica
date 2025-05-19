const strings = ["Banana","Maçã", "Tomate", "Goiaba"]
const numero = [20, 40, 80, 10]

strings.push("Abacate")
console.log(strings)

strings.unshift("Jaca")
console.log(strings)

strings.splice(3, 1)
console.log(strings)
strings.splice(3, 0, "Pêra")
console.log(strings)

strings.pop()
console.log(strings)