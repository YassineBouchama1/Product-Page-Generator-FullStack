"use client";
import { useEffect, useRef, useState } from "react";
import useValidator from "../Global/useFormValidator";
import Joi from "joi-browser";
import ProductService from "@/services/ProductApi";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import {
  getOneProductRedux,
  updateProductRedux,
} from "@/stores/productsSlice/ActionsProducts";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
export default function useAddProduct() {
  ///Start config textRich
  const editor = useRef(null);
  const config = {
    placeholder: "Start typings...",
    height: "500",
  };
  const params = useParams();
  console.log(params);
  const [content, setContent] = useState("");

  ///End config textRich

  const [mainImage, setMainImage] = useState({
    image: null,
    displayImageCover: null,
  });
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [formInputData, setformInputData] = useState({
    title: "",
    quantity: "",
    price: "",
    seo: "",
  });
  //@desc get data from inputs not include images
  const router = useRouter();

  const dispatch = useAppDispatch();
  //@desc get data for spicific product by params.id

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  // @desc get images from user (main Image)
  const handleChangeImage = (evnt) => {
    setMainImage({
      image: evnt.target.files[0],
      displayImageCover: URL.createObjectURL(evnt.target.files[0]),
    });
  };

  // this schema from joi to add requires

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // add validation to products inputs validator
    if (false) {
      console.log("data dosn't valid");
      return;
    } else {
      const formData = await new FormData();
      // formData.append("images", mainImage.image);
      await formData.append("title", formInputData.title);
      await formData.append("description", content);
      await formData.append("quantity", formInputData.quantity);
      await formData.append("price", formInputData.price);
      await formData.append("seo", formInputData.seo);

      //send inputs to server fro create accont
      //   const result = await dispatch(updateProductRedux(params.id, formData));
      const result = await ProductService.create(formData);
      console.log(result);
      router.refresh();
    }
  };
  const fileFun = {
    editor,
    config,
    content,
    setContent,
    onSubmit,
    mainImage,
    handleChange,
    formInputData,
    error,
    isloading,
  };
  return fileFun;
}
