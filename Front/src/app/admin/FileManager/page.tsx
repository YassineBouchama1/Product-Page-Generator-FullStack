import CardImage from "@/components/AdminDashboard/FileManager/CardImage/CardImage";
import UploaderForm from "@/components/AdminDashboard/FileManager/UploaderForm/UploaderForm";

import Error from "@/components/Shared/Error";
import FileManagerServeice from "@/lib/FileManager";
import React from "react";
import { ToastContainer } from "react-toastify";
import { cookies } from 'next/headers'

async function page() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) return <Error />;

  const files = await FileManagerServeice.findAll(token?.value);

  if (!files?.data) return <Error message="There is a pb while fetching Files"/>;
  return (
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
  );
}

export default page;
