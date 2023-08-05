import CardImage from "@/components/AdminDashboard/FileManager/CardImage";
import ListImages from "@/components/AdminDashboard/FileManager/ListImages";
import Uploader from "@/components/AdminDashboard/FileManager/Uploader";
import Pagination from "@/components/AdminDashboard/utilis/Pagination";
import React from "react";
import { ToastContainer } from "react-toastify";

function page() {
  return (
    <section className="bg-white rounded-md flex flex-col  ">
      <section className="bg-white rounded-md grid  grid-cols-6">
        <ListImages />
        <div className="xl:col-span-1 col-span-6 w-full h-full order-first xl:order-2  border-r-2 p-5 flex flex-col items-center gap-5">
          <Uploader />
        </div>
      </section>

      <ToastContainer />
    </section>
  );
}

export default page;
