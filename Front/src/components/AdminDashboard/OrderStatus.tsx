import React from "react";
import OrderIcons from "./icons/OrderIcons";

export default function OrderStatus() {
  return (
    <ol>
      <button className="bg-green-200  min-w-[100%] bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center">
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderPlaced}
        </div>
        <p className="text-sm font-semibold">تم الطلب</p>
      </button>
      <button className="min-w-[100%]  bg-opacity-20  dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center">
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderPacking}
        </div>
        <p className="text-sm font-semibold">التعبئة</p>
      </button>
      <button className="min-w-[100%]  bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center">
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderShipped}
        </div>
        <p className="text-sm font-semibold">شحنها</p>
      </button>
      <button className="min-w-[100%]  bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center">
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderDelivered}
        </div>
        <p className="text-sm font-semibold">تم التوصيل</p>
      </button>
      <button className="min-w-[100%]  bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center">
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderCanceld}
        </div>
        <p className="text-sm font-semibold">تم إلغاء </p>
      </button>
    </ol>
  );
}
