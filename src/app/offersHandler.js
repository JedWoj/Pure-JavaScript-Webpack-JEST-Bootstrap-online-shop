import { getAllProducts } from "./utils/getDataFromApi";

export class offersHandler {
    constructor() {
        this.products;
        this.active;
        this.page = -1;        
        this.getProducts();
    }

    async getProducts() {
        this.products = await getAllProducts();
        console.log(this.products);
        this.renderProducts(this.products);
        this.active = this.products;
        this.seeMoreHandler();
    }

    renderProducts(arr) {
        const container = document.querySelector('.offers');
        this.page++;
        for (let i = 0 + 8 * this.page; i < 8 + 8*this.page; i++) {
                if(!arr[i]) return 
                const div = `
                    <div class="col col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                        <div class="card">
                            <img class="card-img-top" src="${arr[i].image}" alt="${arr[i].title}">
                            <div class="card-body d-flex justify-content-end flex-column">
                                <div class="card-wrap">
                                <h5 class="card-title">
                                    ${arr[i].title}
                                </h5>
                                <p class="card-price">
                                    ${arr[i].price}$
                                </p>
                                </div>
                                <a href="#" class="btn card__btn btn-primary">More Details</a>
                            </div>
                        </div>
                    </div>
                    `;
                    
                container.insertAdjacentHTML("beforeend", div);
            }
        }

        seeMoreHandler() {
            const btn = document.querySelector('.btn-load');
            btn.addEventListener('click', this.renderProducts.bind(this,this.active));
        }
    }
