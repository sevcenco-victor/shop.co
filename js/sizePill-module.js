export function createSizePill(size) {
  let newSize = document.createElement("div");
  newSize.classList.add("sizes-item", "pill");
  newSize.textContent = size;

  return newSize;
}
