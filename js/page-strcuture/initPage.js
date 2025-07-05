import { generateOffer } from "./elements/offer-module.js";
import { generateNav } from "./elements/nav-module.js";
import { generateFooter } from "./elements/footer-module.js";

export function initPage(page) {
  let offerContainer = page.querySelector("header .offer");
  offerContainer.appendChild(generateOffer());

  let navContainer = page.querySelector("header .nav-container");
  navContainer.appendChild(generateNav());

  let footerContainer = page.querySelector(".footer");
  footerContainer.appendChild(generateFooter());
}
