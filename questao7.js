/*
7. Escreva uma função que recebe o nome completo do usuário e exiba suas iniciais. As iniciais
são formadas pela primeira letra de cada nome, sendo que todas deverão aparecer em
maiúsculas na saída do programa. Note que os conectores e, do, da, dos, das, de, di, du não
são considerados nomes e, portanto, não devem ser considerados para a obtenção das iniciais.
As iniciais devem ser impressas em maiúsculas, ainda que o nome seja entrado todo em
minúsculas. A

• Exemplos: Maria das Graças Pimenta => MGP
• Fulano de Tal=> FT
*/
//CRIANDO UM OBJETO FUNÇÃO ONDE RECEBE A STRING NOME
function imprimirIniciais(nomes) {
    //LOOP QUE PEGA O COMPRIMENTO DA STRING USANDO A PROPRIEDADE length
    for (let i = 0; i<nomes.length; i++) {
        //DESVIO PARA OSC CONECTORES
        if (nomes[i]!='e' && nomes[i]!='do' && nomes[i]!='da' && nomes[i]!='dos' 
        && nomes[i]!='das' && nomes[i]!='de' && nomes[i]!='di' && nomes[i]!='du') {
            var inicial = nomes[i].charAt(0) //PEGA A PRIMEIRA LETRA DO NOME
            console.log(inicial.toUpperCase()) //toUpperCase TRANSFORMA A STRING EM MAIUSCULA
        }
    }
}
//VARIAVEL DE TEXTO
var nome = 'Francisco Israel de Oliveira';
//PARAMETRO SPLIT TRANSFORMA A VARIAVEL DE TEXTO EM ARRAY
//O ARRAY E FEITO CONFORME O PARAMETRO FORNECIDO
const nomes = nome.split(' ') ;
console.log(nomes);
imprimirIniciais(nomes);
