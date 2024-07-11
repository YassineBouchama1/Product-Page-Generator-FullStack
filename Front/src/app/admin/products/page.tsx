import ProductCard from "@/components/AdminDashboard/Product/ProductCard/ProductCard";
import Error from "@/components/Shared/Error";
import ProductService from "@/lib/ProductApi";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";

export default async function ProductPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) return <Error />;

  const products = await ProductService.findAll(token.value);


  // display popup if thers is pb fetching
  if (!products?.data) return <Error message="There is a pb while fetching Products" />;


  return (
    <div className=" flex flex-col gap-y-5 overflow-hidden rounded-xl bg-white p-8 shadow">
      <h2 className="font-extrabold ">إدارة المنتجات</h2>
      <section className="w-full bg-white p-4 rounded-md flex justify-between lg:flex-row flex-col gap-5 ">
        <Link
          href="/admin/products/new"
          className="bg-green-500 text-white p-2 shadow-md rounded-md"
        >
          إضافة منتج جديد
        </Link>

        <input
          className="bg-gray-100 rounded-md px-5 py-2 focus:outline-none "
          placeholder="بحث عن..."
          type="text"
        ></input>
      </section>
      <section className="   w-full  rounded-md border ">
        <div className=" grid lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4 sm:grid-cols-2 overflow-x-auto  text-right justify-center">
          {products &&
            products.data?.map((user: { id: React.Key }) => (
              <div key={user.id}>
                <ProductCard item={user} />
              </div>
            ))}
        </div>
      </section>

      <ToastContainer />
    </div>
  );
}
