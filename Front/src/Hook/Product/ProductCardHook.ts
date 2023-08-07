"use client";
import ProductService from "@/lib/ProductApi";

import notify from "@/hooks/Global/useNotifaction";

import { useRouter } from "next/navigation";
const ProductCardHook = () => {
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
      notify("Removed Success", "success");
    }
  };

  const productFun = {
    onDelete,
  };
  return productFun;
};

export default ProductCardHook;
