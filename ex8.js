/*
8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.
*/

let numero = 20
let numeroORetorno = 30

function verificar(){
    let numeroMaior = 0
    if(numero > numeroORetorno){
        numeroMaior = numero 
    }else if(numero === numeroORetorno){
        numeroMaior = "Os dois números são iguais!!"
    }else{
        numeroMaior = numeroORetorno
    }
    return numeroMaior;
}

verificar()