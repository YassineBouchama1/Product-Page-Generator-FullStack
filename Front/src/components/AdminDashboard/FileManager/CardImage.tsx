"use client";
import Image from "next/image";
import Link from "next/link";
import useDeleteFile from "@/Hook/FileManager/deleteFileHook";
export default function CardImage({ item }) {
  const useImage = useDeleteFile();

  const copy = async () => {
    await navigator.clipboard.writeText(item.image);
    alert("link copied");
  };
  return (
    <div className="h-[300px] flex flex-col items-center p-10  border border-gray-200 rounded-lg shadow">
      <Image
        src={item.image}
        alt="image name"
        width="100"
        height="100"
        className="w-full h-[80%] mb-3  shadow-lg"
      />

      <div className="flex mt-4 space-x-3 md:mt-6 gap-2">
        <button
          onClick={(e) => useImage.onDelete(item._id, e)}
          className="inline-flex items-center px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete
        </button>
        <button
          onClick={copy}
          className="inline-flex items-center px-4 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}
