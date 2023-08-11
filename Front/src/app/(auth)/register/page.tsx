"use client";
import { ToastContainer } from "react-toastify";

import UserLayout from "@/components/Layout/UserLayout";
import Link from "next/link";
import RegisterHook from "@/app/(auth)/register/registerHook";
// eslint-disable-next-line @next/next/no-async-client-component
export default function Register() {
  const { handleChange, onSubmit } = RegisterHook();
  return (
    <>
      <UserLayout>
        <section className="bg-white">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <form className="mx-auto max-w-lg rounded-lg border">
                <div className="flex flex-col gap-4 p-4 md:p-8">
                  <div className="flex gap-5">
                    <div>
                      <label
                        htmlFor="nameStore"
                        className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                      >
                        اسم المتجر
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        name="nameStore"
                        className="w-full rounded border  bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      ></input>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                      >
                        بريد إلكتروني
                      </label>
                      <input
                        type="email"
                        onChange={handleChange}
                        name="email"
                        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      ></input>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div>
                      <label
                        htmlFor="password"
                        className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                      >
                        كلمة المرور
                      </label>
                      <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      ></input>
                    </div>

                    <div>
                      <label
                        htmlFor="passowrdConfirm"
                        className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                      >
                        تأكيد كلمة المرور
                      </label>
                      <input
                        onChange={handleChange}
                        type="password"
                        name="passwordConfirm"
                        className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                      ></input>
                    </div>
                  </div>

                  <button
                    onClick={onSubmit}
                    className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
                  >
                    أنشئ حسابك
                  </button>

                  <div className="flex items-center justify-center bg-gray-100 p-4">
                    <p className="text-center text-sm text-gray-500">
                      لديك حساب بالفعل?{" "}
                      <Link
                        href="/login"
                        className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                      >
                        تسجيل الدخول{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </section>
        {/* <ToastContainer /> */}
      </UserLayout>
      <ToastContainer />
    </>
  );
}
