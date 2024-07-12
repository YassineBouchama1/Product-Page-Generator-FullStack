"use client";
import notify from "@/hooks/useNotifaction";
import BuyNow from "../BuyBtn";
import React, { useRef, useState } from "react";
import OrderService from "@/lib/OrdersApi";
import { Product } from "@/types/ProductType";
import Modal from "@/components/Shared/Modal";
import ThankYou from "../ThankYou";

interface FormData {
  name: string;
  phone: string;
  address: string;
}

interface FormBuyProps {
  product: Product;
}

export default function FormBuy({ product }: FormBuyProps) {

  const [quantity, setQuantity] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
  });


  const formRef = useRef<HTMLFormElement>(null)
  const handleStateChange = (fieldName: keyof FormData, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.name.length <= 5) {
      notify("Name is required and should be longer than 5 characters", "error");
      return;
    }
    if (form.phone.length <= 10) {
      notify("Phone is required and should be at least 10 characters", "error");
      return;
    }
    if (form.address.length <= 10) {
      notify("Address is required and should be longer than 10 characters", "error");
      return;
    }

    const formData = {
      cartItems: { productID: product.id, quantity: quantity, price: product.price },
      shippingAddress: form,
      totalOrderPrice: product.price * quantity,
      user: product.user,
    };

    try {
      const result = await OrderService.create(formData);

      if (result.status) {
        // notify("Order Created", "success");
        setIsOpenModal(true)
        if (formRef.current) {
          formRef.current?.reset();
        }

      }



    } catch (error) {
      console.error("Error creating order:", error);
      notify("فشل في إنشاء الطلب", "error");
    }
  };


  const handleQuantityChange = (delta) => {
    if (quantity > 1 || delta === '+') {
      setQuantity(quantity + (delta === '+' ? 1 : -1));
    }
  };

  return (
    <form ref={formRef} className="mx-auto m-6 max-w-lg rounded-lg border" onSubmit={(e) => handleFormSubmit(e)}
    >
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div className="flex gap-5">
          <input
            onChange={(e) => handleStateChange("name", e.target.value)}
            name="name"
            placeholder="الاسم الكامل"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
          <input
            onChange={(e) => handleStateChange("phone", e.target.value)}
            placeholder="رقم الهاتف"
            name="phone"
            className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>
        <div className="flex gap-5 w-full">
          <div className="w-full px-3 py-2 flex justify-end items-center">
            <input
              onChange={(e) => handleStateChange("address", e.target.value)}
              placeholder="العنوان والمدينة"
              name="address"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
        </div>

        {/* btn submit ordrr  */}

        <div className="w-full flex justify-center">
          <button
            className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
          >
            اطلب الان
          </button>

          <div className="flex items-center gap-4 mx-5 border border-gray-200 rounded">
            <button
              type="button"
              onClick={() => handleQuantityChange('-')}
              className=" text-lg w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              type="button"
              onClick={() => handleQuantityChange('+')}
              className=" text-lg w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
            >
              +
            </button>
          </div>
        </div>

      </div>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ThankYou />
      </Modal>
    </form>
  );
}