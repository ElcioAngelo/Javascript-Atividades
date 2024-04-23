/*6. Crie uma função chamada ehNegativo que recebe um número como parâmetro e retorna true se for negativo e false se for positivo. */
let confirmacao = false
let negativo = -6


ehNegativo = () => {
    if(negativo < 0){
        confirmacao = true
    }
}

console.log("é negativo: " + ehNegativo())