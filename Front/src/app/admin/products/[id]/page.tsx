import ProductForm from "@/components/AdminDashboard/Product/ProductForm/ProductForm";
import Error from "@/components/Shared/Error";
import FileManagerServeice from "@/lib/FileManager";
import ProductService from "@/lib/ProductApi";
import { cookies } from "next/headers";

export default async function Edit({
  params: { id },
}: {
  params: { id: string };
}) {


  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) return <Error />;

  const products = await ProductService.findById(id, token.value); // fetch data
  // store.dispatch(setDetaileProduct(products.data)); // pass it to redux to save it in state
  const files = await FileManagerServeice.findAll(token.value);


  if (!files?.data) return <Error />;

  if (!products?.data) return <Error />;

  return (
    <>
      {/* // pass data to component to send it to redux state also cuz data wont pass in first time */}
      {/* <Preloader product={products.data} /> */}
      <ProductForm type="edit" product={products.data} files={files} />
    </>
  );
}
