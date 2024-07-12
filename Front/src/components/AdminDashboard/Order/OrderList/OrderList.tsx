"use client";
import React from "react";
import OrderTable from "./OrderTable";
import { ToastContainer } from "react-toastify";

export default function OrderList({ orders }) {
  console.log(orders);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg text-right">
      <table className="w-full text-sm  text-gray-500 dark:text-gray-400 divide-y divide-gray-200">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              الرمز
            </th>
            <th scope="col" className="px-6 py-3">
              اسم المنتج
            </th>
            <th scope="col" className="px-6 py-3">
              كمية
            </th>
            <th scope="col" className="px-6 py-3">
              تاريخ الطلب
            </th>
            <th scope="col" className="px-6 py-3">
              تكلفة الطلب
            </th>
            <th scope="col" className="px-6 py-3">
              حالة الطلب
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">تعديل </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <OrderTable key={index} order={item} />
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}
