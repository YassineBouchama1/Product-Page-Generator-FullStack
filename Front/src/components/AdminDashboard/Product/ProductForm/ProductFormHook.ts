'use client'
import React, { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ProductService from "@/lib/ProductApi";
import notify from "@/hooks/useNotifaction";
import displayErrors from "@/hooks/useDisplayErrors";
import Cookies from "js-cookie";

export default function ProductFormHook({ type, product }) {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [model, setModel] = useState<boolean>(false);

  const [form, setForm] = useState({
    title: product?.title || "",
    quantity: product?.quantity || "",
    price: product?.price || "",
    seo: product?.seo || "",
    display: product?.image || "",
    image: "",
    description: product?.description || "",
    id: product?._id || "",
  });

  const handleStateChange = (fieldName, value) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  console.log(form.display)
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    console.log(file)
    if (!file) return;
    if (!file.type.includes("image")) {
      alert("Please upload an image!");
      return;
    }
    handleStateChange("image", file);
    handleStateChange("display", URL.createObjectURL(file));
  };

  //For Text Rich
  const editor = useRef(null);
  const config = {
    placeholder: "Start typing...",
    height: "500",
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    if (form.title.trim().length <= 3) {
      notify("Title should be longer", "success");
      return;
    }

    if (form.description.trim().length <= 30) {
      notify("Description should be longer", "success");
      return;
    }

    const formData = new FormData();

    if (type === "create") {
      formData.append("image", form.image);
    }

    if (type === "edit" && form.image !== "") {
      formData.append("image", form.image);
    }

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("quantity", form.quantity);
    formData.append("price", form.price);
    formData.append("seo", form.seo);



    setSubmitting(false);
    // bring coockies in client comp
    const token = Cookies.get('token');

    try {
      if (type === "create") {
        const result = await ProductService.create(token, formData);

        if (result.errors || result.error) {
          setSubmitting(false);
          displayErrors(result);
          return;
        }
        if (result.success) {
          setSubmitting(false);
          notify("Created", "success");
          router.push('/products')
        }
      }

      if (type === "edit") {
        const result = await ProductService.update(token, formData, product.id);
        console.log(result)
        if (result.errors || result.error) {
          displayErrors(result);
          setSubmitting(false);
          return;
        }
        if (result.status) {
          setSubmitting(false);
          notify("Updated Done", "success");
          router.refresh();
          return;
        }


      }
    } catch (error) {
      notify(
        `Failed to ${type === "create" ? "create" : "edit"
        } a project. Try again!`,
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const onModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setModel((previous) => !previous);
  };

  return {
    submitting,
    form,
    model,
    handleStateChange,
    editor,
    config,
    handleChangeImage,
    handleFormSubmit,
    onModal,
  };
}
