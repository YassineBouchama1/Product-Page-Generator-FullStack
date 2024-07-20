'use client'

import React, { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ProductService from "@/lib/ProductApi";
import notify from "@/hooks/useNotifaction";
import displayErrors from "@/hooks/useDisplayErrors";
import Cookies from "js-cookie";

interface ProductFormData {
  title: string;
  quantity: string;
  price: string;
  seo: string;
  display: string | any;
  image: File | string;
  description: string;
  id: string;
}

interface ProductFormHookProps {
  type: "create" | "edit";
  product?: Partial<ProductFormData>;
}

export default function ProductFormHook({ type, product }: ProductFormHookProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const editor = useRef(null);

  const [form, setForm] = useState<ProductFormData>({
    title: product?.title || "",
    quantity: product?.quantity || "",
    price: product?.price || "",
    seo: product?.seo || "",
    display: product?.image || "",
    image: "",
    description: product?.description || "",
    id: product?.id || "",
  });

  const handleStateChange = (fieldName: keyof ProductFormData, value: string | File) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.includes("image")) {
      notify("Please upload an image!", "warn");
      return;
    }
    handleStateChange("image", file);
    handleStateChange("display", URL.createObjectURL(file));
  };

  const config = {
    placeholder: "Start typing...",
    height: "500",
  };

  const validateForm = (): boolean => {
    if (form.title.trim().length <= 3) {
      notify("Title should be longer", "warn");
      return false;
    }
    if (form.description.trim().length <= 30) {
      notify("Description should be longer", "warn");
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    const formData = new FormData();

    if (type === "create" || (type === "edit" && form.image !== "")) {
      formData.append("image", form.image);
    }

    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("quantity", form.quantity);
    formData.append("price", form.price);
    formData.append("seo", form.seo);

    const token = Cookies.get('token');

    try {
      let result;
      if (type === "create") {
        result = await ProductService.create(token, formData);
      } else {
        result = await ProductService.update(token, formData, form.id);
      }
      console.log(result)
      if (result.errors || result.error) {
        displayErrors(result);
        notify(result.message || "An error occurred", "warn");
        return;
      }

      if (result.success || result.status) {
        notify(`Product ${type === "create" ? "created" : "updated"} successfully`, "success");
        // router.push('/admin/products');
      }
    } catch (error) {
      notify(`Failed to ${type} product. Please try again.`, "error");
    } finally {
      setSubmitting(false);
    }
  };

  const toggleModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setModal((prev) => !prev);
  };

  return {
    submitting,
    form,
    modal,
    handleStateChange,
    editor,
    config,
    handleChangeImage,
    handleFormSubmit,
    toggleModal,
  };
}