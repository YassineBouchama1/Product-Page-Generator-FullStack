"use client";

import CreateProduct from "@/components/AdminDashboard/Product/CreateProduct";
import useAddProduct from "@/hooks/Product/useAddProduct";
import { useSearchParams } from "next/navigation";
export default function New() {
  return <CreateProduct />;
}
