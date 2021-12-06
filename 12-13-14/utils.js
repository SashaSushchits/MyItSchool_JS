import { cartPage } from "./components/Cart";
import { main } from "./components/Main";
import { products } from "./components/Products";

export const $ = (tag) => {
    return document.createElement(tag);
}

export function openModal(htmlElement) {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-wrapper">
        <div class="modal-box">
            <span class="close">x</span>
            
        </div>
    </div>
    `)
    const modalBox = document.querySelector('.modal-box');
    modalBox.appendChild(htmlElement);
    const close = document.querySelector('.close');
    close.addEventListener('click', closeModal);
}
export function closeModal() {
    const modalWindow = document.querySelector('.modal-wrapper');
    modalWindow.remove();
    location.hash = `#products`
}

export const checkHash = (data) => {
    const hash = location.hash;
    console.log(hash);

    if(hash === '#cart') {
        cartPage.create(data) 
    } else {
        if (hash === '#main') {
            main.create()
        } else {
            if (hash.includes('#products')) {
                products(data);
            }
        }
    }
}
// window.addEventListener('hashchange', () => checkHash(dataHash))

export function setCookie(cname, cvalue, exdays = 10) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
}
export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        const value = c.substring(name.length, c.length)
        return JSON.parse(value);
      }
    }
    return "";
}

export function getTotalPrice(products) {
    const cart = getCookie('cart');
    let total = 0;
    cart.map(item => {
        const currentProduct = products.find(product => product.id === item.id);
        total+=currentProduct.price*item.count
    })
    return total.toFixed(2);
}