import React from "react";

export default function AddProduct() {
  return (
    <div className="">
      <h2 className="font-extrabold py-4 bg-white p-3">إضافة منتج جديد</h2>
      <button className=" bg-black fixed bottom-20 left-10 z-50 text-white p-2 shadow-md rounded-md">
        إنشاء المنتج{" "}
      </button>
      <div className="grid grid-rows-2 grid-cols-4 gap-4     ">
        {/* Product Details */}
        <section className="col-span-4 xl:col-span-2  w-full bg-white h-full min-h-[500px] rounded-md shadow p-4 justify-center items-center">
          <h3 className="font-extrabold py-4">حالة الطلب</h3>
          <div className="mb-6">
            <div id="imageSingle" className="dropzone single-dropzone mb-6">
              <div className="dz-message">
                <div className="pre-upload flex flex-col justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="mx-auto text-gray-500 inline-block w-10 h-10 bi bi-cloud-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                    ></path>
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"></path>
                  </svg>
                  <div className="py-3 text-center">
                    <span>Drag & drop images here</span>
                  </div>
                </div>
                <div className="pre-upload text-center ">
                  <button className="py-1.5 px-3 inline-block text-center rounded leading-normal text-gray-800 bg-gray-100 border border-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:ring-0 hover:border-gray-200 focus:bg-gray-200 focus:border-gray-200 focus:outline-none focus:ring-0 mr-2 dark:bg-gray-300">
                    Browse file
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label for="exampleInput1" className="inline-block mb-2">
              اسم المنتج:
            </label>
            <input
              type="text"
              className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
              id="exampleInput1"
            ></input>
          </div>
          <div className="mb-6">
            <label for="exampleInput1" className="inline-block mb-2">
              سعر:
            </label>
            <input
              type="number"
              className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
              id="exampleInput1"
            ></input>
          </div>
          <div className="mb-6">
            <label for="exampleInput1" className="inline-block mb-2">
              كمية:
            </label>
            <input
              type="number"
              className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
              id="exampleInput1"
            ></input>
          </div>
        </section>

        {/* Order Status */}
        <section className=" col-span-4 xl:col-span-2 w-full bg-white h-full min-h-[500px] rounded-md shadow p-4">
          <h3 className="font-extrabold py-4"> تحسين محركات البحث</h3>
          <div className="mb-6">
            <label for="exampleInput1" className="inline-block mb-2">
              عنوان:
            </label>
            <input
              type="text"
              className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
              id="exampleInput1"
            ></input>
          </div>
          <div className="mb-6">
            <label for="exampleTextarea1" class="inline-block mb-2">
              وصف:
            </label>
            <textarea
              class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
              id="exampleTextarea1"
              rows="3"
            ></textarea>
          </div>
        </section>

        {/* Address*/}
        <section className=" col-span-4 xl:col-span-4   h-[400px]  p-4  bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
          <h3 className="font-extrabold py-4">وصف المنتج</h3>
        </section>
      </div>
    </div>
  );
}
