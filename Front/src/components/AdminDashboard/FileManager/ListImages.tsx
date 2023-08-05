import React from "react";
import CardImage from "./CardImage";
import FileManagerServeice from "@/services/FileManager";

export default async function ListImages() {
  const files = await FileManagerServeice.findAll();
  return (
    <div className="xl:col-span-5 col-span-6 w-full min-h-screen h-full p-5 grid xl:grid-cols-4 grid-cols-2    gap-5 justify-center">

      {files &&
        files.data?.map((user: { id: React.Key }) => (
          <div key={user.id}>
              <CardImage   item={user}/>
         
          </div>
        ))}
    </div>
  );
}
