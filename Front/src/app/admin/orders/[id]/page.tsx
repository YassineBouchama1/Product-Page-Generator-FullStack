import React from "react";
import pic from "../../../../../public/pjpg.jpg";
import Image from "next/image";
import Link from "next/link";
import OrderIcons from "@/components/AdminDashboard/icons/OrderIcons";
import OrderStatus from "@/components/AdminDashboard/Order/OrderStatus";

export default function page() {
  return (
    <div>
      <h2 className="font-extrabold py-4">تفاصيل الطلب</h2>
      <div className="grid grid-rows-2 grid-cols-4 gap-4     ">
        {/* Product Details */}
        <section className="col-span-4 xl:col-span-3  w-full bg-white h-full min-h-[500px] rounded-md shadow p-4 justify-center items-center">
          <div className="flex flex-col items-center p-10">
            <Image
              src={pic}
              alt="image name"
              width="200"
              height="200"
              className=" mb-3 rounded-full shadow-lg"
            />{" "}
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Product Name{" "}
            </h5>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
              <p>سعر المنتج:</p>
              <p className=" text-sm text-gray-500 dark:text-gray-400">
                $99.95
              </p>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
              <p>كمية:</p>
              <p className=" text-sm text-gray-500 dark:text-gray-400">7</p>
            </div>
            <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
              <p>إجمالي المبلغ :</p>
              <p>$902.99</p>
            </div>
          </div>
        </section>

        {/* Order Status */}
        <section className=" col-span-4 xl:col-span-1 w-full bg-white h-full min-h-[500px] rounded-md shadow p-4">
          <h3 className="font-extrabold py-4">حالة الطلب</h3>
          <OrderStatus />
        </section>

        {/* Address*/}
        <section className=" col-span-4 xl:col-span-2   h-[250px]  p-4  bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
          <h3 className="font-extrabold py-4">عنوان الشحن</h3>
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-black">اسم:</span> <span>Yassine</span>
            </div>
            <div>
              <span className="font-black">عنوان:</span>{" "}
              <span>21 rue jbala najah amir</span>
            </div>

            <div>
              <span className="font-black">رقم الهاتف:</span>{" "}
              <span>06255854555</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
