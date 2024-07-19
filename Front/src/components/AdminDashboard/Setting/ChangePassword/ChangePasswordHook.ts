"use client";
import { NextResponse, NextRequest } from "next/server";
import Cookies from "js-cookie";
import notify from "@/hooks/useNotifaction";
import UserService from "@/lib/UserApi";
import { useState } from "react";

export default function ChangePasswordHook() {
  const [password, setPassword] = useState<string>();
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false)

  Cookies.set("loggedin", "true");

  const onChangePassword = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    //start loading
    setIsLoading(true)
    // bring coockies in client comp
    const token = Cookies.get('token');


    if (password !== passwordConfirm) {
      notify("password noth matching", "warn");
      setIsLoading(false)

    } else if (password === "") {
      setIsLoading(false)

      notify("add password", "warn");
    } else {
      const response = await UserService.changePassword(token, password);

      if (response.status) {
        setIsLoading(false)

        // Set a cookie
        Cookies.set("token", response.token);

        Cookies.set(
          "user",
          JSON.stringify({
            id: response.data._id,
            name: response.data.nameStore,
            email: response.data.email,
          })
        );
        notify("Password changed", "success");

      }
      setIsLoading(false)

    }
  };
  return {isLoading, onChangePassword, setPassword, setPasswordConfirm };
}
