"use client";
import FileManagerServeice from "@/services/FileManager";
import notify from "../Global/useNotifaction";
import { useRouter } from "next/navigation";
const useDeleteFile = () => {
  const router = useRouter();

  const onDelete = async (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (id === "" || null || undefined) return notify("the is error", "warn");
    const result = await FileManagerServeice.deleteById(id);

    //IF DONE RUN REDUX DISPATCH REFRICH THAT

    if (result.status === "error") {
      notify("there is pb repeat", "warn");
    } else {
      router.refresh();
      // router.push("/admin/products");
      notify("Removed", "success");
    }
  };

  const productFun = {
    onDelete,
  };
  return productFun;
};

export default useDeleteFile;
