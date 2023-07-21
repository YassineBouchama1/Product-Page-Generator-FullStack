import Link from "next/link";
import React from "react";

export default function OrderList() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-b-lg text-right">
      <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
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
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #2
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Apple MacBook Pro
            </th>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">10/05/23</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <span className="bg-green-600 text-white rounded-xl px-2 py-1">
                Shipped
              </span>
            </td>

            <td className="px-6 py-4 flex gap-3 text-right">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #2
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">11/11/23</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              {" "}
              <span className="bg-red-600 text-white rounded-xl px-2 py-1">
                Canceld
              </span>
            </td>
            <td className="px-6 py-4 flex gap-3 text-right">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #2
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">11/11/23</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              {" "}
              <span className="bg-red-600 text-white rounded-xl px-2 py-1">
                Canceld
              </span>
            </td>
            <td className="px-6 py-4 flex gap-3 text-right">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #2
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">11/11/23</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              {" "}
              <span className="bg-red-600 text-white rounded-xl px-2 py-1">
                Canceld
              </span>
            </td>
            <td className="px-6 py-4 flex gap-3 text-right">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #2
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">11/11/23</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              {" "}
              <span className="bg-red-600 text-white rounded-xl px-2 py-1">
                Canceld
              </span>
            </td>
            <td className="px-6 py-4 flex gap-3 text-right">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              #2
            </th>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4">21/01/23</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">
              <span className="bg-blue-600 text-white rounded-xl px-2 py-1">
                Pending
              </span>
            </td>

            <td className="px-6 py-4 flex gap-3 text-right">
              <a
                href="#"
                className="font-medium text-red-600 dark:text-red-500 hover:underline"
              >
                Delete
              </a>
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
