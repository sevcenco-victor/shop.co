export function addCartItem(product, props) {
  let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

  let existingProductIndex = cartProducts.findIndex((item) => {
    return (
      item.product.id === product.id &&
      item.props.color === props.color &&
      item.props.size === props.size
    );
  });

  if (existingProductIndex !== -1) {
    cartProducts[existingProductIndex].props.quantity += Number(props.quantity);
  } else {
    let newProduct = {
      product: product,
      props: {
        color: props.color || product.colors[0],
        size: props.size || product.sizes[0],
        quantity: Number(props.quantity),
      },
    };
    cartProducts.push(newProduct);
  }
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}
