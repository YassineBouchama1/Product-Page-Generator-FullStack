import UpdateProduct from "@/components/AdminDashboard/Product/UpdateProduct";
import UploadImageProduct from "@/components/AdminDashboard/Product/UploadImageProduct";
import ProductService from "@/services/ProductApi";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
export default async function Edit() {
  // const products = await ProductService.findById("64ce40dd9542c7e67aa827c4");

  return <UpdateProduct  />;
}
