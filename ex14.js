//14. Escreva uma função que receba dois números como parâmetros e retorne verdadeiro se a soma deles for divisível por 5 e falso caso contrário.


let numero1 = 2
let numero2 = 3

funcaum = () => {
    if(numero1 + numero2 % 5 == 0){
        return true;
    }else{
        return false;
    }
}

funcaum()