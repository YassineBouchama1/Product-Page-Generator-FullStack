"use client";

import { useRef } from "react";
import { store } from "@/Redux/store";

import { getOneProductRedux } from "@/Redux/productsSlice/ActionsProducts";
import { setDetaileProduct } from "@/Redux/productsSlice/ProductsSlice";

function Preloader({ product }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setDetaileProduct(product));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
