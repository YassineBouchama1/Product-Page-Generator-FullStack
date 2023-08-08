import React from "react";

export default function OrderField({ field, value }) {
  return (
    <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
      <div className="flex justify-start items-start flex-col space-y-2">
        <p className="text-bold  font-semibold leading-4 text-left text-gray-800">
          {field}:
        </p>
        <p className="text-sm  leading-5 text-gray-600">{value}</p>
      </div>
    </div>
  );
}
