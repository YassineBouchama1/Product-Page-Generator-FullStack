import ProductForm from "@/components/AdminDashboard/Product/ProductForm";
import Preloader from "@/components/Preloader";
import ProductService from "@/lib/ProductApi";
import { setDetaileProduct } from "@/Redux/productsSlice/ProductsSlice";
import { store } from "@/Redux/store";

export default async function Edit({
  params: { id },
}: {
  params: { id: string };
}) {
  const products = await ProductService.findById(id); // fetch data
  // store.dispatch(setDetaileProduct(products.data)); // pass it to redux to save it in state

  if (!products?.data)
    return <p className="no-result-text">Failed to fetch project info</p>;

  return (
    <>
      {/* // pass data to component to send it to redux state also cuz data wont pass in first time */}
      {/* <Preloader product={products.data} /> */}
      <ProductForm type="edit" product={products.data} />
    </>
  );
}
