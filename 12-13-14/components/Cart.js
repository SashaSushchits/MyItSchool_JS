import { $, getCookie, getTotalPrice, setCookie } from '../utils'
import { CONTAINER } from './App';


class Cart {
    constructor() {

    }

    create(data) {
        CONTAINER.innerHTML = '';
        CONTAINER.insertAdjacentHTML('afterbegin', `
            <h1 class='cart'> Корзина: </h1>
        `);
        const totalPrice = $('strong');
        const products = JSON.parse(localStorage.getItem('products'));
        const cartList = getCookie('cart');
        console.log(data.cartList)
        if (data.cartList.length === 0) {
            const title = $('h1');
            title.innerText = 'Ваша корзина пуста';
            CONTAINER.appendChild(title)
        } else {
            cartList.map(cartItem => {
                const currentProduct = products.find(item => item.id === cartItem.id);
                console.log(currentProduct)
                const cartContainer = $('div');
                cartContainer.classList.add('cart-container');
                const title = $('h2');
                title.innerHTML = currentProduct.title;
                const img = new Image(100);
                img.src = currentProduct.image;

                const price = $('strong');
                price.innerText = (cartItem.count * currentProduct.price).toFixed(2);
                const counterBlock = $('div');
                counterBlock.classList.add('counter-block');
                const countMinus = $('span');
                countMinus.innerText = '—';
                const countPlus = $('span');
                countPlus.innerText = '+';
                const countText = $('strong');
                countText.innerText = cartItem.count;
                countMinus.addEventListener('click', () => {
                    if (cartItem.count > 1) {
                        cartItem.count--;
                        countText.innerText = cartItem.count;
                        price.innerText = (cartItem.count * currentProduct.price).toFixed(2);
                        setCookie('cart', cartList);
                        totalPrice.innerText = getTotalPrice(products);
                    }
                });
                countPlus.addEventListener('click', () => {
                    cartItem.count++;
                    countText.innerText = cartItem.count;
                    price.innerText = (cartItem.count * currentProduct.price).toFixed(2);
                    // localStorage.setItem('cart', JSON.stringify(cartList))
                    setCookie('cart', cartList);
                    totalPrice.innerText = getTotalPrice(products)
                })
                counterBlock.appendChild(countMinus);
                counterBlock.appendChild(countText);
                counterBlock.appendChild(countPlus);
    
                cartContainer.appendChild(img);
                cartContainer.appendChild(title);
                cartContainer.appendChild(counterBlock);
                cartContainer.appendChild(price);
    
                CONTAINER.appendChild(cartContainer);
    
                const btnRemove = $('button');
                btnRemove.innerText = 'Удалить данный товар';
                btnRemove.addEventListener('click', () => {
                    const filteredCartList = cartList.filter(item => item.id !== cartItem.id);
                    // localStorage.setItem('cart', JSON.stringify(filteredCartList));
                    setCookie('cart', filteredCartList)
                    this.create(data);
                })
    
                cartContainer.appendChild(btnRemove);
            }) 
        }

        totalPrice.innerText = getTotalPrice(products)
        document.querySelector('.cart').appendChild(totalPrice)
    }

    init() {

    }

}

const cartPage = new Cart();
export {cartPage};