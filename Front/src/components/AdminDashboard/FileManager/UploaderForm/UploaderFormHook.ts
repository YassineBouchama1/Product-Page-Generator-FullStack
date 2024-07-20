import React, { useCallback, useState } from "react";
import FileManagerServeice from "@/lib/FileManager";
import notify from "@/hooks/useNotifaction";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";


const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB


const useUploaderForm = () => {


  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const [file, setFile] = useState<File | null>(null);


  const onSubmit = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);


    if (!file) {
      notify("Please select an image", "warn");
      setIsLoading(false);
      return;
    }


    if (file.size > MAX_FILE_SIZE) {
      notify("File size exceeds 5MB limit. Please choose a smaller file.", "warn");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    const token = Cookies.get('token');
    if (!token) {
      notify("You are not authenticated. Please log in.", "error");
      setIsLoading(false);
      return;
    }

    try {
      const result = await FileManagerServeice.create(token, formData);

      if (result.status === "error") {
        notify(result.message || "There is a problem. Please try again.", "warn");
      } else {
        router.refresh();
        notify("Upload successful", "success");
        setFile(null);
      }
    } catch (error) {
      if (error instanceof Error) {
        notify(`An error occurred: ${error.message}`, "error");
      } else {
        notify("An unexpected error occurred. Please try again later.", "error");
      }
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  }, [file, router]);


  return { isLoading, onSubmit, setFile };
};

export default useUploaderForm;
