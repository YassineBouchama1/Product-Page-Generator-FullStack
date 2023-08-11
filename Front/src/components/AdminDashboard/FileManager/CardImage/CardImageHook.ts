import React from "react";
import FileManagerServeice from "@/lib/FileManager";
import notify from "@/hooks/useNotifaction";
import { useRouter } from "next/navigation";

const useCardImage = () => {
  const router = useRouter();

  const onDelete = async (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (!id) {
      notify("There is an error", "warn");
      return;
    }

    try {
      const result = await FileManagerServeice.deleteById(id);

      if (result.status === "error") {
        notify("There is a problem. Please try again.", "warn");
      } else if (result.data) {
        router.refresh();
        notify("Removed successfully", "success");
      } else {
        notify("Failed to process your request", "warn");
      }
    } catch (error) {
      notify("An error occurred. Please try again later.", "error");
      console.error("Error deleting image:", error);
    }
  };

  return { onDelete };
};

export default useCardImage;
