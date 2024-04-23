//12. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se o primeiro for múltiplo do segundo e falso caso contrário.

let numero1 = 222
let numero2 = 333

funcao = () => {
    if((numero1 % numero2) === 0){
        console.log("São multiplos!")
    }else{
        console.log("Não são multiplos!")
    }
}

funcao()