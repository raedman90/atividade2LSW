const estados = ["GO", "MG", "SP", "RJ", "AM", "PA"];

var select = "";

estados.forEach((estado, indice) => {
    if(indice === 0)
        select = "<select>";
select += `<option value = "${estado}"> ${estado} </option>`;
    if(indice === (estados.length - 1))
        select += "</select>";
});

console.log(select);
