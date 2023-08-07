"use client";
import { useEffect, useRef, useState } from "react";
import useValidator from "@/hooks/Global/useFormValidator";
import Joi from "joi-browser";
import ProductService from "@/lib/ProductApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  getOneProductRedux,
  updateProductRedux,
} from "@/Redux/productsSlice/ActionsProducts";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
export default function useUpdateProduct() {
  ///Start config textRich
  const editor = useRef(null);
  const config = {
    placeholder: "Start typings...",
    height: "500",
  };
  const params = useParams();

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
  useEffect(() => {
    const getOneProduct = async () => {
      setIsloading(true);
      await dispatch(getOneProductRedux(params.id));
    };

    getOneProduct();
  }, []);

  const GetOneProduct = useAppSelector((state) => state.products.GetOneProduct);

  useEffect(() => {
    if (GetOneProduct?.status === "error") {
      setError(true);
      return;
    }

    setformInputData({
      title: GetOneProduct.data?.title,
      quantity: GetOneProduct.data?.quantity,
      price: GetOneProduct.data?.price,
      seo: GetOneProduct.data?.seo,
    });

    setContent(GetOneProduct.data?.description);
    // setMainImage({
    //   image: null,
    //   displayImageCover: GetOneProduct?.images[0],
    // });
    setIsloading(false);
    setError(false);
  }, [GetOneProduct]);

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

    //validator
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
      // const result = await dispatch(updateProductRedux(params.id, formData));
      const result = await ProductService.update(params.id, formData);
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
