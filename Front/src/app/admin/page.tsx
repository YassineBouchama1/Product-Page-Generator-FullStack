import React from "react";
import Status from "../../components/AdminDashboard/utilis/Status";
import OrderList from "@/components/AdminDashboard/utilis/OrderList";
import Icons from "@/components/AdminDashboard/icons/MainPage";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <section className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        <Status title="المنتجات المباعة" status="32" icon={Icons.IconSales} />
        <Status title="قيد الانتظار" status="14" icon={Icons.IconCanceld} />

        <Status title="دخل" status="$961.99" icon={Icons.IconIncom} />
      </section>
      <section className="  min-h-screen w-full ">
        <div className="w-full  bg-gray-50 p-2 border-b flex justify-between   shadow-md rounded-t-lg">
          <span>أحدث الطلبات</span>
          <Link href="/admin/orders">
            <span className="text-red-700 font-bold text-sm cursor-pointer hover:underline duration-200">
              عرض الكل
            </span>
          </Link>
        </div>
        <OrderList />
      </section>
    </div>
  );
}
