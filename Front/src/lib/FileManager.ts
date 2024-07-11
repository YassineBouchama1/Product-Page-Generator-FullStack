import Cookies from "js-cookie";
import { redirect } from "next/navigation";


export const findAll = async (token: string) => {


  try {
    const response = await fetch(
      `http://127.0.0.1:4000/api/v1/uploader?limit=8`,

      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },
      }
    );

 
    if (response.status === 404) {
      // This will activate the closest `error.js` Error Boundary
      console.log("prbel");
    }


    return response.json();
  } catch (err) {
    throw err;
  }
};

const findById = async (token: string, id: any) => { };

const create = async (token: string, formData: any) => {


  const res = await fetch("http://127.0.0.1:4000/api/v1/uploader", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  if (res.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
};

const deleteById = async (token: string, id: string | number) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:4000/api/v1/uploader/${id}`,

      {
        method: "DELETE",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 404) {
      // This will activate the closest `error.js` Error Boundary
      console.log("prbel");
    }

    return response.json();
  } catch (err) {
    console.log("prbel");
    throw err;
  }
};
const FileManagerServeice = {
  findAll,
  findById,
  create,
  deleteById,
};

export default FileManagerServeice;
