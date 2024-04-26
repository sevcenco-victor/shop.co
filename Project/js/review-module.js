export function createRatingStars(rating) {
  const ratingIcons = document.createElement("div");
  ratingIcons.classList.add("rating_icons", "d-flex-row");

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    const starFull = createStarElement(
      "rating-star",
      "../assets/icons/rating-starFull.svg",
      "star-full"
    );
    ratingIcons.appendChild(starFull);
  }

  if (halfStar) {
    const starHalf = createStarElement(
      "rating-star",
      "../assets/icons/rating-starHalf.svg",
      "star-half"
    );
    ratingIcons.appendChild(starHalf);
  }

  return ratingIcons;
}

function createStarElement(className, src, alt) {
  const star = document.createElement("img");
  star.classList.add(className);
  star.src = src;
  star.alt = alt;
  return star;
}
