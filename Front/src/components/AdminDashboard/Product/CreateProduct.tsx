"use client";

import useAddProduct from "@/hooks/Product/useAddProduct";
import JoditEditor from "jodit-react";
import { useSearchParams } from "next/navigation";
export default  function CreateProduct() {
const createFunctions = useAddProduct()

return (
    <div className="relative">


      <h2 className="font-extrabold py-4">تفاصيل المنتج</h2>

      <div className="grid grid-rows-2 grid-cols-4 gap-4     ">
        {/* Product Details */}
        <section className="col-span-4 xl:col-span-2  w-full bg-white h-full min-h-[500px] rounded-md shadow p-4 justify-center items-center">
          <h3 className="font-extrabold py-4">حالة الطلب</h3>
          <div>
            <button
              onClick={(e) => createFunctions.onSubmit(e)}
              className=" bg-black fixed bottom-20 left-10 z-50 text-white p-2 shadow-md rounded-md"
            >
              تحديث المنتج{" "}
            </button>
            <h3 className="font-extrabold py-4">حالة الطلب</h3>

            <div className="mb-6">
              <label htmlFor="exampleInput1" className="inline-block mb-2">
                اسم المنتج:
              </label>
              <input
                onChange={createFunctions.handleChange}
                value={createFunctions.formInputData.title}
                type="text"
                name="title"
                className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                id="exampleInput1"
              ></input>
            </div>
            <div className="mb-6">
              <label htmlFor="exampleInput1" className="inline-block mb-2">
                سعر:
              </label>
              <input
                onChange={createFunctions.handleChange}
                value={createFunctions.formInputData.price}
                name="price"
                type="number"
                className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                id="exampleInput1"
              ></input>
            </div>
            <div className="mb-6">
              <label htmlFor="exampleInput1" className="inline-block mb-2">
                كمية:
              </label>
              <input
                onChange={createFunctions.handleChange}
                value={createFunctions.formInputData.quantity}
                name="quantity"
                type="number"
                className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                id="exampleInput1"
              ></input>
            </div>
            <h3 className="font-extrabold py-4"> تحسين محركات البحث</h3>

            <div className="mb-6">
              <label htmlFor="exampleTextarea1" className="inline-block mb-2">
                وصف:
              </label>
              <textarea
                onChange={createFunctions.handleChange}
                value={createFunctions.formInputData.seo}
                name="seo"
                className="w-full h-[100px] leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                id="exampleTextarea1"
              ></textarea>
            </div>
          </div>
        </section>

        {/* Order Status */}

        <section className=" col-span-4 xl:col-span-2 w-full bg-white  rounded-md shadow p-4">
          <h3 className="font-extrabold py-4"> تحسين محركات البحث</h3>
          {/* <UploadImageProduct
            image={createFunctions.mainImage?.displayImageCover}
          /> */}
        </section>

        {/* Description*/}
        <section className=" col-span-4 xl:col-span-4   min-h-[500px]  p-4  bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
          <h3 className="font-extrabold py-4">وصف المنتج</h3>

          <JoditEditor
            ref={createFunctions.editor}
            value={createFunctions.content}
            config={createFunctions.config}
            onBlur={(newContent) => createFunctions.setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          />
        </section>
      </div>
    </div>
  );
}
