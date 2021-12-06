import { $ } from './../utils'

class Nav {
    constructor() {

    }

    create(menu) {
        const menuDom = $("menu");
        const navigationMenu = document.querySelector('.app');
        navigationMenu.appendChild(menuDom);
        menu.map((item) => {
            item.element.addEventListener('click', () => {
                location.hash = '#' + item.name.toLowerCase();
            });  //menu.element
            item.element.innerText = item.name;
            menuDom.appendChild(item.element);
        });
        this.element = menuDom;
    }

    init() {
        // this.create();
        // return this.element
    }

}

const nav = new Nav();
export { nav };

