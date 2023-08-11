import { ApiResponse, Product, ErrorResponse } from "@/types/ProductType";
import Cookies from "js-cookie";
const API_URL = "http://127.0.0.1:4000/api/v1/products";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGQ2NjZhZWRjZTk3NjM5MTBhMTZkYTkiLCJpYXQiOjE2OTE3NzI2MDEsImV4cCI6MTY5OTU0ODYwMX0.VHYXOZFOiNU7pI9mmLOujVC0MCSoZ31dS9cQdZ3vcP8";
async function findAll(page?: number) {
  try {
    const res = await fetch(`${API_URL}?limit=6&page=${page}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (res.status === 404) {
      console.log("Problem occurred");
    }

    return res.json();
  } catch (err) {
    throw err;
  }
}

const create = async (formData: any) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: formData,
    });

    return response.json();
  } catch (err) {
    throw err;
  }
};

const update = async (id: any, formData: any) => {
  try {
    const response = await fetch(`${API_URL}/${formData}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: id,
    });

    return response.json();
  } catch (err) {
    console.log("Error");
    throw err;
  }
};

const deleteById = async (id: any) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (res.status === 404) {
      console.log("Problem occurred");
    }

    return res.json();
  } catch (err) {
    throw err;
  }
};

const findById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.json();
  } catch (err) {
    console.log("Error");
    throw err;
  }
};

const ProductService = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};

export default ProductService;
