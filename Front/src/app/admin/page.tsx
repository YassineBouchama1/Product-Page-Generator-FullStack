import React from "react";
import Status from "../../components/AdminDashboard/Status/StatusCard";
import OrderList from "@/components/AdminDashboard/Order/OrderList/OrderList";

import Link from "next/link";
import OrderService from "@/lib/OrdersApi";
import Error from "@/components/Shared/Error";

import StatusCard from "../../components/AdminDashboard/Status/StatusCard";
import Icons from "@/components/AdminDashboard/icons/MainPage";
import useConvertor from "@/hooks/useConvertor";
import { cookies } from "next/headers";

export default async function AdminPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) return <Error />;

  const orders = await OrderService.findAll(token.value, 10);

  if (!orders?.data) return <Error />;

  return (
    <div className="flex flex-col gap-y-10 overflow-hidden rounded-xl bg-white p-8 shadow">
      <h2 className="font-extrabold bg-white p-3">إضافة منتج جديد</h2>

      <section className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        <StatusCard
          title="المنتجات المباعة"
          status={useConvertor.shippedCount(orders?.data)}
          icon={Icons.IconSales}
        />
        <StatusCard
          title="قيد الانتظار"
          status={useConvertor.undeliveredCount(orders?.data)}
          icon={Icons.IconCanceld}
        />
        <StatusCard
          title="دخل"
          status={`$ ${useConvertor.income(orders?.data)}`}
          icon={Icons.IconIncom}
        />
      </section>

      <section className=" bg-white  w-full ">
        <div className="w-full  bg-gray-50 p-2 border-b flex justify-between   shadow-md rounded-t-lg">
          <span>أحدث الطلبات</span>
          <Link href="/admin/orders">
            <span className="text-red-700 font-bold text-sm cursor-pointer hover:underline duration-200">
              عرض الكل
            </span>
          </Link>
        </div>
        <OrderList orders={orders} />
      </section>
    </div>
  );
}
