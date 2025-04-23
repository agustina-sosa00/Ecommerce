export const totalPrice = (products) => {
  const total = 0;
  const totalP = products?.forEach((e) => {
    console.log('Eeeee', e);

    return total + e.price;
  });
  console.log(totalP);
  return total;
};
