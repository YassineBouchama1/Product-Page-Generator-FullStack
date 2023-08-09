"use client";
import ProductService from "@/lib/ProductApi";

import notify from "@/hooks/useNotifaction";

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
    }
    if (result.data) {
      router.refresh();
      // router.push("/admin/products");
      notify("Removed", "success");
    } else {
      notify("field request", "warn");
    }
  };

  return { onDelete };
};

export default ProductCardHook;
