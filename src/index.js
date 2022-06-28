import "./main.scss";

import {LandingPage} from "./app/renderLandingProducts"; 
import {OpinionsSlider} from "./app/opinionsSlider";
import {OffersHandler} from "./app/offersHandler";
import { Product} from "./app/product";
import { Basket } from "./app/basketHandler";
import { AdminLogin } from "./app/adminLogin";
import { AdminList} from "./app/adminList";
import { AdminAdd } from "./app/adminAdd";

const opinions = new OpinionsSlider();
const adminLogin = new AdminLogin();
const mainPage = new LandingPage();
const newProduct = new Product();
const offers = new OffersHandler();
const basket = new Basket();
const adminList = new AdminList();
const adminAdd = new AdminAdd();


