import React from "react";
import pic from "../../../../public/p.png";

import Image from "next/image";
import Link from "next/link";
export default function CardImage() {
  return (
    <div className="h-[300px] flex flex-col items-center p-10  border border-gray-200 rounded-lg shadow">
      <Image
        src={pic}
        alt="image name"
        width="100"
        height="100"
        className="w-full h-[80%] mb-3  shadow-lg"
      />

      <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
        <Link
          href="#"
          className="inline-flex items-center px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete
        </Link>
        <Link
          href="#"
          className="inline-flex items-center px-4 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Copy Link
        </Link>
      </div>
    </div>
  );
}
