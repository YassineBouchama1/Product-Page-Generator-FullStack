import Image from "next/image";
import React from "react";
import pic from "../../../public/p.png";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="min-w-md max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-10">
        <Image
          src={pic}
          alt="image name"
          width="50"
          height="10"
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
        />{" "}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Product Name{" "}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Quantity:23
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
          <Link
            href="#"
            className="inline-flex items-center px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-4  text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
