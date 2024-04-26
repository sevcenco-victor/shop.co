import { createProductCard } from "../productCard-module.js";
import { productList } from "../product-list.js";
import { stock } from "../stock-list.js";
import { productFilter } from "./productFilter.js";
import { createSizePill } from "../sizePill-module.js";
import { mobileFilter } from "./mobileFilter.js";
import { scrollToTop } from "../sctrollToTop.js";

import { initPage } from "../page-strcuture/initPage.js";

initPage(document);

const productsPerPage = 9;
let container = document.querySelector(".gallery-cards");
var products = productList;

let historyItems = document.querySelectorAll(".history_item");
let lastHistoryItem = historyItems[historyItems.length - 1];
lastHistoryItem.textContent = document.title;

var currPageNumber = 0;
let navigationList = document.querySelector(".navigate-list ");

mobileFilter();

initPageProducts(products);
printProducts(container, currPageNumber);

let filterLocalStorage = {
  clothType: null,
  price: {
    from: null,
    to: null,
  },
  colors: [],
  sizes: [],
  dressStyle: null,
};
const removeFromArray = (arr, value) =>
  arr.includes(value) && arr.splice(arr.indexOf(value), 1);

var filter = document.querySelectorAll(".gallery-filter");
filter.forEach((filter) => {
  //#region clothType
  const historyIconSVG = `<svg class="history-icon" width="12" height="7" viewBox="0 0 12 7" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path
    d="M11.5306 1.53063L6.5306 6.53063C6.46092 6.60055 6.37813 6.65602 6.28696 6.69388C6.1958 6.73173 6.09806 6.75122 5.99935 6.75122C5.90064 6.75122 5.8029 6.73173 5.71173 6.69388C5.62057 6.65602 5.53778 6.60055 5.4681 6.53063L0.468098 1.53063C0.327202 1.38973 0.248047 1.19864 0.248047 0.999378C0.248047 0.80012 0.327202 0.609024 0.468098 0.468128C0.608994 0.327231 0.800091 0.248077 0.999348 0.248077C1.19861 0.248077 1.3897 0.327231 1.5306 0.468128L5.99997 4.9375L10.4693 0.467503C10.6102 0.326607 10.8013 0.247452 11.0006 0.247452C11.1999 0.247452 11.391 0.326607 11.5318 0.467503C11.6727 0.608399 11.7519 0.799496 11.7519 0.998753C11.7519 1.19801 11.6727 1.38911 11.5318 1.53L11.5306 1.53063Z"
    fill="rgb(174, 174, 174)" />
</svg>`;

  let filterClothTypeContainer = filter.querySelector(".filter-cloth_type");
  let selectedClothType;

  stock.clothTypes.forEach((clothType) => {
    let newStyle = document.createElement("div");
    newStyle.classList.add("cloth_type-item", "flex-al-center");
    newStyle.innerHTML = clothType + historyIconSVG;
    newStyle.addEventListener("click", () => {
      if (selectedClothType) {
        selectedClothType.classList.remove("cloth_type-item--selected");
        filterLocalStorage.clothType = null;
      }
      if (newStyle !== selectedClothType) {
        newStyle.classList.add("cloth_type-item--selected");
        selectedClothType = newStyle;
        filterLocalStorage.clothType = selectedClothType.innerText;
      } else {
        selectedClothType = null;
      }
    });
    filterClothTypeContainer.appendChild(newStyle);
  });

  //#endregion
  //#region Filter-Price
  let priceSlider = filter.querySelector("#priceSlider");
  noUiSlider.create(priceSlider, {
    start: [0, 800],
    connect: true,
    range: {
      min: 0,
      max: 800,
    },
  });

  let fromPrice = filter.querySelector("#fromPrice");
  let toPrice = filter.querySelector("#toPrice");

  fromPrice.addEventListener("change", () => {
    let minValue = parseFloat(fromPrice.value);
    let currentMaxValue = parseFloat(toPrice.value);

    priceSlider.noUiSlider.set([minValue, currentMaxValue]);
  });

  toPrice.addEventListener("change", () => {
    let maxValue = parseFloat(toPrice.value);
    let currentMinValue = parseFloat(fromPrice.value);

    priceSlider.noUiSlider.set([currentMinValue, maxValue]);
  });

  priceSlider.noUiSlider.on("update", function (values, handle) {
    if (handle == 0) {
      fromPrice.value = parseInt(values[0]);
      filterLocalStorage.price.from = fromPrice.value;
    } else {
      toPrice.value = parseInt(values[1]);
      filterLocalStorage.price.to = toPrice.value;
    }
  });

  //#endregion

  //#region filter-color
  let colorsContainer = filter.querySelector(".colors");
  var slectedColorSVG = `<svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5306 2.03063L5.5306 10.0306C5.46092 10.1005 5.37813 10.156 5.28696 10.1939C5.1958 10.2317 5.09806 10.2512 4.99935 10.2512C4.90064 10.2512 4.8029 10.2317 4.71173 10.1939C4.62057 10.156 4.53778 10.1005 4.4681 10.0306L0.968098 6.53063C0.898333 6.46087 0.842993 6.37804 0.805236 6.28689C0.76748 6.19574 0.748047 6.09804 0.748047 5.99938C0.748047 5.90072 0.76748 5.80302 0.805236 5.71187C0.842993 5.62072 0.898333 5.53789 0.968098 5.46813C1.03786 5.39837 1.12069 5.34302 1.21184 5.30527C1.30299 5.26751 1.40069 5.24808 1.49935 5.24808C1.59801 5.24808 1.69571 5.26751 1.78686 5.30527C1.87801 5.34302 1.96083 5.39837 2.0306 5.46813L4.99997 8.4375L12.4693 0.969379C12.6102 0.828483 12.8013 0.749329 13.0006 0.749329C13.1999 0.749329 13.391 0.828483 13.5318 0.969379C13.6727 1.11028 13.7519 1.30137 13.7519 1.50063C13.7519 1.69989 13.6727 1.89098 13.5318 2.03188L13.5306 2.03063Z" fill="white"></path>
    </svg>`;
  stock.colors.forEach((color) => {
    let newColor = document.createElement("div");
    newColor.classList.add("colors-item");
    newColor.style.backgroundColor = color;

    newColor.addEventListener("click", () => {
      if (newColor.innerHTML != slectedColorSVG) {
        newColor.classList.add("d-flex-row", "colors-item--selected");
        newColor.innerHTML = slectedColorSVG;
        filterLocalStorage.colors.push(newColor.style.backgroundColor);
      } else {
        newColor.classList.remove("d-flex-row", "colors-item--selected");
        newColor.innerHTML = null;
        removeFromArray(
          filterLocalStorage.colors,
          newColor.style.backgroundColor
        );
      }
    });

    colorsContainer.appendChild(newColor);
  });

  let colorChanged = false;
  let colorPicker = filter.querySelector(".picker input[type=color]");
  colorPicker.addEventListener("click", () => (colorChanged = true));

  //#endregion

  //#region filter-sizes
  let sizesContainer = filter.querySelector(".sizes");

  stock.sizes.forEach((size) => {
    let newSize = createSizePill(size);
    newSize.addEventListener("click", () => {
      if (!newSize.classList.contains("pill-selected")) {
        newSize.classList.add("pill-selected");
        filterLocalStorage.sizes.push(newSize.innerText);
      } else {
        newSize.classList.remove("pill-selected");
        removeFromArray(filterLocalStorage.sizes, newSize.innerText);
      }
    });

    sizesContainer.appendChild(newSize);
  });

  //#endregion

  //#region filter-dressStyle
  let dressStyleContainer = filter.querySelector(".dress-style");
  let selectedStyle;

  stock.dressStyles.forEach((style) => {
    let newStyle = document.createElement("div");
    newStyle.classList.add("cloth_type-item", "flex-al-center");
    newStyle.innerHTML = style + historyIconSVG;
    newStyle.addEventListener("click", () => {
      if (selectedStyle) {
        selectedStyle.classList.remove("cloth_type-item--selected");
        filterLocalStorage.dressStyle = null;
      }
      if (newStyle !== selectedStyle) {
        newStyle.classList.add("cloth_type-item--selected");
        selectedStyle = newStyle;
        filterLocalStorage.dressStyle = selectedStyle.innerText;
      } else {
        selectedStyle = null;
      }
    });
    dressStyleContainer.appendChild(newStyle);
  });

  //#endregion
  let filterBtn = filter.querySelector(".filter-btn");

  //#region  localStorage
  //#region localStorage manage
  filterBtn.addEventListener("click", () => {
    let lastPickedColor = filterLocalStorage.colors.findIndex((color) =>
      color.startsWith("#")
    );
    if (colorChanged) {
      if (lastPickedColor != -1) {
        filterLocalStorage.colors[lastPickedColor] = colorPicker.value;
      } else {
        filterLocalStorage.colors.push(colorPicker.value);
      }
    }

    localStorage.setItem("productFilter", JSON.stringify(filterLocalStorage));
    //#endregion

    let noProductsError = document.createElement("div");
    noProductsError.classList.add("error-msg", "d-flex-col", "flex-al-cnt");
    noProductsError.innerHTML = `
  <img class="error-img" src="https://cdn3.iconfinder.com/data/icons/minimal-set-nine/32/minimal-14-512.png" alt="notfound-icon"/>
  <p>Sorry, we couldn't find any products that match your search criteria.</p>
     `;

    if (filterLocalStorage) {
      initPageProducts(productFilter(filterLocalStorage));
      if (JSON.parse(localStorage.getItem("pagination")).length > 0) {
        printProducts(container, currPageNumber);
      } else {
        container.innerHTML = "";
        container.appendChild(noProductsError);
      }
    }
  });

  //#endregion
});

function initPageProducts(products) {
  let pageProducts = [];
  let leftProducts = products.length;

  while (leftProducts > 0) {
    let currentPage = products.slice(
      products.length - leftProducts,
      products.length - leftProducts + productsPerPage
    );
    pageProducts.push(currentPage);
    leftProducts -= productsPerPage;
  }

  localStorage.setItem("pagination", JSON.stringify(pageProducts));
  getPaginationNum();
}

function printProducts(container, page) {
  container.innerHTML = null;

  let productList = JSON.parse(localStorage.getItem("pagination"));
  productList[page].forEach((product) => {
    container.appendChild(createProductCard(product));
  });

  let productsNum = document.querySelector(".productsNum");
  productsNum.textContent = `Showing 1 - ${
    productList[page].length
  } of ${getPoductsNum(productList)} Products`;
}
function getPoductsNum(productList) {
  let numOfProd = 0;
  productList.forEach((page) => {
    page.forEach((product) => {
      ++numOfProd;
    });
  });
  return numOfProd;
}
function getPaginationNum() {
  navigationList.innerHTML = null;
  let productPages = JSON.parse(localStorage.getItem("pagination")).length;
  if (productPages > 0) {
    for (let index = 0; index < productPages; index++) {
      let page = document.createElement("div");
      page.classList.add("navigate-item");
      page.textContent = index + 1;
      navigationList.appendChild(page);
    }
    let pageIterator = navigationList.querySelectorAll(".navigate-item");

    let selectedPage = pageIterator[0];
    selectedPage.classList.add("navigate-item--selected");

    pageIterator.forEach((number) => {
      number.addEventListener("click", () => {
        if (selectedPage !== number) {
          number.classList.add("navigate-item--selected");
          printProducts(container, Number(number.textContent) - 1);
          scrollToTop(window);
          if (selectedPage) {
            selectedPage.classList.remove("navigate-item--selected");
          }
          selectedPage = number;
        }
      });
    });
  }
}
