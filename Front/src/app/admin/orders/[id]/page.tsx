import React from "react";
import pic from "../../../../../public/pjpg.jpg";
import Image from "next/image";
import OrderHistory from "@/components/AdminDashboard/Order/OrderDetails/OrderHistory";
import OrderService from "@/lib/OrdersApi";
import Error from "@/components/Shared/Error";
import ProductService from "@/lib/ProductApi";
import { ToastContainer } from "react-toastify";

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

  return (
    <div>
      <h2 className="font-extrabold py-4">تفاصيل الطلب</h2>
      {/* Order Status */}
      <section className=" w-full h-full  p-4 flex  justify-center">
        <h3 className="font-extrabold py-4 pl-5">حالة الطلب</h3>
        <OrderHistory order={order.data} />
      </section>
      <div className="grid grid-rows-2 grid-cols-4 gap-4     ">
        {/* Product Details */}
        <section className="col-span-4 xl:col-span-3  w-full bg-white h-full min-h-[500px] rounded-md shadow p-4 justify-center items-center">
          <div className="flex flex-col items-center p-10">
            <Image
              src={prduct.data.image}
              alt="image name"
              width="200"
              height="200"
              className=" mb-3 rounded-full shadow-lg"
            />{" "}
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {order.data.cartItems[0].productID.title}
            </h5>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
              <p>سعر المنتج:</p>
              <p className=" text-sm text-gray-500 dark:text-gray-400">
                ${order.data.cartItems[0].price}
              </p>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
              <p>كمية:</p>
              <p className=" text-sm text-gray-500 dark:text-gray-400">
                {order.data.cartItems[0].quantity}
              </p>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
              <p>إجمالي المبلغ :</p>
              <p>$${order.data.totalOrderPrice}</p>
            </div>
          </div>
        </section>

        {/* Address*/}
        <section className="col-span-4 xl:col-span-1 w-full bg-white h-full min-h-[500px] rounded-md shadow p-4">
          <h3 className="font-extrabold py-4">عنوان الشحن</h3>
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-black">اسم:</span>
              <span>{order.data.shippingAddress.name}</span>
            </div>
            <div>
              <span className="font-black">عنوان:</span>
              <span>{order.data.shippingAddress.address}</span>
            </div>

            <div>
              <span className="font-black">رقم الهاتف:</span>
              <span>{order.data.shippingAddress.phone}</span>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}
