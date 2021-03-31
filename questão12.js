// a) Criando os objetos

let produto1 = {
    idProduto: 1,
    precoUnitario: 10.00,
    quantidade: 2
}

let produto2 = {
    idProduto: 2,
    precoUnitario: 10.00,
    quantidade: 2
}

let produto3 = {
    idProduto: 3,
    precoUnitario: 10.00,
    quantidade: 2
}

let produto4 = {
    idProduto: 4,
    precoUnitario: 10.00,
    quantidade: 0
}
// b) Adicionando no array carrinhoCompras


let carrinhoCompras = [produto1, produto2, produto3, produto4];
// console.log(carrinhoCompras);

// c) método filter() em um segundo array

let carrinhoCompras2 = carrinhoCompras.filter((produto) => {
    return produto.quantidade > 0;
});

// console.log(carrinhoCompras2);

// d) map()

let carrinhoSubtotal = carrinhoCompras2.map(function soma(p){
    return {
        idProduto: p.idProduto,
        subtotal: p.quantidade
    }
});

// console.log(carrinhoSubtotal);


// e) valor total

let carrinhoTotal = carrinhoCompras.reduce((soma, produto) => {
    return soma + produto.precoUnitario * produto.quantidade;
}, 0);

console.log(`O preço total a pagar é de R$${carrinhoTotal}`);



