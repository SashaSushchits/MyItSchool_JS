let Auto = function(marka, move) {
  this.marka = marka;
  this.move = move;
  this.getInformation = function() {
    this.speed = prompt('Введите скорость движения:  в км/ч');
    this.time = prompt('Введите время движения:  в часах');
    this.operation();
  };
  this.operation = function() {
    this.distance = this.time * this.speed;
    this.result();
  };
  this.result = function() {
    document.write('Вы проехали: ' + this.distance + ' км со скоростью ' + this.speed + ' км/ч, за время ' + this.time + ' (в часах).' + ' Ваша машина - ' + this.marka + '.');
  }
}
let auto_1 = new Auto('Audi', true);

auto_1.getInformation();

let auto_2 = new Auto('Volvo', false);
auto_2.phoneNumber = '+375-29-444-55-66';
console.log(auto_2);

