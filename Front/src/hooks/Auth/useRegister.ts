"use client";

import Joi from "joi-browser";
import { useEffect, useState } from "react";
import AuthService from "@/services/AuthApi";
import notify from "../Global/useNotifaction";
import useValidator from "../Global/useFormValidator";
import apiClient from "@/services/baseURL";
import Register from "@/app/(auth)/register/page";

interface initialData {
  nameStore: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function RegisterHook() {
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
  const { data, errorsValidator, handleChange, validateData } = useValidator(
    initialData,
    schema
  );

  console.log("from me");
  const getdataTest = () => {
    return ["ya", "gola", "bbd", "dgfff", "ya", "gola", "bbd", "dgfff"];
  };

  const datao = getdataTest();
  const Register = [datao];
  return [datao];
}
