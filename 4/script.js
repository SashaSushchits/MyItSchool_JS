//Задание 1
console.log('Задание_1');
const arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Задание 2
console.log('Задание_2');
const arr_2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let q = 0; q < arr_2.length; q++) {
    if (arr_2[q] > -10 && arr_2[q] < -3) {
        console.log(arr_2[q]);
    }
}

//Задание 3
console.log('Задание_3');
const arr_3 = [];
for(let n = 22; n < 57; n++){
    arr_3[n-22] = n + 1;
}
console.log(arr_3);
let result = 0;
for(let r = 0; r < arr_3.length; r++) {
    result += arr_3[r];
}
console.log(result);

const arr_3_1 = [];
let g = 22;
while(g < 57) {
    arr_3_1[g] = g + 1;
    g++;
    // console.log(arr_3_1);
}
console.log(arr_3_1);

//Задание 4
console.log('Задание_4');
const arr_4 = ['10', '20', '30', '50', '235', '3000'];
for(let h = 0; h < arr_4.length; h++) {
    // console.log(arr_4[h]);
    if (arr_4[h][0] == 1 || arr_4[h][0] == 2 || arr_4[h][0] == 5) {
    console.log(arr_4[h]);
    }
};


//Задание 5
console.log('Задание_5');
const arr_5 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВСК'];
for(let k = 0; k < arr_5.length; k++) {
    if (arr_5[k] == 'СБ' || arr_5[k] == 'ВСК') {
        console.log('%c%s', 'color: green; font-weight: bold;', arr_5[k]);
    } else console.log(arr_5[k]);
}

//Задание 6
console.log('Задание_6');
const arr_6 = ['socer', 'golf', 'basket', 567, 765, 66, null];
console.log(arr_6);
arr_6.push('gold');
console.log(arr_6[arr_6.length-1]);
console.log(arr_6);


//Задание 7
console.log('Задание_7');
let arr_7 = [];
let answer = prompt('Введите число?');
while(answer !== '') {
    arr_7.push(answer);
    answer = prompt('Введите число?');
}
console.log(arr_7);
let result_7 = 0;
for(let m = 0; m < arr_7.length; m++) {
    result_7 += +arr_7[m];
}
console.log(result_7);

// Задание 8
console.log('Задание_8');
const arr_8 = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr_8.slice().reverse());

let arr_8_1 = [];
while(arr_8.length > 0) {
    arr_8_1.push(arr_8.pop());
}
console.log(arr_8_1);

//Задание 9
console.log('Задание_9');
let result_9 = 0;
const arr_9 = [5, 9, 21, , , 9, 78, , , , , 6];
for(let f = 0; f < arr_9.length; f++) {
    if(arr_9[f] === undefined) {
        result_9++;
    }
}
console.log(result_9);

//Задание 10
console.log('Задание_10');
const arr_10 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let start = arr_10.indexOf(0);
let end = arr_10.lastIndexOf(0);
console.log(start , end);
let result_10 = 0;
for(let b = start; b < end; b++) {
    result_10 += arr_10[b];
}
console.log(result_10);

//Задание 11
console.log('Задание_11');
let how_many = prompt('Укажите высоту');
let what = '^';
let str_11 = '';
let str_11_1 = ' ';
for(let c = 0; c < how_many; c++) {
    str_11_1 += ' ';
    str_11 += str_11_1 + what + str_11_1;
    console.log(str_11);
}
