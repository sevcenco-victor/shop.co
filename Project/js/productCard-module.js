import { createRatingStars } from "./review-module.js";
import { getDiscountedPrice } from "./price-module.js";
import { addCartItem } from "./cartPage/addToCard.js";

export function createProductCard(product) {
  let cardItem = document.createElement("div");

  cardItem.classList.add("product-card");
  cardItem.classList.add("d-flex-col");
  cardItem.innerHTML = `

    <div class="card_img">
        <img src="${product.images[0].src}" alt="${product.images[0].alt}">
    </div>
    <div class="card_context d-flex-col">
        <p class="card_title">${product.title}</p>
        <div class="card_rating d-flex-row flex-wrap">
            <div class="rating_icons d-flex-row ">
                ${createRatingStars(product.rating).innerHTML}
            </div>
            <p class="rating_score">${product.rating}/<span>5</span></p>
        </div>
        ${
          product.discount !== 0
            ? `
        <div class="product_discount d-flex-row">
            <p class="product_price">$${getDiscountedPrice(
              product.price,
              product.discount
            ).toFixed(2)}</p>
            <p class="product_price product_price-old">$${product.price}</p>
            <p class="pill discount-pill">${product.discount}%</p>
        </div>`
            : `
        <p class="product_price">$${product.price.toFixed(2)}</p>
`
        }
        
      </div>
      <div class="card-actions d-flex-row">
          <a href="product-details.html" class="view-action pill secondary-btn">View</a>
          <div class="addToCart-action pill primary-btn">Add To Cart</div>
        </div>
`;
  cardItem.querySelector(".view-action").addEventListener("click", () => {
    let selectedProduct = {
      product: product,
      props: {
        color: product.colors[0],
        size: product.sizes[0],
        quantity: 1,
      },
    };
    localStorage.setItem("selectedItem", JSON.stringify(selectedProduct));
  });

  cardItem.querySelector(".addToCart-action").addEventListener("click", () => {
    let newProduct = {
      product: product,
      props: {
        color: product.colors[0],
        size: product.sizes[0],
        quantity: 1,
      },
    };
    addCartItem(newProduct.product, newProduct.props);
  });

  return cardItem;
}
