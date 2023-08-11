"use client";

import UploaderForm from "../FileManager/UploaderForm/UploaderForm";
import { ToastContainer } from "react-toastify";
import CardImage from "../FileManager/CardImage/CardImage";

export default function DisplayFiles({ onModal, files }) {
  return (
    <div className="absolute  top-[-10%] left-0  z-50  w-full p-4 h-full overflow-y-scroll  bg-white  rounded-lg shadow ">
      <div className="flex items-start   p-4 border-b rounded-t dark:border-gray-600">
        <button
          type="button"
          className="text-gray-400 font-bold bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
          onClick={(e) => onModal(e)}
        >
          x
        </button>
      </div>

      <div className="p-6 space-y-6 max-h-full">
        <section className="bg-white rounded-md flex flex-col  overflow-hidden px-8 shadow">
          <section className="bg-white rounded-md grid  grid-cols-6">
            <div className="xl:col-span-5 col-span-6 w-full min-h-screen h-full p-5 grid xl:grid-cols-4 grid-cols-2    gap-5 justify-center">
              {files &&
                files.data?.map((user: { id: React.Key }) => (
                  <div key={user.id}>
                    <CardImage item={user} />
                  </div>
                ))}
            </div>
            <div className="xl:col-span-1 col-span-6 w-full h-full order-first xl:order-2  border-r-2 p-5 flex flex-col items-center gap-5">
              <UploaderForm />
            </div>
          </section>
          <ToastContainer />
        </section>
      </div>
    </div>
  );
}
