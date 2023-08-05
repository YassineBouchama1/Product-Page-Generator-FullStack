"use client";
import FileManagerServeice from "@/services/FileManager";
import notify from "../Global/useNotifaction";
import { useRouter } from "next/navigation";
import { useState } from "react";
const useInsertFile = () => {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);

  //function works when click upload
  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    //check if user select image
    if (file === null) {
      notify("select image first", "warn");
      return;
    } else {
      //convert image to fromdata
      const formData = new FormData();
      formData.append("image", file);
      //fetch image to server
      const result = await FileManagerServeice.create(formData);

      if (result.status === "error") {
        notify("there is pb repeat", "warn");
      } else {
        router.refresh();
        // router.push("/admin/products");
        notify("done", "success");
        setFile(null);
      }
    }
  };

  const fileFun = {
    onSubmit,
    setFile,
    file,
  };
  return fileFun;
};

export default useInsertFile;
