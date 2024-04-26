export function getIconInput(type, placeholder, name, id, icon) {
  let inputContainer = document.createElement("div");
  inputContainer.innerHTML = `
                    <input type="${type}" placeholder="${placeholder}" name="${name}" id="${id}">
                    <label for="${id}">
                        ${icon}
                    </label>
    `;

  return inputContainer;
}
