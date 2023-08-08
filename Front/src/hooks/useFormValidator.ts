import { useState, useEffect } from "react";
import Joi from "joi-browser";
import notify from "./useNotifaction";

const useValidator = (initialData: any, schema: any) => {
  const [data, setData] = useState(initialData);
  const [errorsValidator, setErrorsValidator] = useState([]);

  // //this for rerander function or chekcer every tim user change ipnuts
  // useEffect(() => {
  //   validateData();
  // }, [data]);

  const validateData = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options); // get only errors from return joi

    // if there is no errors we send empty array errors
    if (!error) {
      setErrorsValidator([]);
      return true;
    }

    //this for represont errors with good syntx
    const newErrors: any = {};
    for (const item of error.details) {
      newErrors[item.path[0]] = item.message;

      notify(item.message, "error");
    }
    setErrorsValidator(newErrors);
    return false;
  };

  //@desc get data from inputs not include images
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  return { data, errorsValidator, handleChange, validateData };
};

export default useValidator;
