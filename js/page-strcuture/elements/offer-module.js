export function generateOffer() {
  let offer = document.createElement("div");
  offer.classList.add("offer-content", "container", "d-flex-row");

  offer.innerHTML = `
  <p class="offer_text p-small">Sign up and get 20% off to your first order. <a href="error.html"
          class="offer_link">Sign Up Now</a></p>
  <div class="offer_icon"><img src="../assets/icons/heading_close.svg" alt="close-icon"
          class="rotate-icon"></div>
  `;

  let offerCloseIcon = offer.querySelector(".offer_icon");
  offerCloseIcon.addEventListener("click", () => {
    setTimeout(() => {
      offer.style.display = "none";
    }, 280);
  });
  return offer;
}
