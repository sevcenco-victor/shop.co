import { getIconInput } from "../../iconInput-module.js";

export function generateFooter() {
  let footerContent = document.createElement("div");
  footerContent.classList.add("footer-content", "d-flex-col", "container");
  const mailSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z"
        fill="gray" />
</svg>`;
  let newsletter = document.createElement("section");
  newsletter.classList.add("section-newslatter", "container");
  newsletter.innerHTML = ` 
  <div class="newslatter d-flex-row">
  <h2 class="newslatter-title">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>
  <form action="get" class="newslatter-form">
      <div class="newslatter-email icon-input d-flex-row">
      ${
        getIconInput(
          "email",
          "Enter your email adress",
          "client-mail",
          "client-mail",
          mailSVG
        ).innerHTML
      }
      </div>
      <input class="newslatter-submit secondary-btn icon-input" type="submit" value="Subscribe to Newsletter">
  </form>
</div>`;
  footerContent.appendChild(newsletter);

  let contentList = document.createElement("div");
  contentList.classList.add("footer-list", "d-flex-row");
  contentList.innerHTML = ` <div class="footer-info footer-info_main d-flex-col">
  <div class="footer-head d-flex-col">
      <h3 class="logo-name"><a href="#">Shop.Co</a></h3>
      <p class="footer-head_text">We have clothes that suits your style and which you’re proud to
          wear.
          From
          women
          to
          men.</p>
  </div>
  <div class="footer-social d-flex-row">
      <a href="#" class="footer-social_item d-flex-row">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M11.2071 1.9831C10.7881 2.16933 10.3458 2.28573 9.88023 2.35557C10.3458 2.07622 10.7183 1.63392 10.8812 1.0985C10.4389 1.35457 9.95006 1.5408 9.41465 1.6572C8.99562 1.2149 8.39037 0.935547 7.73856 0.935547C6.48149 0.935547 5.45721 1.95982 5.45721 3.21689C5.45721 3.40312 5.48049 3.56608 5.52705 3.72903C3.64145 3.63591 1.94208 2.72803 0.801411 1.33129C0.615178 1.68048 0.498783 2.05294 0.498783 2.47196C0.498783 3.26345 0.894527 3.96182 1.52306 4.38084C1.1506 4.35756 0.801411 4.26445 0.475504 4.10149V4.12477C0.475504 5.24216 1.26699 6.17333 2.31455 6.38284C2.12831 6.42939 1.9188 6.45267 1.70929 6.45267C1.56962 6.45267 1.40666 6.42939 1.26699 6.40612C1.56962 7.314 2.40766 7.98909 3.40866 7.98909C2.61717 8.59434 1.63945 8.96681 0.56862 8.96681C0.382388 8.96681 0.196156 8.96681 0.0332031 8.94353C1.05748 9.59534 2.24471 9.96781 3.54833 9.96781C7.76184 9.96781 10.0665 6.47595 10.0665 3.44968C10.0665 3.35656 10.0665 3.24017 10.0665 3.14705C10.5088 2.84443 10.9045 2.44868 11.2071 1.9831Z"
                  fill="black" />
          </svg>
      </a>
      <a href="#" class="footer-social_item d-flex-row">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M2.70873 12.3038V6.75026H0.839844V4.58594H2.70873V2.98981C2.70873 1.13752 3.84005 0.128906 5.49242 0.128906C6.28392 0.128906 6.96418 0.187836 7.16243 0.214175V2.14993L6.01642 2.15045C5.11776 2.15045 4.94376 2.57748 4.94376 3.20411V4.58594H7.08697L6.80791 6.75026H4.94376V12.3038H2.70873Z"
                  fill="black" />
          </svg>
      </a>
      <a href="#" class="footer-social_item d-flex-row">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M7.00076 1.44721C8.80947 1.44721 9.02366 1.45398 9.73818 1.48656C10.1678 1.49182 10.5933 1.5707 10.9962 1.71979C11.2884 1.83248 11.5538 2.00511 11.7753 2.22656C11.9967 2.44802 12.1694 2.71339 12.282 3.00559C12.4311 3.40853 12.51 3.83406 12.5153 4.26366C12.5475 4.97817 12.5546 5.19237 12.5546 7.00108C12.5546 8.80979 12.5479 9.02398 12.5153 9.7385C12.51 10.1681 12.4311 10.5936 12.282 10.9966C12.1694 11.2888 11.9967 11.5541 11.7753 11.7756C11.5538 11.997 11.2884 12.1697 10.9962 12.2824C10.5933 12.4315 10.1678 12.5103 9.73818 12.5156C9.02398 12.5479 8.80979 12.5549 7.00076 12.5549C5.19172 12.5549 4.97753 12.5482 4.26334 12.5156C3.83373 12.5103 3.40821 12.4315 3.00527 12.2824C2.71307 12.1697 2.44769 11.997 2.22624 11.7756C2.00479 11.5541 1.83216 11.2888 1.71947 10.9966C1.57038 10.5936 1.4915 10.1681 1.48624 9.7385C1.45398 9.02398 1.44689 8.80979 1.44689 7.00108C1.44689 5.19237 1.45366 4.97817 1.48624 4.26366C1.4915 3.83406 1.57038 3.40853 1.71947 3.00559C1.83216 2.71339 2.00479 2.44802 2.22624 2.22656C2.44769 2.00511 2.71307 1.83248 3.00527 1.71979C3.40821 1.5707 3.83373 1.49182 4.26334 1.48656C4.97785 1.4543 5.19205 1.44721 7.00076 1.44721ZM7.00076 0.226562C5.16205 0.226562 4.93043 0.234304 4.20785 0.267208C3.64561 0.278391 3.08934 0.384847 2.56269 0.582046C2.11092 0.752261 1.70172 1.019 1.36366 1.36366C1.01869 1.70184 0.751722 2.11127 0.581401 2.56334C0.384201 3.08998 0.277746 3.64625 0.266563 4.2085C0.234304 4.93043 0.226562 5.16205 0.226562 7.00076C0.226562 8.83946 0.234304 9.07108 0.267208 9.79366C0.278391 10.3559 0.384847 10.9122 0.582046 11.4388C0.752178 11.8908 1.01892 12.3002 1.36366 12.6385C1.70191 12.9832 2.11133 13.25 2.56334 13.4201C3.08998 13.6173 3.64626 13.7238 4.2085 13.7349C4.93108 13.7672 5.16172 13.7756 7.0014 13.7756C8.84108 13.7756 9.07172 13.7679 9.7943 13.7349C10.3565 13.7238 10.9128 13.6173 11.4395 13.4201C11.8893 13.2457 12.2978 12.9794 12.6389 12.6381C12.98 12.2968 13.246 11.8882 13.4201 11.4382C13.6173 10.9115 13.7238 10.3553 13.735 9.79301C13.7672 9.07108 13.775 8.83946 13.775 7.00076C13.775 5.16205 13.7672 4.93043 13.7343 4.20785C13.7231 3.64561 13.6167 3.08934 13.4195 2.56269C13.2493 2.11068 12.9826 1.70126 12.6379 1.36301C12.2996 1.01828 11.8902 0.751533 11.4382 0.581401C10.9115 0.384201 10.3553 0.277746 9.79301 0.266563C9.07108 0.234304 8.83947 0.226562 7.00076 0.226562Z"
                  fill="black" />
              <path
                  d="M7.00215 3.52344C6.31413 3.52344 5.64155 3.72746 5.06948 4.10971C4.49741 4.49195 4.05154 5.03525 3.78824 5.6709C3.52494 6.30655 3.45605 7.00601 3.59028 7.68081C3.72451 8.35561 4.05582 8.97546 4.54233 9.46197C5.02884 9.94847 5.64868 10.2798 6.32349 10.414C6.99829 10.5482 7.69774 10.4794 8.33339 10.2161C8.96904 9.95276 9.51234 9.50689 9.89459 8.93481C10.2768 8.36274 10.4809 7.69017 10.4809 7.00215C10.4809 6.07954 10.1144 5.19471 9.46197 4.54233C8.80958 3.88994 7.92476 3.52344 7.00215 3.52344ZM7.00215 9.26021C6.55555 9.26021 6.11897 9.12778 5.74764 8.87966C5.3763 8.63154 5.08688 8.27888 4.91597 7.86627C4.74506 7.45366 4.70034 6.99964 4.78747 6.56162C4.8746 6.1236 5.08966 5.72125 5.40546 5.40545C5.72125 5.08966 6.1236 4.8746 6.56162 4.78747C6.99964 4.70034 7.45367 4.74506 7.86627 4.91597C8.27888 5.08687 8.63154 5.3763 8.87966 5.74763C9.12778 6.11897 9.26021 6.55554 9.26021 7.00215C9.26021 7.60102 9.02231 8.17537 8.59884 8.59884C8.17537 9.02231 7.60102 9.26021 7.00215 9.26021Z"
                  fill="black" />
              <path
                  d="M10.6176 4.19807C11.0665 4.19807 11.4305 3.83412 11.4305 3.38517C11.4305 2.93621 11.0665 2.57227 10.6176 2.57227C10.1686 2.57227 9.80469 2.93621 9.80469 3.38517C9.80469 3.83412 10.1686 4.19807 10.6176 4.19807Z"
                  fill="black" />
          </svg>
      </a>
      <a href="#" class="footer-social_item d-flex-row">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.4799 0C2.88895 0 0 2.88895 0 6.4799C0 9.34185 1.86297 11.7718 4.42793 12.6358C4.75192 12.6898 4.85992 12.5008 4.85992 12.3118C4.85992 12.1498 4.85992 11.7448 4.85992 11.2048C3.05095 11.6098 2.67296 10.3408 2.67296 10.3408C2.37596 9.58485 1.94397 9.39585 1.94397 9.39585C1.34998 8.99086 1.99797 8.99086 1.99797 8.99086C2.64596 9.04486 2.99695 9.66585 2.99695 9.66585C3.56394 10.6648 4.50893 10.3678 4.88692 10.2058C4.94092 9.77384 5.10292 9.50385 5.29191 9.34185C3.86094 9.17985 2.34896 8.61286 2.34896 6.1289C2.34896 5.42691 2.59196 4.83292 3.02395 4.40093C2.96995 4.23893 2.72696 3.59094 3.07795 2.67296C3.07795 2.67296 3.61794 2.51096 4.85992 3.34795C5.37291 3.21295 5.9399 3.13195 6.4799 3.13195C7.01989 3.13195 7.58688 3.21295 8.09987 3.34795C9.34185 2.51096 9.88184 2.67296 9.88184 2.67296C10.2328 3.56394 10.0168 4.21193 9.93584 4.40093C10.3408 4.85992 10.6108 5.42691 10.6108 6.1289C10.6108 8.61286 9.09885 9.15285 7.64088 9.31485C7.88387 9.50385 8.07287 9.90884 8.07287 10.5028C8.07287 11.3668 8.07287 12.0688 8.07287 12.2848C8.07287 12.4468 8.18087 12.6628 8.53186 12.6088C11.0968 11.7718 12.9598 9.34185 12.9598 6.4799C12.9598 2.88895 10.0708 0 6.4799 0Z"
                  fill="black" />
          </svg>
      </a>
  </div>
</div>
<div class="footer-info d-flex-col">
  <p class="footer-info_title">COMPANY</p>
  <ul class="footer-info_menu d-flex-col">
      <li class="menu-item"><a href="#" class="menu-link">About</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Features</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Works</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Career</a></li>
  </ul>
</div>
<div class="footer-info d-flex-col">
  <p class="footer-info_title">HELP</p>
  <ul class="footer-info_menu d-flex-col">
      <li class="menu-item"><a href="#" class="menu-link">Customer Support</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Delivery Details</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Terms & Conditions</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Privacy Policy</a></li>
  </ul>
</div>
<div class="footer-info d-flex-col">
  <p class="footer-info_title">FAQ</p>
  <ul class="footer-info_menu d-flex-col">
      <li class="menu-item"><a href="#" class="menu-link">Account</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Manage Deliveries</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Orders</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Payments</a></li>
  </ul>
</div>
<div class="footer-info d-flex-col">
  <p class="footer-info_title">RESOURCES</p>
  <ul class="footer-info_menu d-flex-col">
      <li class="menu-item"><a href="#" class="menu-link">Free eBooks</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Development Tutorial</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Hwo to - Blog</a></li>
      <li class="menu-item"><a href="#" class="menu-link">Youtube Playlist</a></li>
  </ul>
</div>`;
  footerContent.appendChild(contentList);

  footerContent.appendChild(document.createElement("hr"));

  let footerCredits = document.createElement("div");
  footerCredits.classList.add("footer-credits", "d-flex-row", "flex-al-center");
  footerCredits.innerHTML = ` <p id="copyright">Shop.co &copy; 2000-2024, All rights reserved</p>
<div class="footer-payment-list d-flex-row flex-al-center">
    <img src="../assets/icons/visa-badge.svg" alt="visa-badge">
    <img src="../assets/icons/masterCard-badge.svg" alt="masterCard-badge">
    <img src="../assets/icons/paypal-badge.svg" alt="paypal-badge">
    <img src="../assets/icons/applePay-badge.png" alt="applePay-badge">
    <img src="../assets/icons/googlePay-badge.svg" alt="googlePay-badge">
    </div>`;
  footerContent.appendChild(footerCredits);

  return footerContent;
}
