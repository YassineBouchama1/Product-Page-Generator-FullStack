import TitlePage from "@/components/Shared/TitlePage";
import React from "react";
import ChangePassword from "@/components/AdminDashboard/Setting/ChangePassword";
export default function SettingPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <TitlePage text="الإعدادات" />
      <div className="flex flex-col gap-y-5">
        <section className="bg-white  min-h-[500px] w-full  rounded-md p-5">
          <h3 className="pb-5 py-5">تغيير كلمة السر </h3>
          <ChangePassword />
        </section>
        <section className="bg-white  min-h-screen w-full  rounded-md p-5"></section>
      </div>
    </div>
  );
}
