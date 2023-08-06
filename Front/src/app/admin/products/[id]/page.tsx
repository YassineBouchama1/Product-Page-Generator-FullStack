import UpdateProduct from "@/components/AdminDashboard/Product/UpdateProduct";
import UploadImageProduct from "@/components/AdminDashboard/Product/UploadImageProduct";
import ProductService from "@/services/ProductApi";
import { getOneProductRedux } from "@/stores/productsSlice/ActionsProducts";
import { store } from "@/stores/store";
import { stat } from "fs";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
export default async function Edit() {
  // const products = await ProductService.findById("64ce40dd9542c7e67aa827c4");
  await store.dispatch(getOneProductRedux("64ce40dd9542c7e67aa827c4"));


  return <UpdateProduct />;
}
