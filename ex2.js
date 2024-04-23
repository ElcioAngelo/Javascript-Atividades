/*2. Escreva um condicional que verifica se saldoConta é negativo. Se for verdadeiro, exiba "Saldo negativo", caso contrário, exiba "Saldo positivo". */
const colors = require("colors");

saldoConta = 20000 
saldoConta2 = -20000

variavel = () => {
    if(saldoConta < 0){
        console.log(colors.red("Saldo Negativo!"))
    }else{
        console.log(colors.green("Saldo Positivo!"))
    }
}

variavel()

variavel2 = () => {
    if(saldoConta2 < 0){
        console.log(colors.red("Saldo Negativo!"))
    }else{
        console.log(colors.green("Saldo Positivo!"))
    }
}

variavel2()