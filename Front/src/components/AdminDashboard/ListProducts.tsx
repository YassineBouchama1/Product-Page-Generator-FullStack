import Image from "next/image";
import React from "react";
import pic from "../../../public/p.png";
import ProductCard from "./ProductCard";
import Pagination from "./utilis/Pagination";
export default function ListProducts() {
  return (
    <div className=" grid lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4 sm:grid-cols-2 overflow-x-auto  text-right justify-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
