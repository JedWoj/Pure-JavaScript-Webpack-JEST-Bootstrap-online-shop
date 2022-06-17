// import { getData } from "./utils/getDataFromApi";

// export async function renderMainProducts() {
//     const container = document.querySelector('.offers');
//     const products = await getData();
//     console.log(products);
//     products.forEach(product => {
//         const div = `
//         <div class="col col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
//             <div class="card">
//                 <img class="card-img-top" src="${product.image}" alt="${product.title}">
//                 <div class="card-body d-flex justify-content-end flex-column">
//                     <div class="card-wrap">
//                     <h5 class="card-title">
//                         ${product.title}
//                     </h5>
//                     <p class="card-price">
//                         ${product.price}$
//                     </p>
//                     </div>
//                     <a href="#" class="btn card__btn btn-primary">More Details</a>
//                 </div>
//             </div>
//         </div>
//         `;
        
//         container.insertAdjacentHTML("beforeend", div)
//     });
// }