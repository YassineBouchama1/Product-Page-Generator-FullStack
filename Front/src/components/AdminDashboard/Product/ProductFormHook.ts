"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ProductService from "@/lib/ProductApi";
import notify from "@/hooks/useNotifaction";
import displayErrors from "@/hooks/useDisplayErrors";

export default function ProductFormHook({ type, product }) {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);

  const [model, setModel] = useState<boolean>(false);

  const [form, setForm] = useState({
    title: product?.title || "",
    quantity: product?.quantity || "",
    price: product?.price || "",
    seo: product?.seo || "",
    image: product?.image || "",
    display: product?.image || "",
    description: product?.description || "",
    id: product?._id || "",
  });

  const handleStateChange = (fieldName, value: string | File) => {
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
    handleStateChange("image", file);
    handleStateChange("display", URL.createObjectURL(file));
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

    //valiadator
    if (form.title.trim().length <= 3) {
      notify("title should be longer", "success");
      return;
    }

    if (form.description.trim().length <= 30) {
      notify("description should be longer", "success");
      return;
    }

    const formData = new FormData();

    if (type === "create") {
      formData.append("image", form.image);
    }

    //check in edit mode if user remove image without
    //add new one if true dosen't send image to server keep old one
    if (form.image !== "") {
      formData.append("image", form.image);
    }
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("quantity", form.quantity);
    formData.append("price", form.price);
    formData.append("seo", form.seo);

    try {
      if (type === "create") {
        const result = await ProductService.create(formData);

        if (result.errors) {
          setSubmitting(false);
          displayErrors(result);

          return;
        } else {
          notify("Created", "success");
          router.push("/admin/products");
        }
      }

      if (type === "edit") {
        const result = await ProductService.update(formData, product.id);

        if (result.errors) {
          displayErrors(result);
          setSubmitting(false);
          return;
        } else {
          notify("edited Done", "success");
          router.refresh();
        }
      }
    } catch (error) {
      notify(
        `Failed to ${
          type === "create" ? "create" : "edit"
        } a project. Try again!`,
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };




  const onModal = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    setModel((previous) => !previous);
  };



  
  const logic = {
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

  return logic;
}
