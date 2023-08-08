import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//to make notifactio to any componentet
const notify = (msg: string, type: string) => {
  if (type === "warn") toast.warn(msg);
  else if (type === "success") toast.success(msg);
  else if (type === "error") toast.error(msg);
};

export default notify;
