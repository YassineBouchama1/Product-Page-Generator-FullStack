import React from "react";
import ProductCard from "./ProductCard";
import ProductService from "@/services/ProductApi";

export default async function ListProducts() {
  const products = await ProductService.findAll();

  return (
    <div className=" grid lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4 sm:grid-cols-2 overflow-x-auto  text-right justify-center">
      {products &&
        products.data?.map((user: { id: React.Key }) => (
          <div key={user.id}>
            <ProductCard item={user} />
          </div>
        ))}
    </div>
  );
}
