let Auto = function (marka, move) {
  let screen = 500;
  this.marka = marka;
  this.move = move;
  this.getInformation = function () {
    this.speed = prompt('Введите скорость движения:  в км/ч');
    this.time = prompt('Введите время движения:  в часах');
    this.operation();
  };
  this.operation = function () {
    this.distance = this.time * this.speed;
    this.result();
  };
  this.result = function () {
    console.log('Вы проехали: ' + this.distance + ' км со скоростью ' + this.speed + ' км/ч, за время ' + this.time + ' (в часах).' + ' Ваша машина - ' + this.marka + '.');
  }
}
let auto_1 = new Auto('Audi', true);

// auto_1.getInformation();

let auto_2 = new Auto('Volvo', false);
auto_2.phoneNumber = '+375-29-444-55-66';
console.log(auto_2);
console.dir(Auto);


let Autobus = function () {
  Auto.apply(this, arguments);
  this.numberOfSeats = function () {
    this.number = prompt('введите количество мест');
    debugger
    if (this.number > 0 && this.number !== '') this.getSeats();
    else alert('Введите число больше 0');
  }
  this.getSeats = function () {
    console.log('Ваш автобус: ' + this.number + ' местный');
  }
}

let autuBus_1 = new Autobus('Scania', true);
// console.log(autuBus_1);
// autuBus_1.getInformation();
// autuBus_1.numberOfSeats();

let Moto = function () {
  Autobus.apply(this, arguments)
  let parentResult = this.result;
  this.result = function () {
    parentResult.call(this);
    console.log('Вы ехали на moto - ' + this.marka + '. А не на машине.');
  }
}
let moto_1 = new Moto('BMW', true);
console.log(moto_1);
moto_1.getInformation();
// moto_1.numberOfSeats();