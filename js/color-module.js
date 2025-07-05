export function getColors(product) {
  let productColors = document.createElement("div");
  productColors.classList.add("colors", "gap-16", "d-flex-row");

  let colors = product.colors;

  colors.forEach((color) => {
    let colorItem = document.createElement("div");
    colorItem.classList.add("colors-item", "d-flex-row");
    colorItem.style.backgroundColor = color;

    productColors.appendChild(colorItem);
  });

  return productColors;
}
