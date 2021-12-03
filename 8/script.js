console.log(document.querySelector('html'));
let html = document.querySelector('html');
html.setAttribute('lang' , 'en');

let meta = document.createElement('meta');
meta.setAttribute('charset' , 'UTF-8');
document.head.appendChild(meta);

let meta_2 = document.createElement('meta');
meta_2.setAttribute('http-equiv' , 'X-UA-Compatible');
meta_2.setAttribute('content' , 'IE=edge');
document.head.appendChild(meta_2);

let meta_3 = document.createElement('meta');
meta_3.setAttribute('name' , 'viewport');
meta_3.setAttribute('content' , 'width=device-width, initial-scale=1.0');
document.head.appendChild(meta_3);

let link = document.createElement('link');
link.setAttribute('rel' , 'preconnect');
link.setAttribute('href' , 'https://fonts.googleapis.com');
document.head.appendChild(link);
let link_2 = document.createElement('link');
link_2.setAttribute('rel' , 'preconnect');
link_2.setAttribute('href' , 'https://fonts.gstatic.com');
link_2.setAttribute('crossorigin' , '');
document.head.appendChild(link_2);
let link_3 = document.createElement('link');
link_3.setAttribute('href' , 'https://fonts.googleapis.com/css2?family=Arvo&display=swap');
link_3.setAttribute('rel' , 'stylesheet');
document.head.appendChild(link_3);
let link_4 = document.createElement('link');
link_4.setAttribute('rel' , 'preconnect');
link_4.setAttribute('href' , 'https://fonts.googleapis.com');
document.head.appendChild(link_4);
let link_5 = document.createElement('link');
link_5.setAttribute('rel' , 'preconnect');
link_5.setAttribute('href' , 'https://fonts.gstatic.com');
link_5.setAttribute('crossorigin', '');
document.head.appendChild(link_5);
let link_6 = document.createElement('link');
link_6.setAttribute('href' , 'https://fonts.googleapis.com/css2?family=Arvo&family=Open+Sans&display=swap');
link_6.setAttribute('rel' , 'stylesheet');
document.head.appendChild(link_6);
let link_7 = document.createElement('link');
link_7.setAttribute('href' , 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
link_7.setAttribute('rel' , 'stylesheet');
document.head.appendChild(link_7);

let title = document.createElement('title');
title.innerHTML = 'Home_work_8';
document.head.appendChild(title);

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let header_1 = document.createElement('div');
header_1.classList.add('header');
container.appendChild(header_1);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1.classList.add('h_1');
header_1.appendChild(h1);
let p = document.createElement('p');
p.classList.add('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
header_1.appendChild(p);

let main = document.createElement('div');
main.classList.add('main');
container.appendChild(main);

let block = document.createElement('div');
block.classList.add('block');
main.appendChild(block);
let p_1 = document.createElement('p');
p_1.innerHTML = 'FREELANCER';
p_1.classList.add('p_1');
block.appendChild(p_1);
let h3_1 = document.createElement('h3');
h3_1.innerHTML = 'Initially designed to';
h3_1.classList.add('h3_1');
block.appendChild(h3_1);
let p_1_1 = document.createElement('p');
p_1_1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p_1_1.classList.add('p_1_1');
block.appendChild(p_1_1);
let button_1 = document.createElement('button');
button_1.innerHTML = 'Start here';
button_1.classList.add('button_1');
block.appendChild(button_1);

let block_2 = document.createElement('div');
block_2.classList.add('block');
block_2.classList.add('block_2');
main.appendChild(block_2);
let p_2 = document.createElement('p');
p_2.innerHTML = 'STUDIO';
p_2.classList.add('p_2');
p_2.classList.add('p_1');
block_2.appendChild(p_2);
let h3_2 = document.createElement('h3');
h3_2.innerHTML = 'Initially designed to';
h3_2.classList.add('h3_2');
h3_2.classList.add('h3_1');
block_2.appendChild(h3_2);
let p_2_1 = document.createElement('p');
p_2_1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p_2_1.classList.add('p_2_1');
p_2_1.classList.add('p_1_1');
block_2.appendChild(p_2_1);
let button_2 = document.createElement('button');
button_2.innerHTML = 'Start here';
button_2.classList.add('button_2');
button_2.classList.add('button_1');
block_2.appendChild(button_2);

let style = document.createElement('style');
style.innerHTML = `
* {
  margin: 0;
  padding: 0;
  border: 0;
}
.header {
  text-align: center;
  margin: 55px 0;
}
.main {
  display: flex;
  margin: 0 auto;
  width: 80%;
  justify-content: center;
}
.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 401px;
  height: 480px;
  border: solid 1px #E8E9ED;
}
.block_2 {
  background: #8F75BE;
}
.h_1 {
  font-family: Arvo;
  font-weight: normal;
  font-size: 36px;
  line-height: 48px;
  color: #212121;
}
.p {
  font-family: Open Sans;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  color: #9FA3A7;
}
.p_1 {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;
  color: #9FA3A7;
}
.h3_1 {
  width: 210px;
  text-align: center;
  font-family: Arvo;
  font-weight: normal;
  font-size: 36px;
  line-height: 46px;
  color: #212121;
}
.p_1_1{
  width: 210px;
  height: 44px;
  font-family: Open Sans;
  margin-top: 25px;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: #9FA3A7;
}
.button_1 {
  width: 147px;
  height: 46px;
  margin-top: 50px;
  border-radius: 40px;
  border: 3px solid #FFC80A;

  font-family: Montserrat;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  color: #212121;
}
.p_2 {
  color: #FFC80A;
}
.h3_2,
.p_2_1,
.button_2 {
  color: #FFFFFF;
}
.button_2 {
  background: #8F75BE;
}
`
document.head.appendChild(style);