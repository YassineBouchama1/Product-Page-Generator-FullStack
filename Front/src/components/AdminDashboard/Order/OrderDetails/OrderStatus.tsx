"use client";

import OrderService from "@/lib/OrdersApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrderStatus({ id }) {
  const [status, setStatus] = useState(null);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("statusOrder", status);
    if (status !== null) {
      const resultt = await OrderService.updateStatus(id, formData);
      console.log(resultt);
      router.refresh();
    } else {
      console.log("probple");
      return;
    }
  };

  return (
    <div className="felx flex-col items-center w-full">
      <label
        htmlFor="countries_multiple"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        اختر الحالة طلب
      </label>
      <select
        onChange={(e) => setStatus(e.target.value)}
        id="countries_multiple"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="Confirmed"> تم تأكيد الطلب</option>
        <option value="Shipped">تم شحن</option>
        <option value="Delivered">تم إستلام</option>
        <option value="Cancelled">ملغى</option>
      </select>

      <button
        onClick={(e) => onSubmit(e)}
        type="button"
        className="
   mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
   focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        تحديث الحالة
      </button>
    </div>
  );
}
