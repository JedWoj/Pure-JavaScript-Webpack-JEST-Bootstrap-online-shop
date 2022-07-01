export class Basket {
    
    constructor() {
        this.checkUrl();
    }

    checkUrl() {
        const url = window.location.href;
        if (url.includes('/cart')) {
            this.getProductsFromLS();
            this.addButtonsHandlers();
        };
    }

    getProductsFromLS() {
        const products = [];
        for (let i = 0; i < localStorage.length; i++) {
            const item = JSON.parse(localStorage.getItem(`${i}`));
            products.push(item);
        }
        products.length > 0 ? this.renderProductsInBasket(products) : this.displayMsg();
        return products 
    }

    displayMsg() {
        const emptyMsg = document.querySelector('.checkout__empty');
        const content = document.querySelector('.checkout__content');
        emptyMsg.classList.add('checkout__empty--active');
        content.style.display = 'none';
    }

    renderProductsInBasket(products) {
        const table = document.querySelector('.table__body');
        table.innerHTML = '';
        products.forEach((product,i) => {
            const div = `
            <tr>
                <th class="table__On" scope="row">${i + 1}</th>
                <td class="table__title">${product.title}</td>
                <td>
                    <figure class="table__img-box">
                        <img src="${product.image}" alt="${product.title}"
                            class="table__img">
                    </figure>
                </td>
                <td class="table__price">${product.price}$</td>
            </tr>
            `
            table.insertAdjacentHTML('beforeend', div);
        })
        
        document.querySelector('.checkout__full-price-num').textContent = `${this.totalPrice(products)}$`;
    }

    totalPrice(products) {
        const totalPrice = products.map(prod => prod.price).reduce((a,b) => {
            return a + b;
        },0).toFixed(2);
        return totalPrice
    }

    addButtonsHandlers() {
        const buttons = document.querySelectorAll('.checkout__btn');
        buttons.forEach(btn => btn.addEventListener('click', () => {
            btn.classList.contains('checkout__btn--pay') ? this.payForOrder(): this.cancelOrder();
        }))
    }

    renderPopup() {
        const products = this.getProductsFromLS();
        const productsNames = products.map(prod => prod.title).join().replace(/,/g, ", ");
        const container = document.querySelector('.checkout');
        const popup = `
            <section class="popup">
                <div class="popup__body">
                    <header class="popup__header">
                        <h2 class="popup__heading">
                            Success!
                        </h2>
                    </header>
                    <div class="popup__content">
                        <p class="popup__txt">
                            You have bought ${productsNames} for ${this.totalPrice(products)}$!
                        </p>
                        <button class="popup__btn btn btn-success">
                            OK
                        </button>
                    </div>
                </div>
            </section>
            `
            container.insertAdjacentHTML('beforeend', popup);
    }

    payForOrder() {
        this.renderPopup();
        const popup = document.querySelector('.popup');
        popup.classList.add('popup--active');
        this.popupBtnHandler();
    }

    popupBtnHandler() {
        const btn = document.querySelector('.popup__btn');
        btn.addEventListener('click', this.clearPopup);
    }

    clearPopup() {
        const popup = document.querySelector('.popup');
        popup.classList.remove('popup--active');
        location.href = 'index.html';
        localStorage.clear();
    }

    cancelOrder() {
        localStorage.clear();
        this.displayMsg();
    }
}