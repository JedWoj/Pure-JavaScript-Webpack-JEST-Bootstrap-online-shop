import { getData } from "./utils/getDataFromApi";
 
export class LandingPage {
    
    constructor() {
        this.renderLandingProducts();
    }

    async renderLandingProducts() {
        const container = document.querySelector('.row__main');
        const products = await getData();
        products.forEach(product => {
            const div = `
            <div class="col col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                <div class="card">
                    <img class="card-img-top" src="${product.image}" alt="${product.title}">
                    <div class="card-body d-flex justify-content-end flex-column">
                        <h5 class="card-title">
                            ${product.title}
                        </h5>
                        <a href="offers/${product.id}.html" class="btn card__btn card__btn-${product.id} btn-primary">More Details</a>
                    </div>
                </div>
            </div>
            `;
    
            container.insertAdjacentHTML("beforeend", div);
        });

        // this.getDivs();
    }

    // getDivs() {
    //     const btns = document.querySelectorAll('.card__btn');
    //     console.log(btns);
    //     btns.forEach(btn => btn.addEventListener('click', (e) => {
    //         const {target} = e;
    //         const cardName = target.previousElementSibling.textContent.trim();
    //         console.log(cardName);
    //         targetted(cardName)
    //     }))
    // }
}

// export function targetted(target) {
//     console.log(target)
// }