
/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Pedro Henrique Santos Roque - N° 27
*/


const teclado = require(`prompt-sync`)();

let nota1: number = parseInt(teclado("Digite a primeira nota: "));
let nota2: number = parseInt(teclado("Digite a segunda nota: "));
let nota3: number = parseInt(teclado("Digite a terceira nota: "));
let nota4: number = parseInt(teclado("Digite a quarta nota: "));
let nota5: number = parseInt(teclado("Digite a quinta nota: "));
let nota6: number = parseInt(teclado("Digite a sexta nota: "));
let nota7: number = parseInt(teclado("Digite a sétima nota: "));
let nota8: number = parseInt(teclado("Digite a oitava nota: "));
let nota9: number = parseInt(teclado("Digite a nona nota: "));
let nota10: number = parseInt(teclado("Digite a décima nota: "));

let par: number = 0;
let impar: number = 0;

let pares: string = ""; 
let impares: string = ""; 


function Par(numero: number) {
    if (numero % 2 === 0) {
        par++;
        pares += numero + " "; 
    } else {
        impar++;
        impares += numero + " "; 
    }
}


Par(nota1);
Par(nota2);
Par(nota3);
Par(nota4);
Par(nota5);
Par(nota6);
Par(nota7);
Par(nota8);
Par(nota9);
Par(nota10);


console.log(`Quantidade de números pares: ${par}`);
console.log(`Números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impar}`);
console.log(`Números ímpares: ${impares}`);