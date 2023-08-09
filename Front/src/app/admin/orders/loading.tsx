import React from "react";

export default function loading() {
  return (
    <div className="overflow-hidden  ">
      <h2 className="font-extrabold px-5 ">Loading</h2>

      <section className="  min-h-[70vh] w-full   p-4 bg-white  shadow rounded-xl">
        <div className="w-full  bg-gray-50 p-2 border-b flex justify-between   shadow-md rounded-t-lg">
          <span> Loading</span>
          <input
            className=" bg-gray-100 px-5 py-2 focus:outline-none "
            placeholder="بحث عن..."
            type="text"
          ></input>{" "}
        </div>
      </section>
    </div>
  );
}
