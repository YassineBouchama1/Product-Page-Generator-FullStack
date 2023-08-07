"use client";
import useUpdateProduct from "@/Hook/Product/updateProductHook";
import React, { ChangeEvent, useRef, useState } from "react";

import JoditEditor from "jodit-react";
import Loader from "@/components/Shared/Loader";
import Error from "@/components/Shared/Error";
import { useAppSelector } from "@/Redux/hooks";
import { useRouter } from "next/navigation";
import ProductService from "@/lib/ProductApi";
import Image from "next/image";
import FormField from "@/components/Shared/FormField";
import ButtonSubmit from "@/components/Shared/ButtonSubmit";

export default function ProductForm({ type, product }) {
  const router = useRouter();

  // call state redux
  //   const product = useAppSelector(
  //     (state) => state.products.GetOneProduct
  //   );

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState({
    title: product?.title || "",
    quantity: product?.quantity || "",
    price: product?.price || "",
    seo: product?.seo || "",
    image: product?.images[0] || "",
    description: product?.description || "",
    id: product?._id || "",
  });

  const handleStateChange = (fieldName, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      alert("Please upload an image!");

      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange("image", result);
    };
  };

  ///Start config textRich
  const editor = useRef(null);
  const config = {
    placeholder: "Start typings...",
    height: "500",
  };
  ///End config textRich

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    const formData = await new FormData();
    formData.append("images", form.image);
    await formData.append("title", form.title);
    await formData.append("description", form.description);
    await formData.append("quantity", +form.quantity);
    await formData.append("price", +form.price);
    await formData.append("seo", form.seo);

    try {
      if (type === "create") {
        console.log("creating");
        const result = await ProductService.create(formData);
        console.log(result);
        router.push("/admin/products");
      }

      if (type === "edit") {
        await ProductService.update(formData, product.id);

        router.refresh();
      }
    } catch (error) {
      alert(
        `Failed to ${
          type === "create" ? "create" : "edit"
        } a project. Try again!`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* {updateFunctions.isloading ? <Loader /> : null}
      {updateFunctions.error ? <Error /> : null} */}
      <h2 className="font-extrabold py-4">تفاصيل المنتج</h2>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div className="grid grid-rows-2 grid-cols-4 gap-4     ">
          {/* Product Details */}
          <section className="col-span-4 xl:col-span-2  w-full bg-white h-full min-h-[500px] rounded-md shadow p-4 justify-center items-center">
            <h3 className="font-extrabold py-4">حالة الطلب</h3>

            <ButtonSubmit
              title={
                submitting
                  ? `${type === "create" ? "Creating" : "Editing"}`
                  : `${type === "create" ? "Create" : "Edit"}`
              }
              type="submit"
              submitting={submitting}
            />

            <div className="mb-6">
              <FormField
                title="Title"
                state={form.title}
                placeholder="Flexibble"
                setState={(value) => handleStateChange("title", value)}
              />
            </div>
            <div className="mb-6">
              <FormField
                title="Price"
                state={form.price}
                placeholder="add price"
                setState={(value) => handleStateChange("price", value)}
              />
            </div>
            <div className="mb-6">
              <FormField
                title="Quantity"
                state={form.quantity}
                placeholder="add quantity"
                setState={(value) => handleStateChange("quantity", value)}
              />
            </div>
            <h3 className="font-extrabold py-4"> تحسين محركات البحث</h3>

            <div className="mb-6">
              <FormField
                title="Seo Description"
                state={form.seo}
                placeholder="Showcase and discover remarkable developer projects."
                isTextArea
                setState={(value) => handleStateChange("seo", value)}
              />
            </div>
          </section>

          {/* Order Status */}

          <section className=" col-span-4 xl:col-span-2 w-full bg-white  rounded-md shadow p-4">
            <h3 className="font-extrabold py-4"> تحسين محركات البحث</h3>
            <div className="flexStart form_image-container">
              <label htmlFor="poster" className="flexCenter form_image-label">
                {!form.image && "Choose a poster for your project"}
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
                        onChange={(e) => handleChangeImage(e)}
                        className="hidden"
                        id="image"
                        type="file"
                        accept="image/*"
                        required={type === "create" ? true : false}
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Description*/}
          <section className=" col-span-4 xl:col-span-4   min-h-[500px]  p-4  bg-white dark:bg-gray-800 rounded-lg shadow-lg ">
            <h3 className="font-extrabold py-4">وصف المنتج</h3>

            <JoditEditor
              ref={editor}
              value={form.description}
              config={config}
              onBlur={(value) => handleStateChange("description", value)} // preferred to use only this option to update the content for performance reasons
            />
          </section>
        </div>
      </form>
    </div>
  );
}
