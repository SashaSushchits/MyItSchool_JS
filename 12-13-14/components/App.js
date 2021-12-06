import {$, checkHash, getCookie} from './../utils'
import { cartPage } from './Cart';
import { main } from './Main';
import { nav } from './Nav'
import { products } from './Products.js';


class App {
    constructor() {
        this.menu = [
            {
                name: 'Main',  //если делать русскими, то не получается обратиться к хешу
                element: $('li'),
                action: main.init
            },
            {
                name: 'Products',
                element: $('li'),
                action: () => products(this.data),
            },
            {
                name: 'Cart',
                element: $('li'),
                action: () => cartPage.create(this.data),
            },
        ],
        this.container = $('main');
        this.container.classList.add('main');
        this.data = {
            products: [],
            // cartList: JSON.parse(localStorage.getItem('cart')) || [],
            cartList: getCookie('cart') || [],
        }
    }
    
    create() {
        const mainDiv = $("div")
        mainDiv.classList.add('app')
        this.element = mainDiv
    }
    
    render() {
        document.body.appendChild(this.element)
    }

    initHeader() {
        
        const metaCharset = $('meta')
        metaCharset.setAttribute('charset', "UTF-8")
        document.head.appendChild(metaCharset);

        const metaHttp = $('meta')
        metaHttp.setAttribute('http-equiv', "X-UA-Compatible");
        metaHttp.setAttribute('content', "IE=edge");
        document.head.appendChild(metaHttp);

        const metaName = $('meta')
        metaName.setAttribute('name', "viewport");
        metaName.setAttribute('content', "width=device-width, initial-scale=1.0");
        document.head.appendChild(metaName);

        const tegLink = $('link')
        tegLink.setAttribute('rel', "stylesheet");
        tegLink.setAttribute('href', "./style.css");
        document.head.appendChild(tegLink);

        const title = $('title')
        title.innerText ='Shop'
        document.head.appendChild(title);
    }
    
    init() {
        this.create()
        this.render()
        this.initHeader()
        
        nav.create(this.menu)
        document.body.appendChild(this.container)

        main.init()
        
        if(location.hash) {
            checkHash(this.data);
        } else {
            main.init;
        }

        
    }
}

const app = new App();
export const CONTAINER = app.container;


app.init()

const dataHash = app.data
window.addEventListener('hashchange', () => checkHash(dataHash))



// export default new App().init();
// const app = new App();
// export {app}

