//comando de intalação da biblioteca
//npm install --save readline-sync
const rl = require('readline-sync')

let opcao = 0
do{
    console.log('|----------------------------|')
    console.log('|----1 = Cilindro      ------|')
    console.log('|----2 = Cone          ------|')
    console.log('|----3 = Cubo          ------|')
    console.log('|----------------------------|')

    opcao = rl.questionInt(`Qual a sua opção:`)

}while(opcao !== 0){
    console.log('Fim do programa')
}