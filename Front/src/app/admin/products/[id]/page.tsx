import { getAllFiles } from "@/Redux/FileManager/ActionsFileManager";
import { store } from "@/Redux/store";
import ProductForm from "@/components/AdminDashboard/Product/ProductForm/ProductForm";
import Error from "@/components/Shared/Error";
import FileManagerServeice from "@/lib/FileManager";
import ProductService from "@/lib/ProductApi";

export default async function Edit({
  params: { id },
}: {
  params: { id: string };
}) {
  const products = await ProductService.findById(id); // fetch data
  // store.dispatch(setDetaileProduct(products.data)); // pass it to redux to save it in state
  const files = await FileManagerServeice.findAll();


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
