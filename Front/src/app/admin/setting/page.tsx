import TitlePage from "@/components/AdminDashboard/utilis/TitlePage";
import React from "react";

export default function SettingPage() {
  return (
    <div className="flex flex-col gap-y-10">
      <TitlePage text="الإعدادات" />
      <section className="bg-white  min-h-screen w-full  rounded-md p-5">
        Setting
      </section>
    </div>
  );
}
