/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno: Pedro Henrique Santos Roque N° 27
*/

const teclado = require("prompt-sync")();

let num1 = parseInt(teclado("Digite o primeiro número: "));
let num2 = parseInt(teclado("Digite o segundo número: "));
let num3 = parseInt(teclado("Digite o terceiro número: "));

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(
      `Os números em ordem decrescente são: ${num1}, ${num2} e ${num3}`
    );
  } else {
    console.log(
      `Os números em ordem decrescente são: ${num1}, ${num3} e ${num2}`
    );
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(
      `Os números em ordem decrescente são: ${num2}, ${num1} e ${num3}`
    );
  } else {
    console.log(
      `Os números em ordem decrescente são: ${num2}, ${num3} e ${num1}`
    );
  }
} else {
  if (num1 >= num2) {
    console.log(
      `Os números em ordem decrescente são: ${num3}, ${num1} e ${num2}`
    );
  } else {
    console.log(
      `Os números em ordem decrescente são: ${num3}, ${num2} e ${num1}`
    );
  }
}
