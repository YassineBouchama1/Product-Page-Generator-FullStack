"use client";
import { NextResponse, NextRequest } from "next/server";
import Cookies from "js-cookie";
import notify from "@/hooks/useNotifaction";
import UserService from "@/lib/UserApi";
import { useState } from "react";

export default function ChangePasswordHook() {
  const [password, setPassword] = useState<string>();
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  Cookies.set("loggedin", "true");
  const onChangePassword = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(password);

    if (password !== passwordConfirm) {
      notify("password noth matching", "warn");
    } else if (password === "") {
      notify("add password", "warn");
    } else {
      const response = await UserService.changePassword(password);

      if (response.token) {
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

        console.log(JSON.parse(Cookies.get("user")));
      }
      console.log(response);
    }
  };
  return { onChangePassword, setPassword, setPasswordConfirm };
}
