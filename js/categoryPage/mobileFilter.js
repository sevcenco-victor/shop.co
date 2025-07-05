import { scrollToTop } from "../sctrollToTop.js";

export function mobileFilter() {
  let openBtn = document.querySelector(".filter-mobile-btn--open");
  let filter = document.querySelector(".filter-mobile");
  let closeBtn = filter.querySelector(".filter-mobile-btn--close");
  let applyFilterBtn = filter.querySelector(".filter-btn");
  let filterHead = filter.querySelector("#filterHead");

  filter.style.bottom = `-70vh`;
  filterHead.addEventListener("click", () => {
    filter.style.bottom = `0`;
  });
  openBtn.addEventListener("click", () => {
    filter.style.bottom = `0`;
  });

  closeBtn.addEventListener("click", () => {
    filter.style.bottom = `-70vh`;
    scrollToTop(filter);
  });

  applyFilterBtn.addEventListener("click", () => {
    filter.style.bottom = `-70vh`;
    scrollToTop(filter);
  });
}
