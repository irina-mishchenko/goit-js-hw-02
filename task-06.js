"use strict";

let input = +prompt ('Введите число', '');
let total = 0;
const numbers = []; 

while (input > 0) {
    input = +prompt ('Введите число', '');
    numbers.push(input);
} 

function sum (array) {
    for(let i = 0; i < array.length; i += 1) {
        total += array[i];
    }
}

sum (numbers);

console.log('Общая сумма чисел равна ' + total);

