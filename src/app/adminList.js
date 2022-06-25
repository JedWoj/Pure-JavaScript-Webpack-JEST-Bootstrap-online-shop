import { getAllProducts } from "./utils/getDataFromApi";
export class AdminList {

    constructor() {
        this.arrProducts;
        this.checkUrl();
    }

    async checkUrl() {
        const url = window.location.href;
        if (url.includes('admin/products')) {
            const products = await getAllProducts();
            this.arrProducts = [...products];
            this.renderList(products);
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
            const {target} = e;
            const productId = target.dataset.id;
            this.deleteProduct(productId)
        }))
    }

    async deleteProduct(id) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
         })
        const data = await response.json();
        this.refreshList(data)
    }

    refreshList(prod) {
        const popup = document.querySelector('.deletePopup');
        const idx = this.arrProducts.findIndex(p => p.id === prod.id);
        this.arrProducts.splice(idx,1);
        this.renderList(this.arrProducts);
        popup.classList.add('deletePopup--active');
        this.okBtnHandler();
    }

    okBtnHandler() {
        const popup = document.querySelector('.deletePopup');
        popup.addEventListener('click', () => {
            popup.classList.remove('deletePopup--active');
        })
    }
}