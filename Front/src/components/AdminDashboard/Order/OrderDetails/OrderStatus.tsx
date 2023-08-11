"use client";

import React, { useState } from "react";
import OrderService from "@/lib/OrdersApi";
import { useRouter } from "next/navigation";
import notify from "@/hooks/useNotifaction";

export default function OrderStatus({ orderId }) {
  const [status, setStatus] = useState("");
  const router = useRouter();
  const handleStatusChange = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };

  const updateOrderStatus = async (e) => {
    e.preventDefault();

    try {
      if (!status) {
        notify("Please select a status", "error");
        return;
      }

      const response = await OrderService.updateStatus(orderId, status);

      if (response.status === "error") {
        notify("There is a problem. Please try again.", "warn");
      } else if (response.data) {
        router.refresh();

        notify("Updated successfully", "success");
      } else {
        notify("Failed to process your request", "warn");
      }
    } catch (error) {
      notify("An error occurred. Please try again later.", "error");
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <label
        htmlFor="status"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        اختر حالة الطلب
      </label>

      <select
        onChange={handleStatusChange}
        id="status"
        value={status}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="Confirmed">تم تأكيد الطلب</option>
        <option value="Shipped">تم شحن</option>
        <option value="Delivered">تم استلام</option>
        <option value="Cancelled">ملغى</option>
      </select>

      <button
        onClick={updateOrderStatus}
        className="mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        تحديث الحالة
      </button>
    </div>
  );
}
