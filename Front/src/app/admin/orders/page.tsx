import OrderList from "@/components/AdminDashboard/Order/OrderList";
import Pagination from "@/components/Shared/Pagination";
import Status from "@/components/AdminDashboard/Status/StatusCard";
import Error from "@/components/Shared/Error";
import OrderService from "@/lib/OrdersApi";
import React from "react";

export default async function OrderPage() {
  const orders = await OrderService.findAll();

  if (!orders?.data) return <Error />;
  return (
    <div className="overflow-hidden  ">
      <h2 className="font-extrabold px-5 ">إدارة الطلبات</h2>

      <section className="  min-h-[70vh] w-full   p-4 bg-white  shadow rounded-xl">
        <div className="w-full  bg-gray-50 p-2 border-b flex justify-between   shadow-md rounded-t-lg">
          <span> الطلبات</span>
          <input
            className=" bg-gray-100 px-5 py-2 focus:outline-none "
            placeholder="بحث عن..."
            type="text"
          ></input>{" "}
        </div>
        <OrderList orders={orders} />
      </section>
      <Pagination />
    </div>
  );
}
