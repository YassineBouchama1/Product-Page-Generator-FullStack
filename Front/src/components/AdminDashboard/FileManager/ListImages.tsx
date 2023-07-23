import React from "react";
import CardImage from "./CardImage";

export default function ListImages() {
  return (
    <div className="xl:col-span-5 col-span-6 w-full min-h-screen h-full p-5 grid xl:grid-cols-4 grid-cols-2    gap-5 justify-center">
      <CardImage />
      <CardImage />
      <CardImage />
      <CardImage />
      <CardImage />
    </div>
  );
}
