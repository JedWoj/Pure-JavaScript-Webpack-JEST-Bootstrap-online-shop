import "./main.scss";

import { renderProducts } from "./app/renderProducts";
import {opinionsSlider} from "./app/opinionsSlider";

const opinions = new opinionsSlider();
console.log(opinions.dots,'lolo');

renderProducts();