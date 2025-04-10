export const productsInCart = (cart, id) => {
  const prodInCart = cart.some((item) => item.id === id);
  return prodInCart;
};
