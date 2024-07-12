"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

import BtnCopyLink from "@/components/Shared/BtnCopyLink";

import { ToastContainer } from "react-toastify";
import ProductCardHook from "./ProductCardHook";

export default function ProductCard({ item }) {
  const { onDelete } = ProductCardHook();
  const linkProduct = `http://localhost:3000/product/${item._id}`;
  return (
    <div className="min-w-sm max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-10">
        <Image
          src={item.image}
          alt="image name"
          width="70"
          height="10"
          className="w-100 h-100 mb-3 rounded-sm shadow-lg"
        />{" "}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {item.title}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          كمية:{item.quantity}
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6 gap-2 justify-center items-center">
          <button
            onClick={(e) => onDelete(item.id, e)}
            className="inline-flex items-center px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            الحذف
          </button>
          <Link
            href={`/admin/products/${item._id}`}
            className="inline-flex items-center px-4  text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            تعديل
          </Link>
        </div>
        <BtnCopyLink url={linkProduct} />
      </div>
      <ToastContainer />
    </div>
  );
}
