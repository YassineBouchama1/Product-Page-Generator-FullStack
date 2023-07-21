import ListProducts from "@/components/AdminDashboard/ListProducts";
import Pagination from "@/components/AdminDashboard/utilis/Pagination";
import Status from "@/components/AdminDashboard/utilis/Status";
import React from "react";

export default function ProductPage() {
  return (
    <div className=" flex flex-col gap-y-5 ">
      <h2 className="font-extrabold ">إدارة المنتجات</h2>
      <section className="w-full bg-white p-4 rounded-md flex justify-between lg:flex-row flex-col gap-5 ">
        <button className="bg-green-500 text-white p-2 shadow-md rounded-md">
          إضافة منتج جديد
        </button>

        <input
          className="bg-gray-100 rounded-md px-5 py-2 focus:outline-none "
          placeholder="بحث عن..."
          type="text"
        ></input>
      </section>
      <section className="   w-full  rounded-md border ">
        <ListProducts />
      </section>
      <Pagination />
    </div>
  );
}
