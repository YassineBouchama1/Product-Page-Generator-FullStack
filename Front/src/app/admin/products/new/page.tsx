import ProductForm from "@/components/AdminDashboard/Product/ProductForm/ProductForm";
import Error from "@/components/Shared/Error";
import FileManagerServeice from "@/lib/FileManager";
import { cookies } from "next/headers";

export default async function NewProduct() {

  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) return <Error />;

  const files = await FileManagerServeice.findAll(token?.value);

  if (!files?.data) return <Error message="there is a pb while fecthing images from file manager try again" />;
  return (
    <>
      <ProductForm type="create" product={undefined} files={files} />
    </>
  );
}
