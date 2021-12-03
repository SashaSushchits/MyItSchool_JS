// let Auto = function(marka, move) {
//   this.marka = marka;
//   this.move = move;
//   this.getInformation = function() {
//     this.speed = prompt('Введите скорость движения:  в км/ч');
//     this.time = prompt('Введите время движения:  в часах');
//     this.operation();
//   };
//   this.operation = function() {
//     this.distance = this.time * this.speed;
//     this.result();
//   };
//   this.result = function() {
//     document.write('Вы проехали: ' + this.distance + ' км со скоростью ' + this.speed + ' км/ч, за время ' + this.time + ' (в часах).' + ' Ваша машина - ' + this.marka + '.');
//   }
// }
// let auto_1 = new Auto('Audi', true);

// auto_1.getInformation();

// let auto_2 = new Auto('Volvo', false);

// auto_2.getInformation();

// auto_2.phoneNumber = '+375-29-444-55-66';
// console.log(auto_2);
// console.log('speed' in auto_1);





let Contacts = function() {
  this.name = prompt('Введите Ваше имя: ');
  this.sorname = prompt('Введите Вашу фамилию: ');
  this.age = prompt('Сколько Вам лет: ');
  this.phoneNumber = prompt('Введите Ваш номер телефона: +375-ХХ-ХХХ-ХХ-ХХ');
  this.email = prompt('Укажите Ваш email: xxxxx@xxxx.com');
};

let contacts_1 = new Contacts();
console.log(contacts_1);

let contacts_2 = new Contacts();
console.log(contacts_2);
console.log(new Contacts());