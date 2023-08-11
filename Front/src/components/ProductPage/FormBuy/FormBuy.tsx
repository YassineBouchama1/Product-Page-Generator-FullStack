"use client";
import notify from "@/hooks/useNotifaction";
import BuyNow from "../BuyBtn";
import React, { useState } from "react";
import OrderService from "@/lib/OrdersApi";
export default function FormBuy() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const handleStateChange = (fieldName, value) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      cartItems: [
        { productID: "64d6679edce9763910a16de7", quantity: 3, price: 323 },
      ],
      shippingAddress: form,
      totalOrderPrice: 5474,
      user: "64d666aedce9763910a16da9",
    };
    if (form.name.length <= 5) {
      notify("name is Required", "success");
      return;
    } else if (form.phone.length <= 10) {
      notify("Phone is required", "success");
      return;
    } else if (form.address.length <= 10) {
      notify("address is required", "success");
      return;
    } else {
      const result = await OrderService.create(formData); // fetch data  post new order
      console.log(result);
      notify("adon", "success");
    }
  };
  return (
    <form className="mx-auto m-6 max-w-lg rounded-lg border">
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div className="flex gap-5">
          <div>
            <input
              onChange={(e) => handleStateChange("name", e.target.value)}
              name="name"
              placeholder="الاسم الكامل"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>

          <div>
            <input
              onChange={(e) => handleStateChange("phone", e.target.value)}
              placeholder="رقم الهاتف"
              name="phone"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="w-full  px-3 py-2 flex justify-end items-center ">
            <input
              onChange={(e) => handleStateChange("address", e.target.value)}
              placeholder="العنوان والمدينة"
              name="address"
              className="w-full rounded border  bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>
        </div>
        <BuyNow onSubmit={handleFormSubmit} />
      </div>
    </form>
  );
}
