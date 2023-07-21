import React from "react";
import Status from "../../components/AdminDashboard/utilis/Status";
import OrderList from "@/components/AdminDashboard/utilis/OrderList";
import Icons from "@/components/AdminDashboard/icons/MainPage";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        <Status title="المنتجات المباعة" status="32" icon={Icons.IconSales} />
        <Status title="قيد الانتظار" status="14" icon={Icons.IconCanceld} />

        <Status title="دخل" status="$961.99" icon={Icons.IconIncom} />
      </div>
      <section className="  min-h-screen w-full  rounded-md ">
        <OrderList />
      </section>
    </div>
  );
}
