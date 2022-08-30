import {
    getAllProducts
} from "./utils/getDataFromApi";
export class AdminList {

    constructor() {
        this.arrProducts;
        this.checkUrl();
    }

    async checkUrl() {
        const url = window.location.href;
        if (url === 'http://localhost:8080/admin/products.html' || url === 'https://main--onilneshop.netlify.app/admin/products.html') {
            const products = await getAllProducts();
            if (products === undefined) {
                const container = document.querySelector('.list__list');
                container.innerHTML = `<h2 class='h2 errorMsg'>Timeout! Please check your internet connection and reload your page!</h2>`;
            } else {
                this.arrProducts = [...products];
                this.renderList(products);
            }
        };
    }

    async renderList(products) {
        const container = document.querySelector('.list__list');
        container.innerHTML = '';
        products.forEach(prod => {
            const div = `
        <li class="list__item">
            <img src="${prod.image}" alt="${prod.title}" class="list__item-img">
            <p class="list__item-id">
                id: ${prod.id}
            </p>
            <p class="list__item-content">
                ${prod.title}
            </p>
            <button type="button" data-id="${prod.id}" class="btn-close list__item-close" aria-label="Close"></button>
        </li>
        `
            container.insertAdjacentHTML('beforeend', div);
        })
        this.deleteHandler();
    }

    deleteHandler() {
        const btns = document.querySelectorAll('.list__item-close');
        btns.forEach(btn => btn.addEventListener('click', (e) => {
            const {
                target
            } = e;
            const productId = target.dataset.id;
            this.deleteProduct(productId);
        }))
    }

    async deleteProduct(id) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        })
        const data = await response.json();
        this.refreshList(data);
    }

    findIndex(arr, prod) {
        return arr.findIndex(p => p.id === prod.id);
    }

    refreshList(prod) {
        const popup = document.querySelector('.deletePopup');
        const idx = this.findIndex(this.arrProducts, prod);
        this.arrProducts.splice(idx, 1);
        this.renderList(this.arrProducts);
        popup.classList.add('deletePopup--active');
        this.okBtnHandler();
    }

    okBtnHandler() {
        const popup = document.querySelector('.deletePopup');
        const popupBtn = document.querySelector('.deletePopup__btn');
        popupBtn.addEventListener('click', () => {
            popup.classList.remove('deletePopup--active');
        })
    }
}