/* Base de cálculo mensal em R$	Alíquota %	Parcela a deduzir do imposto em R$
Até 1.903,98	–	–
De 1.903,99 até 2.826,65	7,5	142,80
De 2.826,66 até 3.751,05	15,0	354,80
De 3.751,06 até 4.664,68	22,5	636,13
Acima de 4.664,68	27,5	869,36 */

// Cálculo do imposto de renda: imposto = salario * taxa - desconto

let salario = Number(prompt("Qual é o seu salário em R$?"));
let imposto;

function calculoImposto(valor){
    if(valor<=1903.98){
        alert("Você não paga imposto de renda!");
    } else if(valor>1903.98 && valor<=2826.65){
        imposto = valor * 0.075 - 142.80;
        alert(`Você vai pagar R$${imposto.toFixed(2)} de imposto de renda!`);
    } else if(valor>2826.65 && valor<=3751.05){
        imposto = valor * 0.15 - 354.80;
        alert(`Você vai pagar R$${imposto.toFixed(2)} de imposto de renda!`);
    } else if(valor>3751.05 && valor<=4664.68){
        imposto = valor * 0.225 - 636.13;
        alert(`Você vai pagar R$${imposto.toFixed(2)} de imposto de renda!`);
    } else if(valor>4664.68){
        imposto = valor * 0.275 - 869.36;
        alert(`Você vai pagar R$${imposto.toFixed(2)} de imposto de renda!`);
    } else {
        alert("Valor inválido!");
    }
}

calculoImposto(salario);