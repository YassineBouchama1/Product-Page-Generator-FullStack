import Image from "next/image";
import React from "react";

export default function OrderField({ order, image }) {
  return (
    <>
      <table className=" w-full table-auto">
        <thead className="bg-gray-50 text-right text-xs font-semibold uppercase text-gray-400">
          <tr>
            <th className="p-2"></th>
            <th className="p-2">
              <div className="text-right font-semibold">اسم المنتج</div>
            </th>
            <th className="p-2">
              <div className="text-right font-semibold">كمية</div>
            </th>
            <th className="p-2">
              <div className="text-right font-semibold">الثمن</div>
            </th>
          </tr>
        </thead>

        <tbody className="divide-y  divide-gray-100 text-sm">
          <tr>
            <td className="p-2">
              <div className="font-medium text-gray-800">
                <Image
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={image}
                  height="200"
                  width="200"
                  alt=""
                ></Image>
              </div>
            </td>
            <td className="p-2">
              <div className="font-medium text-gray-800">
                {order.cartItems.productID.title}
              </div>
            </td>
            <td className="p-2">
              <div className="text-right">{order.cartItems.quantity}</div>
            </td>
            <td className="p-2">
              <div className="text-right font-medium text-green-500">
                <span className="text-green-400">$</span>
                {order.cartItems.price}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center space-x-4 border-t border-gray-100 px-5 py-4 text-2xl font-bold">
        <div>المبلغ إجمالي :</div>
        <div className="text-blue-400">
          <span x-text="total.toFixed(2)">
            <span className="text-blue-300">$</span>
            {order.cartItems.price * order.cartItems.quantity}
          </span>
        </div>
      </div>
    </>
  );
}
