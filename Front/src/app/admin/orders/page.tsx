import OrderList from "@/components/AdminDashboard/utilis/OrderList";
import Status from "@/components/AdminDashboard/utilis/Status";
import React from "react";

export default function OrderPage() {
  return (
    <section className="bg-white  min-h-screen w-full  rounded-md p-4">
      <div className="w-full  bg-gray-50 p-2 border-b flex justify-between   shadow-md rounded-t-lg">
        <span> الطلبات</span>

        <span className="text-red-500 font-bold cursor-pointer hover:font-black duration-300"></span>
      </div>
      <OrderList />
    </section>
  );
}
