//Задание 1
console.log('Задание_1');
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));

//Задание 2
console.log('Задание_2');
let date = '2025-12-31';
console.log(date.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'));

//Задание 3
console.log('Задание_3');
let str_3 = 'Я учу javascript!';
console.log(str_3.substr(2, 3) + ' ' + str_3.substr(6, 10));
console.log(str_3.substring(2, 5) + ' ' + str_3.substring(6, str_3.length - 1));
console.log(str_3.slice(2, 5) + ' ' + str_3.slice(6, 16));

//Задание 4
console.log('Задание_4');
function sum(array) {
  for (let i = 0; i < array.length; i++) {
    summa += Math.pow(array[i], 3);
  }
  console.log(summa);
}
const array = [4, 2, 5, 19, 13, 0, 10];
let summa = 0;
sum(array);
console.log(Math.sqrt(summa));

//Задание 5
console.log('Задание_5');
let a = 3,
  b = 5,
  c = Math.abs(a - b);
console.log(c);

//Задание 6
// console.log('Задание_6');
function add(num) {
  if (num > 0 && num < 10) {
    return '0' + num;
  }
  else return num;
}

// console.log(add(date.getHours()) + ':' + add(date.getMinutes()) + ':' + add(date.getSeconds() + ' ' + add(date.getDate()) + '.' + add(date.getMonth() + 1) + '.' + date.getFullYear()));

// let dateNow = new Date();
// console.log(dateNow);
// console.log(dateNow.toLocaleString('ru'));

// function data (year) {
//     let arrYear = year.match(/\w{1,2}/g);
//     console.log(arrYear);
//     if (arrYear[0] < 9) {
//         return '0'+ arrYear[0];
//     }
//     else if (arrYear[1] < 9) {
//         return '0'+ arrYear[1];
//     }
//     console.log(arrYear); 
// }
// const year = '1.1.2020';

// data(year);

// dateNow.setDate

//Задание 7
console.log('Задание_7');
let str_7 = 'aa aba abba abbba abca abea';
console.log(str_7.replace(/ab+a/g, 'меняй'));

//Задание 8
console.log('Задание_8');
function telNum(num) {
  console.log((/^(\+375|80)-(29|33|44|25)-\d{3}-\d{2}-\d{2}/g.test(num)));
};
let num = '+375-33-274-99-44';
telNum(num);

//Задание 9
console.log('Задание_9');
function adress(mail) {
  console.log((/(^\w{2,15})(-|.)(\w{2,5})(@)([A-Za-z]{2,11})(\.)([A-Za-z]{2,11})/g.test(mail)));
};
let mail = 'sushchits_0567@mail.ru';
adress(mail);

//Задание 10
// console.log('Задание_10');


