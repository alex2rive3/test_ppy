function enumerarCadaTercerElemento(vector) {
    let indice = 1;
    for (let i = 2; i < vector.length; i += 3) {
        console.log(indice + ": " + vector[i]);
        indice++;
    } 
}
module.exports = {enumerarCadaTercerElemento};