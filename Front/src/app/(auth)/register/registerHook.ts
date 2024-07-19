
import Joi from "joi-browser";
import AuthService from "@/lib/AuthApi";
import { useRouter } from "next/navigation";
import Validator from "@/hooks/useFormValidator";

import notify from "@/hooks/useNotifaction";
import { useState } from "react";

interface initialData {
  nameStore: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function RegisterHook() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

  const initialData: initialData = {
    nameStore: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  // this schema from joi to add requires
  const schema = {
    nameStore: Joi.string().required().label("nameStore"),
    email: Joi.string().email().required().label("email"),
    password: Joi.string().min(6).required().label("password"),
    passwordConfirm: Joi.ref("password"),
  };

  // this for validate data from user
  const { data, errorsValidator, handleChange, validateData } = Validator(
    initialData,
    schema
  );

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const rsul = validateData();
    //validator
    if (!rsul) {
      setIsLoading(false);
      console.log("data dosn't valid");
      notify("data dosn't valid", 'warn')
      return;
    } else {

      console.log("data  valid");
      //send inputs to server fro create accont
      const result = await AuthService.signup(data);

      // handdle result came from server
      if (result) {
        setIsLoading(false);
        //@ if login succesful
        if (result.user) {
          // localStorage.setItem("token", result.token);
          // localStorage.setItem("user", JSON.stringify(result.data));
          notify("Accoun Created Successfuly", "success");
          setTimeout(() => {
            router.push("/login");
          }, 1100);
        }

        // //@ if we get error
        else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          if (result.errors) {
            const errorsList = await result.errors;
            //loop oon array of errores and display it
            errorsList.forEach((element: any) => {
              notify(element.msg, "error");
            });
          }
        }
      }
      setIsLoading(false);
      console.log("data  valid");
    }
  };



  return {
    isLoading,
    handleChange,
    onSubmit,
  };
}
