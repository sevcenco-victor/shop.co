export function incrementQty(page) {
  let productQtyBtns = page.querySelectorAll(".qty_btn");
  let currQty = page.querySelector(".qty_num");

  productQtyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent == "-" && Number(currQty.textContent) > 1) {
        currQty.textContent = Number(currQty.textContent) - 1;
      } else if (btn.textContent == "+") {
        currQty.textContent = Number(currQty.textContent) + 1;
      }
    });
  });
}
