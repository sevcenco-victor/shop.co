export function createQtyPill(quantity) {
  let newQty = document.createElement("div");
  newQty.classList.add("product_qty", "pill", "d-flex-row");

  newQty.innerHTML = `
      <div class="qty_btn d-flex-row flex-al-center">-</div>
      <div class="qty_num">${quantity}</div>
      <div class="qty_btn d-flex-row flex-al-center">+</div>
  `;

  return newQty;
}
