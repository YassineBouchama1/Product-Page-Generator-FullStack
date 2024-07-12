export const income = (data) => {


  return data?.reduce((total, order) => {


    return total + order.totalOrderPrice;
  }, 0);
};

export const undeliveredCount = (data) => {
  return data?.reduce((count, order) => {
    if (order.status != 'Delivered' && order.status != 'Cancelled') {
      return count + 1;
    }
    return count;
  }, 0);
};

export const soldCount = (data) => {
  return data?.reduce((count, order) => {
    if (order.status === "Delivered") {
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
  soldCount,
  undeliveredCount,
  income,
  date,
};

export default useConvertor;
