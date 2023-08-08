export const income = (data) => {
  return data?.reduce((total, order) => {
    const orderTotal = order.cartItems.reduce(
      (orderTotal, item) => orderTotal + item.price * item.quantity,
      0
    );
    return total + orderTotal;
  }, 0);
};

export const undeliveredCount = (data) => {
  return data?.reduce((count, order) => {
    if (!order.isDelivered) {
      return count + 1;
    }
    return count;
  }, 0);
};

export const shippedCount = (data) => {
  return data?.reduce((count, order) => {
    if (order.isShipped) {
      return count + 1;
    }
    return count;
  }, 0);
};

// convert date to cool format
export const date = (data) => {
  const createdAtDate = new Date(data);
  const formattedCreatedAt = `${createdAtDate
    .getDate()
    .toString()
    .padStart(2, "0")}-${(createdAtDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${createdAtDate.getFullYear()}`;

  return formattedCreatedAt;
};


// convert date to cool format
export const getProductInfo = (data) => {
  const createdAtDate = new Date(data);
  const formattedCreatedAt = `${createdAtDate
    .getDate()
    .toString()
    .padStart(2, "0")}-${(createdAtDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${createdAtDate.getFullYear()}`;

  return formattedCreatedAt;
};


const useConvertor = {
  shippedCount,
  undeliveredCount,
  income,
  date,
};

export default useConvertor;
