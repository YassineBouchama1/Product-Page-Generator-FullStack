import Image from "next/image";
import React from "react";
import pic from "../../../public/p.png";
import ProductCard from "./ProductCard";
export default function ListProducts() {
  return (
    <div className=" grid md:grid-cols-3 gap-4 sm:grid-cols-2 overflow-x-auto  text-right">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
