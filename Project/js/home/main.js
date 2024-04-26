import { initPage } from "../page-strcuture/initPage.js";
import { print4RandProducts } from "../print4RandPorducts.js";

initPage(document);

let topRatingContainer = document.querySelector(".topRating-list");
print4RandProducts(topRatingContainer);

let newArrivContainer = document.querySelector(".newArrivals-list");
print4RandProducts(newArrivContainer);
