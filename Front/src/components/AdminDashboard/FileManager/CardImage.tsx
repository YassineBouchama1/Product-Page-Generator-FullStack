"use client";
import Image from "next/image";
import DeleteFileHook from "@/Hook/FileManager/deleteFileHook";
import BtnCopyLink from "@/components/Shared/BtnCopyLink";
export default function CardImage({ item }) {
  const Functions = DeleteFileHook();

  return (
    <div className="h-[300px] flex flex-col items-center p-10  border border-gray-200 rounded-lg shadow">
      <Image
        src={item.image}
        alt="image name"
        width="100"
        height="100"
        className="w-full h-[80%] mb-3  shadow-lg"
      />

      <div className="flex  space-x-3 md:mt-6 gap-2">
        <button
          onClick={(e) => Functions.onDelete(item._id, e)}
          className=" items-center px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          الحذف
        </button>
        <BtnCopyLink url={item.image} />
      </div>
    </div>
  );
}
