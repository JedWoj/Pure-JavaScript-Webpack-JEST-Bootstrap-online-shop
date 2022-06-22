import "./main.scss";

import {LandingPage} from "./app/renderLandingProducts"; 
import {opinionsSlider} from "./app/opinionsSlider";
import {offersHandler} from "./app/offersHandler";
import { Product} from "./app/product";
const opinions = new opinionsSlider();
const mainPage = new LandingPage();
const offers = new offersHandler();
const newProduct = new Product();


