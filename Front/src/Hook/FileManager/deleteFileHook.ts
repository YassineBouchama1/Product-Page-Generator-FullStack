"use client";
import FileManagerServeice from "@/lib/FileManager";
import notify from "@/hooks/Global/useNotifaction";
import { useRouter } from "next/navigation";
const DeleteFileHook = () => {
  const router = useRouter();

  const onDelete = async (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (id === "" || null || undefined) return notify("the is error", "warn");

    const result = await FileManagerServeice.deleteById(id);

    if (result.status === "error") {
      notify("there is pb repeat", "warn");
    } else {
      router.refresh();
      // router.push("/admin/products");
      notify("Removed", "success");
    }
  };

  /// for copy link
  const copy = async (
    imageLink: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    await navigator.clipboard.writeText(imageLink);
    alert("link copied");
  };

  return {
    onDelete,
    copy,
  };
};

export default DeleteFileHook;
