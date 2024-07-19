import ChangePassword from "@/components/AdminDashboard/Setting/ChangePassword/ChangePassword";
import React from "react";

export default function SettingPage() {
  return (
    <div className="col-span-8 overflow-hidden rounded-xl bg-white px-8 shadow">
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">إعدادت الحساب</h1>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold">عنوان البريد الإلكتروني</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          عنوان بريدك الإلكتروني هو <strong>hello@yassine.info</strong>
        </p>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="py-2 text-xl font-semibold">كلمة السر</p>
      <ChangePassword />
      <hr className="mt-4 mb-8" />

      <div className="mb-10">
        <p className="py-2 text-xl font-semibold">حذف الحساب</p>
        <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          كن حذرا
        </p>
        <p className="mt-2">
          سيتم تعطيل حسابك ، إذا كنت تريد استعادته ، فاتصل بنا
        </p>
        <button className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2">
          الحذف
        </button>
      </div>
    </div>
  );
}
