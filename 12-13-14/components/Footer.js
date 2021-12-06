import {$} from './../utils';
import { CONTAINER } from './App'

class Footer {
    constructor() {
       
    }
    
    create() {
        CONTAINER.innerHTML = '';
        CONTAINER.insertAdjacentHTML('afterend', `
        <div class='footer'></div>
        `)

        const footer = document.querySelector('.footer')
        const listLink_1 = $('a');
        listLink_1.classList.add('footer-1');
        listLink_1.setAttribute('href', "#");
        listLink_1.innerText = "+375 (29) 123-45-77"

        const listLink_2 = $('a');
        listLink_2.classList.add('footer-2');
        listLink_2.setAttribute('href', "#");
        listLink_2.innerText = "+375 (29) 123-45-66"

        const listLink_3 = $('a');
        listLink_3.classList.add('footer-3');
        listLink_3.setAttribute('href', "#");
        listLink_3.innerText = "info@shop.ru"

        const listLink_4 = $('a');
        listLink_4.classList.add('footer-4');
        listLink_4.setAttribute('href', "#");
        listLink_4.innerText = "г. Минск"

        const input_1 = $('input');
        input_1.classList.add('footer-5');
        input_1.setAttribute('type', "text");
        input_1.setAttribute('placeholder', "Имя");

        const input_2 = $('input');
        input_2.classList.add('footer-6');
        input_2.setAttribute('type', "text");
        input_2.setAttribute('placeholder', "Фамилия");

        const input_3 = $('input');
        input_3.classList.add('footer-7');
        input_3.setAttribute('type', "text");
        input_3.setAttribute('placeholder', "Телефон");

        const input_4 = $('input');
        input_4.classList.add('footer-8');
        input_4.setAttribute('type', "text");
        input_4.setAttribute('placeholder', "E-mail");

        const textarea = $('textarea');
        textarea.classList.add('footer-9');
        textarea.setAttribute('cols', "60");
        textarea.setAttribute('rows', "5");
        textarea.setAttribute('placeholder', "Сообщение");

        const button = $('button');
        button.classList.add('footer-11');
        button.classList.add('send');
        button.innerText = "Отправить"

        footer.appendChild(listLink_1)
        footer.appendChild(listLink_2)
        footer.appendChild(listLink_3)
        footer.appendChild(listLink_4) 

        footer.appendChild(input_1) 
        footer.appendChild(input_2) 
        footer.appendChild(input_3) 
        footer.appendChild(input_4)

        footer.appendChild(textarea)
        footer.appendChild(button)
    }

    init() {
    }
}

const footer = new Footer();
export {footer};