const D = function(element) {
    
    this.elem = document.createElement(element);

    this.attr = function (name, value) {
        if (value) this.elem.setAttribute(name, value);

        return this.elem.getAttribute(name);
    }

    this.html = function(value){
        return this.elem.innerHTML = value;
    }

    this.search = function(selector) {
        if(this.elem.querySelector(selector)) return this.elem.querySelector(selector);
        return document.querySelector(selector);
    }

    this.addClass = function(className) {
        return this.elem.classList.add(className);
    }

    this.removeClass = function(className) {
        return this.elem.classList.remove(className);
    }

    this.toggleClass = function(className) {
        return this.elem.classList.toggle(className);
    }

    this.hasClass = function(className) {
        return this.elem.classList.contains(className);
    }

    this.append = function(newElem, beforElem) {
        if (beforElem) this.elem.insertBefore(newElem.elem, beforElem);
        
        return this.elem.appendChild(newElem.elem);
    }

    this.on= function(eventName, funcName) {
        this.elem.addEventListener(eventName, funcName);
    }
};


const d = new D('div');
const p2 = new D('p2');
const btn = new D ('button');

console.log(d);
console.log(p2);

d.attr('class' , 'header');
p2.attr('class' , 'main');

d.html('TEXT text TEXT text TEXT');
p2.html('MAIN main MAIN');
btn.html('SEND');

d.search('.header');
p2.search('.main');
console.log (d.search('.header'));
console.log (p2.search('.main'));

d.addClass('header_2');
p2.addClass('main_2');

d.removeClass('header');
p2.removeClass('main');

// d.toggleClass('header_2');
// p2.toggleClass('main_2');

d.hasClass('header_2');
p2.hasClass('main_2');
console.log (d.hasClass('header_2'));
console.log (p2.hasClass('main'));

d.append(p2);
d.append(btn);
d.search('.main_2');
console.log (d.search('.main_2'));

function changeColor () {
    debugger
    d.search('.main_2').innerHTML = '';
};

btn.on('click' , changeColor);

document.body.appendChild(d.elem);
