import { getIconInput } from "../../iconInput-module.js";

export function generateNav() {
  let nav = document.createElement("nav");
  const searchSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z" fill="gray"/>
  </svg>
  `;
  nav.classList.add("nav", "d-flex-row", "flex-al-center");
  nav.innerHTML = `
                <div class="nav-logo d-flex-row flex-al-center">
                    <div class="nav-mobile">
                        <label for="nav-toggle" class="nav-toggle-label">
                            <svg id="nav-burger" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z"
                                    fill="black" />
                            </svg>
                            </label>
                        <input type="checkbox" id="nav-toggle" class="nav-toggle-checkbox">
                        <ul class="nav_list d-flex-row flex-al-center">
                            <li class="nav_list-item">
                                <a class="nav_list-link d-flex-row flex-al-center">Shop
                                    <img class="rotate-icon" src="../assets/icons/nav_dropDown.svg" alt="dropdown-icon">
                                </a>
                                <div class="shop-links d-flex-col">
                                    <a href="shop.html" class="shop-link">Pants</a>
                                    <a href="shop.html" class="shop-link">Shoes</a>
                                    <a href="shop.html" class="shop-link">T-Shirt</a>
                                    <a href="shop.html" class="shop-link">Jacket</a>
                                    <a href="shop.html" class="shop-link">Socks</a>
                                </div>
                            </li>
                            <li class="nav_list-item"><a href="shop.html" class="nav_list-link">On Sale</a></li>
                            <li class="nav_list-item"><a href="shop.html" class="nav_list-link">NewArrivals</a></li>
                            <li class="nav_list-item"><a href="shop.html" class="nav_list-link">Brands</a></li>
                        </ul>
                    </div>
                    <h3 class="logo-name"><a href="home.html">Shop.Co</a></h3>
                </div>
                <ul class="nav_list d-flex-row flex-al-center">
                    <li class="nav_list-item">
                        <a class="nav_list-link d-flex-row flex-al-center">Shop
                            <img class="rotate-icon" src="../assets/icons/nav_dropDown.svg" alt="dropdown-icon">
                        </a>
                        <div class="shop-links d-flex-col">
                            <a href="shop.html" class="shop-link">Pants</a>
                            <a href="shop.html" class="shop-link">Shoes</a>
                            <a href="shop.html" class="shop-link">T-Shirt</a>
                            <a href="shop.html" class="shop-link">Jacket</a>
                            <a href="shop.html" class="shop-link">Socks</a>
                        </div>
                    </li>
                    <li class="nav_list-item"><a href="shop.html" class="nav_list-link">On Sale</a></li>
                    <li class="nav_list-item"><a href="shop.html" class="nav_list-link">NewArrivals</a></li>
                    <li class="nav_list-item"><a href="shop.html" class="nav_list-link">Brands</a></li>
                </ul>
                <div class="nav_search icon-input d-flex-row flex-al-center">
                    ${
                      getIconInput(
                        "search",
                        "Search for products...",
                        "search",
                        "search",
                        searchSVG
                      ).innerHTML
                    }

                </div>
                <div class="user_actions d-flex-row flex-al-center">
                    <a href="#"><img class="user_actions-icon mobile-search" src="../assets/icons/nav_search.svg"
                            alt="search-icon"></a>
                    <a href="cart.html"><img class="user_actions-icon" src="../assets/icons/nav_cart.svg" alt="cart-icon"></a>
                    <a href="user.html"><img class="user_actions-icon" src="../assets/icons/nav_account.svg"
                            alt="account-icon"></a>
                </div>
  `;
  return nav;
}
