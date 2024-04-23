const colors = require("colors")

/*
9. Escreva uma função que receba um número como parâmetro e retorne verdadeiro se for par e falso caso contrário.
*/

let numero = 21

let verificar = () => {
    if(numero % 2 == 0){
        return true 
    }else{
        return false 
    }
}

verificar()