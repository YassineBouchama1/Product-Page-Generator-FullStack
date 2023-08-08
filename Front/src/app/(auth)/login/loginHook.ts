"use client";

import Joi from "joi-browser";
import AuthService from "@/lib/AuthApi";
import { useRouter } from "next/navigation";
import useValidator from "../../../hooks/useFormValidator";

import notify from "@/hooks/useNotifaction";

interface initialData {
  email: string;
  password: string;
}

export default function LoginHook() {
  const router = useRouter();
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
  const { data, errorsValidator, handleChange, validateData } = useValidator(
    initialData,
    schema
  );

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const rsul = validateData();
    //validator
    if (!rsul) {
      console.log("data dosn't valid");
      return;
    } else {
      console.log("data  valid");
      //send inputs to server fro create accont
      const result = await AuthService.login(data);
      console.log(result);
      // handdle result came from server
      if (result) {
        //@ if login succesful
        if (result.token) {
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
      console.log("data  valid");
    }
  };

  const RegesterLogic = {
    handleChange,
    onSubmit,
  };

  return RegesterLogic;
}
