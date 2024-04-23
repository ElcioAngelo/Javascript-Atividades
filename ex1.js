/*1. Escreva um condicional que verifica se idade é menor que 18. Se for verdadeiro, exiba "Menor de idade", caso contrário, exiba "Maior de idade". */

let idade = 16 

verificarIdade = () => {
    if(idade < 18){
        console.log("Idade menor que 18!")
    }else{
        console.log("Idade maior que 18!")
    }
}

verificarIdade()