/*
10. Por meio do const array = [1, 22, 3, 14, 5, 36] crie um script para gerar: A e B

a) A soma dos valores pares de array usando o reduce e o filter
▪ array.filter(e => !(i & 1))
▪ reduce((s, v) => s + v)
*/

//22 14 e 36 = 72
const valores = [1, 22, 3, 14, 5, 36]

console.log('valores armazenados', valores)

function pares (valor){
    return valor % 2 == 0
}

console.log('valores pares', valores.filter(pares))

const par = valores.filter(pares)

console.log('soma dos valores pares', par.reduce((total, valorAtual) => total + valorAtual))