import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 ">
        <div className="w-full"></div>
        <div className="w-full"></div>
        <div className="w-full"></div>
      </div>
      <section className="bg-white  min-h-screen w-full  rounded-md p-5">
        Loading ....
      </section>
    </div>
  );
}
