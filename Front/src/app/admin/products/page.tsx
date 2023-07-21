import ListProducts from "@/components/AdminDashboard/ListProducts";
import Status from "@/components/AdminDashboard/utilis/Status";
import React from "react";

export default function ProductPage() {
  return (
    <div className=" flex flex-col gap-y-10">
      <section className="  min-h-full w-full  rounded-md p-5">
        <button className="bg-green-500 text-white p-2 shadow-md rounded-md">
          إضافة منتج جديد
        </button>
      </section>
      <section className="  min-h-screen w-full  rounded-md ">
        <ListProducts />
     
      </section>
    </div>
  );
}
