"use client";

import Joi from "joi-browser";
import AuthService from "@/lib/AuthApi";
import { useRouter } from "next/navigation";
import Validator from "../../../hooks/useFormValidator";
import Cookies from "js-cookie";

import notify from "@/hooks/useNotifaction";
import { useState } from "react";

interface initialData {
  email: string;
  password: string;
}

export default function LoginHook() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const initialData: initialData = {
    email: "",
    password: "",
  };

  // this schema from joi to add requires
  const schema = {
    email: Joi.string().email().required().label("email"),
    password: Joi.string().min(6).required().label("password"),
  };

  // this for validate data from user
  const { data, errorsValidator, handleChange, validateData } = Validator(
    initialData,
    schema
  );

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // set loaidng
    setIsLoading(true)
    const rsul = validateData();
    //validator
    if (!rsul) {
      console.log("data dosn't valid");
      notify("data dosen't valid", "warn");
      setIsLoading(false)

      return;
    } else {

      console.log("data  valid");
      //send inputs to server fro create accont
      const result = await AuthService.login(data);
      console.log(result);
      // handdle result came from server
      if (result) {
        setIsLoading(false)

        //@ if login succesful
        if (result.token) {
          Cookies.set("token", result.token);
          Cookies.set("user", JSON.stringify(result.data));


          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.data));
          notify("Accoun Created Successfuly", "success");
          setTimeout(() => {
            router.push("/admin");
          }, 1100);
        }

        // //@ if we get error
        else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          if (result.message) {
            notify(result.message, "error");
          }
        }
      }
      setIsLoading(false)

      console.log("data  valid");
    }
  };

  return {
    isLoading,
    handleChange,
    onSubmit,
  };
}
