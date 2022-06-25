import "./main.scss";

import {LandingPage} from "./app/renderLandingProducts"; 
import {opinionsSlider} from "./app/opinionsSlider";
import {offersHandler} from "./app/offersHandler";
import { Product} from "./app/product";
import { Basket } from "./app/basketHandler";
import { AdminLogin } from "./app/adminLogin";
import { AdminList} from "./app/adminList";

// const opinions = new opinionsSlider();
const adminLogin = new AdminLogin();
const mainPage = new LandingPage();
const newProduct = new Product();
const offers = new offersHandler();
const basket = new Basket();
// const adminList = new AdminList()


