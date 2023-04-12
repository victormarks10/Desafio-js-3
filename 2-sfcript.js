//[ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.]

const table = (Number)=> {
    if(Number>10 || Number<1) {
        console.log(' Aceitamos tabuada do 1 ao 10')
        return
    }

    for(let i = 1 ; i <=10; i++) {
        console.log(`${i} x ${Number} = ${i*Number}`)
    }
}

table(10)