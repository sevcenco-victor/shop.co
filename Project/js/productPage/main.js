import { createRatingStars } from "../review-module.js";
import { getDiscountedPrice } from "../price-module.js";
import { getColors } from "../color-module.js";
import { createSizePill } from "../sizePill-module.js";
import { createQtyPill } from "../qtyPill-module.js";
import { incrementQty } from "../incrementQty.js";
import { initPage } from "../page-strcuture/initPage.js";
import { addCartItem } from "../cartPage/addToCard.js";
import { print4RandProducts } from "../print4RandPorducts.js";

initPage(document);

var sectionProduct = document.querySelector(".section-product");
const selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
const product = selectedItem.product;
var navHistoryContainer = document.querySelector(".nav-history");
const historyArrow = `<svg class="history-icon" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5306 1.53063L6.5306 6.53063C6.46092 6.60055 6.37813 6.65602 6.28696 6.69388C6.1958 6.73173 6.09806 6.75122 5.99935 6.75122C5.90064 6.75122 5.8029 6.73173 5.71173 6.69388C5.62057 6.65602 5.53778 6.60055 5.4681 6.53063L0.468098 1.53063C0.327202 1.38973 0.248047 1.19864 0.248047 0.999378C0.248047 0.80012 0.327202 0.609024 0.468098 0.468128C0.608994 0.327231 0.800091 0.248077 0.999348 0.248077C1.19861 0.248077 1.3897 0.327231 1.5306 0.468128L5.99997 4.9375L10.4693 0.467503C10.6102 0.326607 10.8013 0.247452 11.0006 0.247452C11.1999 0.247452 11.391 0.326607 11.5318 0.467503C11.6727 0.608399 11.7519 0.799496 11.7519 0.998753C11.7519 1.19801 11.6727 1.38911 11.5318 1.53L11.5306 1.53063Z" fill="rgb(174, 174, 174)"></path>
</svg>`;

var pageCateg = document.createElement("a");
pageCateg.classList.add("history_item", "d-flex-row");
pageCateg.href = "shop.html";
pageCateg.innerHTML = product.clothType + historyArrow;

var productName = document.createElement("p");
productName.classList.add("history_item", "d-flex-row");
productName.innerHTML = product.title;

navHistoryContainer.appendChild(pageCateg);
navHistoryContainer.appendChild(productName);

sectionProduct.innerHTML = `
<div class="product-gallery gap-14 grid">
<div class="gallery gap-14 grid">
        <img class="gallery-item gallery-item--selected" src="${product.images[0].src}" alt="${product.images[0].alt}">
        <img class="gallery-item" src="${product.images[1].src}" alt="${product.images[1].alt}">
        <img class="gallery-item" src="${product.images[2].src}" alt="${product.images[2].alt}">
</div>
<a href="#">
    <img class="gallery-main" src="${product.images[0].src}" alt="${product.images[0].alt}">
</a>
</div>
`;

sectionProduct.innerHTML += `
<div class="product-content grid">
                <div class="content-header  gap-16 grid">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-rating min-content gap-16 grid-col">
                        <div class="rating_icons grid-col">
                            ${createRatingStars(product.rating).innerHTML}
                        </div>
                        <p class="rating_score">${
                          product.rating
                        } / <span>5</span></p>
                    </div>
                    ${
                      product.discount !== 0
                        ? `
                      <div class="product_discount min-content gap-12 grid-col">
                          <p class="product_price">$${getDiscountedPrice(
                            product.price,
                            product.discount
                          ).toFixed(2)}</p>
                          <p class="product_price product_price-old">$${product.price.toFixed(
                            2
                          )}</p>
                          <p class="pill discount-pill">${product.discount}%</p>
                      </div>`
                        : `
                      <p class="product_price">$${product.price.toFixed(2)}</p>`
                    }
                </div>

                <p class="product_description">
                    ${product.description}
                </p>
                <hr>
                <div class="product_colors min-content gap-16 grid">
                    <p style="text-wrap: nowrap">Select Color</p>
                </div>

                <hr>
                <div class="product_sizes gap-16 grid">
                    <p>Choose Size</p>
                    <div class="sizes gap-12 d-flex-row">
                    </div>
                </div>
                <hr>
                <div class="product-order gap-20 d-flex-row">
                   ${createQtyPill(1).outerHTML}
                    <div class="product_btn primary-btn pill pill-selected">
                        Add to Cart
                    </div>
                </div>
            </div> `;

let mainImage = document.querySelector(".gallery-main");

let images = document.querySelectorAll(".gallery-item");

let prevImage = images[0];

images.forEach((image) => {
  image.addEventListener("click", () => {
    mainImage.src = image.src;
    if (prevImage != image) {
      prevImage.classList.remove("gallery-item--selected");
      image.classList.add("gallery-item--selected");
      prevImage = image;
    }
  });
});

//#region product colors
let productColors = document.querySelector(".product_colors");
productColors.innerHTML += getColors(product).outerHTML;

let selectedColorSVG = `
  <svg width="14" height="11" viewBox="0 0 14 11" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M13.5306 2.03063L5.5306 10.0306C5.46092 10.1005 5.37813 10.156 5.28696 10.1939C5.1958 10.2317 5.09806 10.2512 4.99935 10.2512C4.90064 10.2512 4.8029 10.2317 4.71173 10.1939C4.62057 10.156 4.53778 10.1005 4.4681 10.0306L0.968098 6.53063C0.898333 6.46087 0.842993 6.37804 0.805236 6.28689C0.76748 6.19574 0.748047 6.09804 0.748047 5.99938C0.748047 5.90072 0.76748 5.80302 0.805236 5.71187C0.842993 5.62072 0.898333 5.53789 0.968098 5.46813C1.03786 5.39837 1.12069 5.34302 1.21184 5.30527C1.30299 5.26751 1.40069 5.24808 1.49935 5.24808C1.59801 5.24808 1.69571 5.26751 1.78686 5.30527C1.87801 5.34302 1.96083 5.39837 2.0306 5.46813L4.99997 8.4375L12.4693 0.969379C12.6102 0.828483 12.8013 0.749329 13.0006 0.749329C13.1999 0.749329 13.391 0.828483 13.5318 0.969379C13.6727 1.11028 13.7519 1.30137 13.7519 1.50063C13.7519 1.69989 13.6727 1.89098 13.5318 2.03188L13.5306 2.03063Z"
        fill="white" />
        </svg>`;
let colors = productColors.querySelectorAll(".colors-item");
let slectedColor = colors[0];
slectedColor.classList.add("d-flex-row", "colors-item--selected");
slectedColor.innerHTML += selectedColorSVG;

colors.forEach((color) => {
  color.addEventListener("click", () => {
    if (color != slectedColor) {
      color.classList.add("colors-item--selected");
      color.innerHTML += selectedColorSVG;

      slectedColor.classList.remove("colors-item--selected");
      slectedColor.innerHTML = "";
      slectedColor = color;
    }
  });
});
//#endregion

//#region  product sizes
let productSizes = document.querySelector(".sizes");
let selectedSize;

product.sizes.forEach((size, index) => {
  let newSize = createSizePill(size);

  newSize.addEventListener("click", () => {
    if (selectedSize) {
      selectedSize.classList.remove("pill-selected");
    }
    newSize.classList.add("pill-selected");
    selectedSize = newSize;
  });

  if (index === 0 && !selectedSize) {
    newSize.classList.add("pill-selected");
    selectedSize = newSize;
  }

  productSizes.appendChild(newSize);
});

//#endregion

//#region product-QTY

incrementQty(document);
let currQty = document.querySelector(".qty_num");
//#endregion

//#region  add to cart
let cart = JSON.parse(localStorage.getItem("cartProducts")) ?? [];
let addToCartBtn = document.querySelector(".product_btn");

addToCartBtn.addEventListener("click", () => {
  let cartItem = {
    product: product,
    props: {
      size: selectedSize.textContent,
      color: slectedColor.style.backgroundColor,
      quantity: currQty.textContent,
    },
  };
  addCartItem(cartItem.product, cartItem.props);
});

//#endregion
let newArrivContainer = document.querySelector(".newArrivals-list");
print4RandProducts(newArrivContainer);
