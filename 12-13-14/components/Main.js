import {$} from './../utils'
import { CONTAINER } from './App'
import { products } from './Products';
import { footer } from './Footer';


class Main {
    constructor() {
       
    }
    
    create() {
        CONTAINER.innerHTML = '';
        CONTAINER.insertAdjacentHTML('afterbegin', `
        <h1> Главная страница </h1>
        `)
        
        const btnLink = document.querySelector('.main');
        const link = $('button');
        link.classList.add('btnLink')
        link.innerText = 'Скорее переходи к товарам, просто нажми здесь';
        link.addEventListener('click', products)
        btnLink.appendChild(link);
        this.element = btnLink;

        
    }

    init() {
        this.create()
        footer.create()
        // return this.element
    }

}

const main = new Main();
export {main};

