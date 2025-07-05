import { initPage } from "../page-strcuture/initPage.js";
import { getDiscountedPrice } from "../price-module.js";
import { createCartProduct } from "./cartProduct-module.js";
import { cuponList } from "./cuponList.js";

const deliveryCost = 15;
var discount = 0;

initPage(document);

let historyRow = document.querySelectorAll(".history_item");
historyRow[historyRow.length - 1].href = "cart.html";
historyRow[historyRow.length - 1].innerHTML = document.title;
function getDiscount(cuponList, testCupon) {
  const foundCupon = cuponList.find((cupon) => cupon === testCupon);
  if (foundCupon) {
    const discountValue = parseInt(foundCupon.split("-")[1], 10);
    return discountValue;
  }
  return 0;
}
//#region page structure
//#endregion
let discountText = document.querySelector(".delivery-text");

var cartListContainer = document.querySelector(".cart-list");
let cartItems = JSON.parse(localStorage.getItem("cartProducts")) ?? [];

let subtotalPrice = document.querySelector("#subtotalPrice");

let discountPrice = document.querySelector("#discountPrice");

let deliveryPrice = document.querySelector("#deliveryPrice");
deliveryPrice.textContent = "$" + deliveryCost;

let totalPrice = document.querySelector("#totalPrice");
totalPrice.textContent = "$33";

updateTotals();

printCartProducts(cartItems);

let discountBtn = document.querySelector(".dicount_btn");
let cuponInput = document.querySelector("#cuponInput");
discountBtn.addEventListener("click", () => {
  discount = getDiscount(cuponList, cuponInput.value);
  updateTotals();
});
function updateTotals() {
  let newSum = getNewSum(cartItems);
  let newDiscount = calcDiscount(newSum);
  discountText.textContent = "Discount (" + discount * -1 + "%)";
  subtotalPrice.textContent = "$" + newSum;
  discountPrice.textContent = "-$" + newDiscount;

  totalPrice.textContent =
    "$" + (newSum + newDiscount * -1 + deliveryCost).toFixed(2);
}
function getNewSum() {
  let sum = 0;
  let productPrices = document.querySelectorAll(
    ".content-layout .price-discount"
  );
  productPrices.forEach((product) => {
    sum += Number(product.textContent.slice(1));
  });

  return Number(sum.toFixed(2));
}
function calcDiscount(total) {
  return Number(((total * discount) / 100).toFixed(2));
}
function printCartProducts(productList) {
  let noProductError = document.createElement("div");
  noProductError.classList.add("d-flex-col", "flex-al-center");
  noProductError.style.gap = "12px";
  noProductError.innerHTML = `
    <img style="width:80px; height:80px;filter: contrast(0);"
      src="https://cdn0.iconfinder.com/data/icons/shopping-ecommerce-8/24/sad-frown-basket-face-shopping-512.png"
      alt="cart-img"
    />
    <p>Your cart is currently empty!</p>
    <a href="./shop.html" class="secondary-btn pill">Back to Shop</a>
  `;

  cartListContainer.innerHTML = "";
  if (productList.length == 0) {
    cartListContainer.classList.add("justfy-center");
    cartListContainer.appendChild(noProductError);
  } else {
    cartListContainer.classList.remove(".justfy-center");
  }
  let productCounter = 0;
  productList.forEach((item, index) => {
    let newCartProduct = createCartProduct(item.product, item.props);

    //#region qty Response
    let productQtyBtns = newCartProduct.querySelectorAll(".qty_btn");
    let currQty = newCartProduct.querySelector(".qty_num");
    let currPrice = newCartProduct.querySelector(".price");

    productQtyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.textContent == "-" && Number(currQty.textContent) > 1) {
          currQty.textContent = Number(currQty.textContent) - 1;
          item.props.quantity = Number(item.props.quantity) - 1;
        } else if (btn.textContent == "+") {
          currQty.textContent = Number(currQty.textContent) + 1;
          item.props.quantity = Number(item.props.quantity) + 1;
        }

        currPrice.textContent =
          "$" +
          Number(
            Number(currQty.textContent) *
              getDiscountedPrice(
                item.product.price,
                item.product.discount
              ).toFixed(2)
          ).toFixed(2);
        updateTotals();

        // Update local storage
        productList[index] = item;
        localStorage.setItem("cartProducts", JSON.stringify(productList));
      });
    });
    //#endregion

    cartListContainer.appendChild(newCartProduct);

    if (++productCounter < productList.length)
      cartListContainer.appendChild(document.createElement("hr"));
  });
  updateTotals();
  attachDeleteEventListeners();
}

function updateProductPrice(product, unitPrice) {
  let currQty = product.querySelector("qty_num");
  let productPrice = product.querySelector("price");

  productPrice.textContent = Number(currQty.textContent) * unitPrice;
}

function attachDeleteEventListeners() {
  let deleteIcons = document.querySelectorAll(".deleteIcon");

  deleteIcons.forEach((deleteIcon, index) => {
    deleteIcon.addEventListener("click", () => {
      cartItems.splice(index, 1);
      localStorage.setItem("cartProducts", JSON.stringify(cartItems));
      printCartProducts(cartItems);
    });
  });
}
