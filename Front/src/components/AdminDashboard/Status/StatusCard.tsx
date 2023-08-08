import React from "react";

interface Props {
  title: string;
  icon: any;
  status: string;
}

export default function StatusCard({ title, status, icon }: Props) {
  return (
    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between flex-row-reverse p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        {icon}
      </div>
      <div className="text-right">
        <p className="text-2xl">{status}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}
