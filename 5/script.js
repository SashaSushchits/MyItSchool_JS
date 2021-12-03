//Задание 1
console.log('Задание_1');
function num(a, b, c) {
    return (a - b) / c;
}
console.log(num(20, 4, 2));

//Задание 2
console.log('Задание_2');
function num_2(a) {
    return [Math.pow(a, 3), Math.pow(a, 2)];
}
console.log(num_2(3));

//Задание 3
console.log('Задание_3');
function max(a, b) {
    return Math.max(a, b);
}
console.log('максимальное значение: ' + max(7, 5));

function min(a, b) {
    return Math.min(a, b);
}
console.log('минимальное значение: ' + min(7, 5));

//Задание 4 ???
console.log('Задание_4');
let start = +prompt('Start?');
let end = +prompt('End?');
let getArr = [];
function array(start, end) {
    for (let n = start; n <= end; n++) {
        getArr[n - start] = n;
    }
}
array(start, end);
console.log(getArr);

//Задание 5
console.log('Задание_5');
let a = prompt('Number?');
function isEven(a) {
    if (a % 2 === 0) {
        return true;
    } else return false;
}
console.log(isEven(a));
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(a));

//Задание 6
console.log('Задание_6');
function getArray(array) {
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        isEven(array[i]) ? resultArr.push(array[i]) : '';
    }
    return resultArr;
}
console.log(getArray([2, 4, 6, 5, 3, 7, 10]));

//Задание 7 
console.log('Задание_7');

function getTree(how_many, symbol) {
    for (let c = 1; c <= how_many; c++) {
        let str_11 = '';
        for (let j = 0; j < c; j++) {
            if (symbol) {
                str_11 += symbol;
            } else str_11 += c;
        }
        console.log(str_11);
    }
}
let user_input = prompt('Укажите высоту и символ через запятую (необязательно): ');
let array_11 = user_input.split(',');
getTree(array_11[0], array_11[1]);

//Задание 9 поставить условие, что сумма меньше 1000!
console.log('Задание_9');
function getNumArr() {
    let arr = [];
    for (let i = 0; ; i++) {
        if (i === 0) arr[i] = 0;
        else if (i === 1) arr[i] = 1;
        else arr[i] = arr[i - 1] + arr[i - 2];

        if (arr[i] > 1000) {
            arr.pop();
            return arr;
        }
    }
};
console.log(getNumArr());

// Задание 10 ??
console.log('Задание_10');
let number = prompt('Number?');
function summaNumber(number) {
    let sumNumber = String(number).split('');
    let summa = 0;
    for(let h = 0; h < sumNumber.length; h++){
        summa += +sumNumber[h];
    }
    if(summa > 9) {
        return summaNumber(summa);
    } else return summa; 
}
console.log(summaNumber(number));


//Задание 11
console.log('Задание_11');
function printArray(array) {
    console.log(array[d]);
    d++;
    if (d < array.length) printArray(array);
}
let d = 0;
printArray([3, 4, 7, 12, 42, 567]);