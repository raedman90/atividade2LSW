const empresas = [
    {nome:'Samsung' , valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    {nome:'Microsoft' , valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975},
    {nome:'Intel' , valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968},
    {nome:'Facebook' , valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004},
    {nome:'Spotify' , valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006},
    {nome:'Apple' , valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

// Letra (a) - Primeira maneira:
function depoisDe2000 (p){
    return p.anoDeCriacao > 2000;
}
const empresaFiltrada = empresas.filter(depoisDe2000);
console.log(empresaFiltrada);

// Letra (a) - Segunda maneira:
const empresaFiltrada = empresas.filter(valor => valor.anoDeCriacao > 2000);
console.log(empresaFiltrada);

//------------------------------------------------------------------------------------------------

// Letra (b) - Primeira maneira:
function nomeCEO(corp){
    return {nome: `${corp.nome}`, CEO: `${corp.CEO}`};
}
const empresasMAP = empresas.map(nomeCEO);
console.log(empresasMAP);

// Letra (b) - Segunda maneira:
const empresasMAP = empresas.map(corp => ({nome: `${corp.nome}`, CEO: `${corp.CEO}`}));
console.log(empresasMAP);

//------------------------------------------------------------------------------------------------

// Letra (C) - Primeira maneira:
function somaValor (acc, p){
    if (acc.valorDeMercado){
        return acc.valorDeMercado + p.valorDeMercado
    }
    return acc + p.valorDeMercado;
}
const empresasValorTotal = empresas.reduce(somaValor);
console.log(`Valor total das empresas: ${empresasValorTotal}`);

// Letra (C) - Segunda maneira:
const empresasValorTotal = empresas.reduce((acc, p) => acc + p.valorDeMercado, 0);
console.log(`Valor total das empresas: ${empresasValorTotal}`);
