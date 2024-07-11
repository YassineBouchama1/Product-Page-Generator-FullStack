import ProductForm from "@/components/AdminDashboard/Product/ProductForm/ProductForm";

export default async function NewProduct() {
  return (
    <>
      <ProductForm type="create" product={undefined} files={undefined} />
    </>
  );
}
