"use client";

import useConvertor from "@/hooks/useConvertor";
import notify from "@/hooks/useNotifaction";
import StatusOrder from "@/hooks/useStatusOrder";
import OrderService from "@/lib/OrdersApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "js-cookie";

export default function OrderTable({ order }) {
  const router = useRouter();


  console.log(order)

  //delete order
  const onDelete = async (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (id === "" || null || undefined) return notify("the is error", "warn");

    // bring coockies in client comp
    const token = Cookies.get('token');

    const result = await OrderService.deleteById(token, id);

    if (result.status === "error") {
      notify("there is pb repeat", "warn");
    } else {
      router.refresh();
      notify("Removed", "success");
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        #{order._id.slice(-4)}
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {order.shippingAddress.name || ""}
      </th>
      <td className="px-6 py-4">{order.cartItems.quantity}</td>
      <td className="px-6 py-4">{useConvertor.date(order.created_at)}</td>
      <td className="px-6 py-4">${order.cartItems.price}</td>
      <td className="px-6 py-4">{StatusOrder(order.status)}</td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            onClick={(e) => onDelete(order._id, e)}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>

          <Link
            href={`/admin/orders/${order._id}`}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>
        </div>
      </td>
    </tr>
  );
}
