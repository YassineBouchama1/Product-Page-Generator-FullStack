import Status from "@/components/AdminDashboard/utilis/Status";
import React from "react";

export default function OrderPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        <Status />
        <Status />
        <Status />
      </div>
      <section className="bg-white  min-h-screen w-full  rounded-md p-5">
        Orders
      </section>
    </div>
  );
}
