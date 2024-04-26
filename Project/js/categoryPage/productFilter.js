import { productList } from "../product-list.js";
import { getDiscountedPrice } from "../price-module.js";

export function productFilter(filter) {
  let filteredProducts = [];

  productList.forEach((product) => {
    let passesFilter = true;
    let discountedPrice = getDiscountedPrice(product.price, product.discount);

    if (filter.clothType)
      filter.clothType.toLowerCase() == product.clothType
        ? null
        : (passesFilter = false);

    if (filter.colors.length !== 0) {
      passesFilter = filter.colors.some((color) =>
        product.colors.includes(
          !color.startsWith("#") ? rgbToHex(color) : color
        )
      );
    }
    discountedPrice >= filter.price.from && discountedPrice <= filter.price.to
      ? null
      : (passesFilter = false);

    if (filter.dressStyle)
      filter.dressStyle.toLowerCase() == product.dressStyle
        ? null
        : (passesFilter = false);

    if (filter.sizes.length)
      product.sizes.some((size) => filter.sizes.includes(size))
        ? null
        : (passesFilter = false);

    if (passesFilter) {
      filteredProducts.push(product);
    }
  });

  return filteredProducts;
}

function rgbToHex(rgb) {
  let values = rgb.match(/\d+/g);

  let hex =
    "#" +
    values
      .map((value) => {
        let hexValue = parseInt(value).toString(16);
        return hexValue.length === 1 ? "0" + hexValue : hexValue;
      })
      .join("");

  return hex.toUpperCase();
}
