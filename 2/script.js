//Задание_1
// let firstName,
//     age,
//     city,
//     phone,
//     email,
//     company;
// firstName = prompt('Ваше имя?');
// age = prompt('Возраст?');
// city = prompt('Город проживания?');
// phone = prompt('Ваш телефон?');
// email = prompt('Ваш e-mail?');
// company = prompt('Компания в которой работаете?');
// document.write ("Меня зовут " + firstName + '.' + ' Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '.' + ' Мои контактные данные: ' + phone +', ' + email + '. ' );

//Задание_2
// let year = (2021 - age);
// document.write (firstName + ' родился в ' + year + ' году.');

//Задание_3
// let str = prompt ('Введите 6-ти значное число');
// if (Number(str[0]) + Number(str[1]) + Number(str[2]) === Number(str[3]) + Number(str[4]) + Number(str[5])) {
//     console.log('Да!');} 
// else {console.log('Нет!');}

//Задание_4 (1,0,-3)
// let a = prompt ('Переменная?')
// if (Number(a) > 0) {console.log('Верно');} 
// else {console.log('Неверно');}

//Задание_5
// let a = 10,
//     b = 2;
// console.log(a + b, a - b, a * b, a / b);

// let summ = (a + b) + (a - b) + (a * b) + (a / b);
// if (summ > 0) {
//     console.log (Math.pow (summ, 2));
// }

// //Задание_6
// if(a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('Верно');
// }
// else {console.log('Неверно');}

//Задание_7
// let n = 59;
// if(n >= 0 && n <= 15) {
//     console.log('Первая четверть часа');
// }
// else if (n >= 16 && n <=30 ) {
//     console.log('Вторая четверть часа');
// }
// else if (n >= 31 && n <=45 ) {
//     console.log('Третья четверть часа');
// }
// else {
//     console.log('Четвёртая четверть часа');
// }

//Задание_8
// let dec = 40;
// if(dec >= 1 && dec < 10) {
//     console.log('Первая декада месяца');
// }
// else if (dec >= 10 && dec < 20 ) {
//     console.log('Вторая декада месяца');
// }
// else if (dec >= 20 && dec <= 31 ) {
//     console.log('Третья декада месяца');
// }
// else {
//     console.log('Не верные данные');
// }


//Задание_9
// let day = prompt ('Введите количество дней');
// let dayNum = Number(day),
//     year = dayNum / 365,
//     month = dayNum / 31,
//     week = dayNum / 7,
//     hours = dayNum * 24,
//     minutes = hours * 60,
//     seconds = minutes * 60;

// if (week < 1) {
//     console.log('Меньше года' , 'Меньше месяца' ,'Меньше недели', hours, minutes, seconds);
// }
// else if (month < 1) {
//     console.log('Меньше года' , 'Меньше месяца' , week, hours, minutes, seconds);
// }
// else if (year < 1) {
//     console.log('Меньше года' , month , week, hours, minutes, seconds);
// }
// else {
//     console.log(year, month, week, hours, minutes, seconds);
// }


//Задание_10
// let day = prompt ('Введите день');
// let dayNum = Number(day),
//     dayYears = dayNum/31;
// console.log(dayYears);
//     switch (true) {
//         case dayYears <= 1:
//             alert('Январь. Зима.');
//             break;
//         case dayYears <= 2:
//             alert('Февраль. Зима.');
//             break;
//         case dayYears <= 3:
//             alert('Март. Весна.');
//             break;
//         case dayYears <= 4:
//             alert('Аперель. Весна.');
//             break;
//         case dayYears <= 5:
//             alert('Май. Весна.');
//             break;
//         case dayYears <= 6:
//             alert('Июнь. Лето.');
//             break;
//         case dayYears <= 7:
//             alert('Июль. Лето');
//             break;
//         case dayYears <= 8:
//             alert('Август. Лето.');
//             break;
//         case dayYears <= 9:
//             alert('Сентябрь. Осень.');
//             break;
//         case dayYears <= 10:
//             alert('Октябрь. Осень.');
//             break;
//         case dayYears <= 11:
//             alert('Ноябрь. Осень.');
//             break;
//         case dayYears <= 12:
//             alert('Декабрь. Зима.');
//             break;
//         default:
//             alert( 'Неккоректные данные');
//             break;
// }


let day = prompt ('Введите день');
let dayNum = Number(day);
    switch (true) {
        case dayNum >= 1 && dayNum <= 31 :
            alert('Январь. Зима.');
            break;
        case dayNum >= 32 && dayNum <= 59 :
            alert('Февраль. Зима.');
            break;
        case dayNum >= 60 && dayNum <= 90:
            alert('Март. Весна.');
            break;
        case dayNum >= 91 && dayNum <= 120:
            alert('Аперель. Весна.');
            break;
        case dayNum >= 121 && dayNum <= 151:
            alert('Май. Весна.');
            break;
        case dayNum >= 152 && dayNum <= 181:
            alert('Июнь. Лето.');
            break;
        case dayNum >= 182 && dayNum <= 212:
            alert('Июль. Лето');
            break;
        case dayNum >= 213 && dayNum <= 243:
            alert('Август. Лето.');
            break;
        case dayNum >= 244 && dayNum <= 273:
            alert('Сентябрь. Осень.');
            break;
        case dayNum >= 274 && dayNum <= 304:
            alert('Октябрь. Осень.');
            break;
        case dayNum >= 305 && dayNum <= 334:
            alert('Ноябрь. Осень.');
            break;
        case dayNum >= 335 && dayNum <= 365:
            alert('Декабрь. Зима.');
            break;
        default:
            alert( 'Неккоректные данные');
            break;
}