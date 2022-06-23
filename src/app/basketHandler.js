export class Basket {
    
    constructor() {
        this.getProductsFromLS();
        this.addButtonsHandlers();
    }

    getProductsFromLS() {
        const products = [];
        for (let i = 0; i < localStorage.length; i++) {
            const item = JSON.parse(localStorage.getItem(`${i}`));
            products.push(item);
        }
        this.renderProductsInBasket(products);
    }

    renderProductsInBasket(products) {
        const table = document.querySelector('.table__body');
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
    }

    addButtonsHandlers() {
        const buttons = document.querySelectorAll('.checkout__btn');
        buttons.forEach(btn => btn.addEventListener('click', () => {
            btn.classList.contains('checkout__btn--pay') ? this.payForOrder(): this.cancelOrder();
        }))
    }

    payForOrder() {
        const popup = document.querySelector('.popup');
        popup.classList.add('popup--active');
        this.popupBtnHandler();
    }

    popupBtnHandler() {
        const btn = document.querySelector('.popup__btn');
        btn.addEventListener('click', this.clearBasket)
    }

    clearBasket() {
        const popup = document.querySelector('.popup');
        popup.classList.remove('popup--active');
        location.href = 'index.html';
    }

    cancelOrder() {
        console.log('cancel');
    }
}