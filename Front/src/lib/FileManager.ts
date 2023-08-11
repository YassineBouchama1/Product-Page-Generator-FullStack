import Cookies from "js-cookie";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGQ2NjZhZWRjZTk3NjM5MTBhMTZkYTkiLCJpYXQiOjE2OTE3NzI2MDEsImV4cCI6MTY5OTU0ODYwMX0.VHYXOZFOiNU7pI9mmLOujVC0MCSoZ31dS9cQdZ3vcP8";

export const findAll = async (page?: string) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:4000/api/v1/uploader?limit=8`,

      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${TOKEN}`,
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

const findById = async (id: any) => {};

const create = async (formData: any) => {
  const res = await fetch("http://127.0.0.1:4000/api/v1/uploader", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: formData,
  });
  if (res.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
};

const deleteById = async (id: any) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:4000/api/v1/uploader/${id}`,

      {
        method: "DELETE",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${TOKEN}`,
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
