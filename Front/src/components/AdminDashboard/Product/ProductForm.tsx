"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Loader from "@/components/Shared/Loader";
import { useRouter } from "next/navigation";
import ProductService from "@/lib/ProductApi";
import Image from "next/image";
import FormField from "@/components/Shared/FormField";
import ButtonSubmit from "@/components/Shared/ButtonSubmit";
import notify from "@/hooks/useNotifaction";
import displayErrors from "@/hooks/useDisplayErrors";
import { ToastContainer } from "react-toastify";
import ProductFormHook from "./ProductFormHook";


export default function ProductForm({ type, product }) {

const logic = ProductFormHook({ type, product })

  return (
    <div className="relative">
      {!product?.title && type === "edit" ? <Loader /> : null}

      <h2 className="font-extrabold py-4">تفاصيل المنتج</h2>
      <form onSubmit={(e) => logic.handleFormSubmit(e)}>
        <div className="grid grid-rows-2 grid-cols-4 gap-4     ">
          {/* Product Details */}
          <section className="col-span-4 xl:col-span-2  w-full bg-white h-full min-h-[500px] rounded-md shadow p-4 justify-center items-center">
            <h3 className="font-extrabold py-4">معلومات المنتج</h3>

            <ButtonSubmit
              title={
                logic.submitting
                  ? `${type === "create" ? "Creating" : "Editing"}`
                  : `${type === "create" ? "Create" : "Edit"}`
              }
              type="submit"
              submitting={logic.submitting}
            />

            <div className="mb-6">
              <FormField
                title="اسم المنتج:"
                state={logic.form.title}
                placeholder="Flexibble"
                setState={(value) => logic.handleStateChange("title", value)}
              />
            </div>
            <div className="mb-6">
              <FormField
                title="سعر:"
                type="number"
                state={logic.form.price}
                placeholder="add price"
                setState={(value) => logic.handleStateChange("price", value)}
              />
            </div>
            <div className="mb-6">
              <FormField
                title="كمية:"
                type="number"
                state={logic.form.quantity}
                placeholder="add quantity"
                setState={(value) => logic.handleStateChange("quantity", value)}
              />
            </div>
            <h3 className="font-extrabold py-4"> تحسين محركات البحث</h3>

            <div className="mb-6">
              <FormField
                title="وصف المنتج في محرك البحث:"
                state={logic.form.seo}
                placeholder="Showcase and discover remarkable developer projects."
                isTextArea
                setState={(value) => logic.handleStateChange("seo", value)}
              />
            </div>
          </section>

          {/* Order Status */}

          <section className=" col-span-4 xl:col-span-2 w-full bg-white  rounded-md shadow p-4">
            <h3 className="font-extrabold py-4">الصورة الرئيسية:</h3>
            <div className="flex flex-col gap-5 ">
              <label
                htmlFor="poster"
                className="flex justify-center items-center  h-[300px]"
              >
                {!logic.form.image && "Choose a poster for your project"}
                {logic.form.image && (
                  <div>
                    <button
                      onClick={() => logic.handleStateChange("image", "")}
                      className="text-red-800"
                    >
                      x
                    </button>
                    <div className="w-full h-[300px] mb-3 rounded-sm shadow-lg">
                      <Image
                        src={logic.form.display}
                        alt="image name"
                        width="70"
                        height="10"
                        className="w-full h-[300px] mb-3 rounded-sm shadow-lg"
                      />
                    </div>
                  </div>
                )}
              </label>

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
                    <label
                      htmlFor="image"
                      className="py-1.5 px-3 inline-block text-center rounded leading-normal text-gray-800 bg-gray-100 border border-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:ring-0 hover:border-gray-200 focus:bg-gray-200 focus:border-gray-200 focus:outline-none focus:ring-0 mr-2 dark:bg-gray-300"
                    >
                      Browse file
                      <input
                        onChange={(e) => logic.handleChangeImage(e)}
                        className="hidden"
                        id="image"
                        type="file"
                        accept="image/*"
                        // required={type === "create" ? true : false}
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Description*/}
          <section className="relative col-span-4 xl:col-span-4   min-h-[500px]  p-4  bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
            <div className="flex justify-between">
              {" "}
              <h3 className="font-extrabold py-4">وصف المنتج:</h3>
              <div>
                <button onClick={(e) => logic.onModal(e)}>Display Images</button>

                {logic.model && <p className="fixed top-40">poup images</p>}
              </div>
            </div>
            <JoditEditor
              ref={logic.editor}
              value={logic.form.description}
              config={logic.config}
              onBlur={(value) => logic.handleStateChange("description", value)} // preferred to use only this option to update the content for performance reasons
            />
          </section>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
