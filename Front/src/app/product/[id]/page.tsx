import NavBarStore from "@/components/ProductPage/NavBarStore";
import FormBuy from "@/components/ProductPage/FormBuy/FormBuy";

import Error from "@/components/Shared/Error";

import ProductService from "@/lib/ProductApi";
import Image from "next/image";
import React from "react";
import { ToastContainer } from "react-toastify";
import { cookies } from "next/headers";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {

  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) return <Error />;


  const product = await ProductService.findById(token.value, id);

  if (!product?.data) return <Error />;
  return (
    <div className="container mx-auto">
      <NavBarStore name="yassStore" />

      <section>
        <div className="relative  mx-auto max-w-screen-xl px-4 py-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
            <div className="grid order-2 grid-cols-1 gap-4 lg:grid-cols-1 ">
              <div className="  h-full  w-full z-10">
                <div className="md:py-8 ">
                  <div className="mb-2 md:mb-3">
                    <h2 className=" font-bold text-gray-800 lg:text-3xl">
                      {product && product.data.title}
                    </h2>
                  </div>

                  <div className="mb-4 ">
                    <div className="flex items-end gap-2 ">
                      <span className="text-xl font-bold text-gray-800 md:text-2xl ">
                        MAD {product && product.data.price}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 flex items-center  gap-2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                      />
                    </svg>

                    <span className="text-sm">2-4 يوم الشحن</span>
                  </div>
                  <div className="flex flex-col gap-2.5 pl-10">
                    {product && product.data.description}
                  </div>
                  <FormBuy product={product} />
                </div>
              </div>
            </div>

            <div className=" lg:order-last border">
              <Image
                src={product.data.image}
                width={500}
                height={500}
                alt="Picture of the author"
                className=" lg:sticky content-center	  top-0 h-6/4 w-6/4 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
