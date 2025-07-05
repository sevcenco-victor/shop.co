export function getPaginationNum() {
  navigationList.innerHTML = null;

  let productPages = JSON.parse(localStorage.getItem("pagination")).length;
  if (productPages > 0) {
    for (let index = 0; index < productPages; index++) {
      let page = document.createElement("div");
      page.classList.add("navigate-item");
      page.textContent = index + 1;
      navigationList.appendChild(page);
    }
  }
}
