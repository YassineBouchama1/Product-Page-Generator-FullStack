import React from "react";

export default function Status() {
  return (
    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <svg
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          ></path>
        </svg>
      </div>
      <div className="text-right">
        <p className="text-2xl">$11,257</p>
        <p>Sales</p>
      </div>
    </div>
  );
}
