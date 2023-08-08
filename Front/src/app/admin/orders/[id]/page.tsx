import React from "react";
import pic from "../../../../../public/pjpg.jpg";
import Image from "next/image";
import OrderHistory from "@/components/AdminDashboard/Order/OrderDetails/OrderHistory";
import OrderService from "@/lib/OrdersApi";
import Error from "@/components/Shared/Error";
import ProductService from "@/lib/ProductApi";
import { ToastContainer } from "react-toastify";
import Customer from "@/components/AdminDashboard/Order/OrderDetails/Customer";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const order = await OrderService.findById(id); // fetch data

  const prduct = await ProductService.findById(
    order.data.cartItems[0].productID.id
  ); // fetch data product or we can send url with order to less requests

  if (!order?.data) return <Error />;

  function customMapping(value) {
    if (value.isDelivered === true) {
      return (
        <span className="bg-green-600 text-white rounded-xl px-2 py-1">
          تم إستلام
        </span>
      );
    } else if (value.isShipped === true) {
      return (
        <span className="bg-Emerald-600 text-white rounded-xl px-2 ">
          تم شحن
        </span>
      );
    } else if (value.isConfirmed === true) {
      return (
        <span className="bg-Violet-500 text-white rounded-xl px-2 h-[30px] ">
          تم تأكيد الطلب
        </span>
      );
    } else {
      return (
        <span className="bg-blue-400 text-white rounded-xl px-2 py-1">
          في انتظار تأكيد
        </span>
      );
    }
  }

  return (
    <div>
      <h2 className="font-extrabold py-4">تفاصيل الطلب</h2>

      <div className="grid grid-rows-2 grid-cols-4 gap-4     ">
        {/* Product Details */}
        <section className="col-span-4 xl:col-span-3  w-full bg-white h-full min-h-[500px] rounded-md shadow p-4 justify-center items-center">
          <div className="flex flex-col items-center p-10">
            <Image
              src={prduct.data.image}
              alt="image name"
              width="300"
              height="300"
              className=" mb-3  shadow-lg h-auto"
            />{" "}
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">
              {order.data.cartItems[0].productID.title}
            </h5>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2 justify-end items-end">
              <p>سعر المنتج:</p>
              <p className=" text-sm text-gray-500 ">
                ${order.data.cartItems[0].price}
              </p>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
              <p>كمية:</p>
              <p className=" text-sm text-gray-500 ">
                {order.data.cartItems[0].quantity}
              </p>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
              <p>إجمالي المبلغ :</p>
              <p>$${order.data.totalOrderPrice}</p>
            </div>
          </div>
        </section>
        {/* Order Status */}
        <section className="col-span-4 xl:col-span-1 w-full bg-white h-full  rounded-md shadow p-4   flex item-start justify-start">
          <Customer shipping={order.data.shippingAddress} />
        </section>
        {/* Address*/}
        <section className="col-span-4 xl:col-span-4 w-full bg-white h-[200px] rounded-md shadow p-4"></section>
      </div>
      <ToastContainer />
    </div>
  );
}
