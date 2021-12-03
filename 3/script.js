// Задание_1
console.log('Задание_1');
let number = 1;
while(number <= 50) {
    console.log(number); number++;  
}

console.log('Задание_1_2');
let number_1_2 = 35;
while(number_1_2 >= 8) {
    console.log(number_1_2); number_1_2--;  
}


// Задание_2
console.log('Задание_2');
let number_2 = 89;
while(number_2 >= 11) {
    console.log(number_2); number_2--;  
}


// Задание_3
console.log('Задание_3');
let number_3 = 0;
for(let i = 0; i <= 100; i++) {
    number_3 = number_3 + i;
}
console.log(number_3);


// Задание_4
console.log('Задание_4');
let number_4 = 0;
for(let a = 1; a <= 5; a++) {
    number_4 = number_4 + a;
    console.log(number_4);
}


// Задание_5
console.log('Задание_5');
let number_5_1 = 8;
while(number_5_1 <= 56) {
    console.log(number_5_1); number_5_1+=2;  
}

console.log('Задание_5_1');
for(let number_5_2 = 8; number_5_2 <= 56; number_5_2+=2) {
    console.log(number_5_2);
}


// Задание_6
console.log('Задание_6');
for(let number_6 = 1; number_6 <= 10; number_6++) {
    console.log('Таблица умножения на ' + number_6);
    for(let j = 1; j <= 10; j++) {
    let multiplication = number_6 * j;
        console.log(number_6 + ' * ' + j + ' = ' + multiplication);
    }
}


// Задание_7
console.log('Задание_7');
let n = 1000,
    num = 0,
    result = n;
while (result > 50) {
    result = result /2;
    num+=1;
};
console.log(result);
console.log(num);


// Задание_8
// console.log('Задание_8');

// let sum = 0;
// let arifmetic = 0;

// for(let numbers; numbers !== Number; arifmetic++){

//     numbers = +prompt("Введите число", '0');
//     sum += numbers;
//         if (numbers == 0) {
//         break;
//     }     
//         if (isNaN(numbers)) {
//           alert('Ошибка');
//         break;
//     } 
// }
// console.log( 'Сумма: ' + sum + '</br>Среднее арифметическое: ' + (sum / arifmetic));

// Задание_9
console.log('Задание_9');
let str = '4 2 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 98 57';
let strSplit = str.split(' ');
let max = strSplit [0];
let min = strSplit [0];
for (let k = 0; k < strSplit.length; k++) {
    if(strSplit[k] > max) max = strSplit[k];
    if(strSplit[k] < min) min = strSplit[k];
}
console.log ('minimum: ' + min, 'maximum: ' + max);

// Задание_10
console.log('Задание_10');
let number_10 = 90950567989873;
let sum_10 = 0;
let str_10 = number_10 + '';
console.log(str_10.split(''));
console.log(str_10.length);

for(let l = 0; l < str_10.length; l++) {
    sum_10 = sum_10 + +str_10[l];
    // console.log(sum_10);
}
console.log(sum_10);

str_10_reverse = str_10.split('').reverse().join('');
console.log(+str_10_reverse);