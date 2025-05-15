/* eslint-disable no-unused-vars */
export const sendOrder = ({ order, total }) => {
  const arrayOrder = order?.map(
    (item) =>
      `* Title: ${item.title} Price: ${item.price}  Quantity: ${item.quantity}, `
  );
  return arrayOrder;
};
