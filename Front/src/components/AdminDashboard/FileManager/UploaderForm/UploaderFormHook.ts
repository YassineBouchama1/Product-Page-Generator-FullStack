import React, { useState } from "react";
import FileManagerServeice from "@/lib/FileManager";
import notify from "@/hooks/useNotifaction";
import { useRouter } from "next/navigation";

const useUploaderForm = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!file) {
      notify("Please select an image", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const result = await FileManagerServeice.create(formData);

      if (result.status === "error") {
        notify("There is a problem. Please try again.", "warn");
      } else {
        router.refresh();
        notify("Upload successful", "success");
        setFile(null);
      }
    } catch (error) {
      notify("An error occurred. Please try again later.", "error");
      console.error("Error uploading image:", error);
    }
  };

  return { onSubmit, setFile };
};

export default useUploaderForm;
