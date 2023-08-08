"use client";

import OrderService from "@/lib/OrdersApi";
import OrderIcons from "../../icons/OrderIcons";
import notify from "@/hooks/useNotifaction";
import { useRouter } from "next/navigation";

export default function OrderHistory({ order }) {
  const router = useRouter();

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (order._id === "" || null || undefined)
      return notify("the is error", "warn");

    const result = await OrderService.updateDelivereed(order._id);

    if (result.status === "error") {
      notify("there is pb repeat", "warn");
    } else {
      router.refresh();

      notify("Updated", "success");
    }
  };

  return (
    <ol className="flex gap-5">
      <button className="bg-green-300  min-w-[20%] bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center">
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderPlaced}
        </div>
        <p className="text-sm font-semibold">تم الطلب</p>
      </button>
      <button
        className={`${
          order?.isConfirmed ? "bg-red-500" : "bg-white"
        } min-w-[20%]  bg-opacity-20  dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center`}
      >
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderPacking}
        </div>
        <p className="text-sm font-semibold">التعبئة</p>
      </button>
      <button className="min-w-[20%]  bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center">
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderShipped}
        </div>
        <p className="text-sm font-semibold">شحنها</p>
      </button>
      <button className="min-w-[20%]  bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center">
        <div className="ICON relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
          {OrderIcons.OrderDelivered}
        </div>
        <p className="text-sm font-semibold">تم التوصيل</p>
      </button>
      <button
        onClick={(e) => onSubmit(e)}
        className="min-w-[20%]  bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center"
      >
        <div
          className={`${
            order?.isDelivered ? "bg-green-500" : "bg-white"
          } min-w-[20%]  bg-opacity-20  dark:bg-gray-900 dark:bg-opacity-40 flex p-3 rounded-md gap-x-5 hover:bg-green-100 cursor-pointer  items-center`}
        >
          {OrderIcons.OrderCanceld}
        </div>
        <p className="text-sm font-semibold">تم إلغاء </p>
      </button>
    </ol>
  );
}
