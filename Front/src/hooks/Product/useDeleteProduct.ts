"use client";
import ProductService from "@/services/ProductApi";
import { useEffect, useState } from "react";
import notify from "../Global/useNotifaction";
import { assert } from "console";
import { getAllProducts } from "@/stores/productsSlice/ActionsProducts";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { useRouter } from "next/navigation";
const useGetAllProducts = () => {

  const router = useRouter();
  
  const onDelete = async (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const result = await ProductService.deleteById(id);

    //IF DONE RUN REDUX DISPATCH REFRICH THAT

    if (result.status === "error") {
      notify("there is pb repeat", "warn");
    } else {
      router.refresh();
      // router.push("/admin/products");
    }
  };

  const productFun = {
    onDelete,
  };
  return productFun;
};

export default useGetAllProducts;
