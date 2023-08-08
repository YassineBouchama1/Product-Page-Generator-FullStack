import notify from "@/hooks/useNotifaction";

//to make notifactio to any componentet
const displayErrors = async (result) => {
  if (result.errors) {
    const errorsList = await result.errors;

    //loop oon array of errores and display it
    errorsList.forEach((element: any) => {
      notify(element.msg, "error");
    });
    return;
  }
};

export default displayErrors;
