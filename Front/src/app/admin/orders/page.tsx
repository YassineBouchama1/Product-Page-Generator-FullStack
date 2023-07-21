import OrderList from "@/components/AdminDashboard/utilis/OrderList";
import Pagination from "@/components/AdminDashboard/utilis/Pagination";
import Status from "@/components/AdminDashboard/utilis/Status";
import React from "react";

export default function OrderPage() {
  return (
    <div className=" ">
      <h2 className="font-extrabold p-x-5">إدارة الطلبات</h2>

      <section className="  min-h-[70vh] w-full  rounded-md p-4">
        <div className="w-full  bg-gray-50 p-2 border-b flex justify-between   shadow-md rounded-t-lg">
          <span> الطلبات</span>
          <input
            className=" bg-gray-100 px-5 py-2 focus:outline-none "
            placeholder="بحث عن..."
            type="text"
          ></input>{" "}
        </div>
        <OrderList />
      </section>
      <Pagination />
    </div>
  );
}
