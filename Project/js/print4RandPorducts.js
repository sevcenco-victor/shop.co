import { productList } from "./product-list.js";
import { createProductCard } from "./productCard-module.js";

export function print4RandProducts(container) {
  let newArrivList = [];
  for (let index = 0; index < 4; index++) {
    let randomIndex = Math.floor(Math.random() * productList.length);
    newArrivList.push(productList[randomIndex]);
  }
  newArrivList.forEach((product) => {
    container.appendChild(createProductCard(product));
  });
}
