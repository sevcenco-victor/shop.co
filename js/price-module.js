export function getDiscountedPrice(price, discount) {
  return price - price * (discount / 100);
}
