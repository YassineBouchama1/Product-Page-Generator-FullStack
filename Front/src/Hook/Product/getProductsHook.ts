"use client";

import { useAppDispatch } from "@/stores/hooks";
import { getAllProductsRedux } from "@/stores/productsSlice/ActionsProducts";

const useGetFiles = () => {
  const dispatch = useAppDispatch();


  const onPressPaginate = async () => {


    await dispatch(getAllProductsRedux(1 + 1));
  };

  
  const productFun = {
    onPressPaginate,
  };
  return productFun;
};
export default useGetFiles;