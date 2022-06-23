import { getAllProducts } from "./utils/getDataFromApi";
export class Product {
    
    constructor() {;
        this.renderProduct();
    }

    async getProducts() {
        const products = await getAllProducts();
        return products
    }

    async getProduct() {
        const url = window.location.href;
        const idx = url.lastIndexOf('/')
        const id = url.slice(idx + 1, -5)
        const product = await this.findProduct(id);
        return product;
    }

    async findProduct(id) {
        const products = await this.getProducts();
        const [product] = products.filter(prod => prod.id === +id);
        return product;
    }
    
    async renderProduct() {
        const product = await this.getProduct();
        const container = document.querySelector('.product__wrap');
        const div = `
        <figure class="product__img-box gx-0">
            <img class="img-fluid" src="${product.image}" alt="${product.title}">
        </figure>
        <div class="product__body">
            <div class="product__description">
                <h3 class="product__title">
                    ${product.title}
                </h3>
                <p class="product__txt">
                    ${product.description}
                </p>
            </div>
            <div class="product__info">
                <h4 class="product__price">
                    Price: <span class="product__price-num">${product.price}$</span>
                </h4>
                <div class="product__additional-info">
                    <h5 class="product__rate">
                        Users score: <span class="product__rate-num">${product.rating.rate}/5</span>
                    </h5>
                    <h6 class="product__count">
                        Products left in stock: <span class="product__count-num">${product.rating.count}</span>
                    </h6>
                </div>
            </div>
        </div>
        <button type="button" class="product__btn btn btn-primary">Add to cart</button>
        `;

        container.insertAdjacentHTML("beforeend", div)

        this.buttonClickHandler(product);
    }

    buttonClickHandler() {
        const btn = document.querySelector('.product__btn');
        btn.addEventListener('click', this.addToCart.bind(this))
    }

    async addToCart() {
        const product = await this.getProduct();
        localStorage.setItem(`${product.id}`, JSON.stringify(product));
    }
}