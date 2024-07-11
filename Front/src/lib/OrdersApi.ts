import notify from "@/hooks/useNotifaction";
import Cookies from "js-cookie";
const API_URL = "http://127.0.0.1:4000/api/v1/Orders";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjhmMzUzZDMxYjI0YzliN2ZjOTI4N2QiLCJpYXQiOjE3MjA2NjE5NjJ9.0wR8vAmS5CRz6WuEF9hkhKMjiBWlcB5Doc7r3m-MiBg";
async function findAll(token:string,limit?: number, page?: number) {
  try {
    const res = await fetch(`${API_URL}?limit=${limit}&page=${page}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  } catch (err) {
    notify("Error fetching data", "error");
    throw err;
  }
}

const create = async (form: any) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ form }),
    });

    return response.json();
  } catch (err) {
    notify("Error fetching data", "error");
    throw err;
  }
};

//Update Status Order
const updateStatus = async (orderId: any, status: any) => {
  try {
    const response = await fetch(`${API_URL}/${orderId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`, // Replace with your actual token
      },
      body: JSON.stringify({ status }), // Convert the status to JSON
    });

    return response.json();
  } catch (err) {
    notify("Error fetching data", "error");
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

    return res.json();
  } catch (err) {
    notify("Error fetching data", "error");
    throw err;
  }
};

const findById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.json();
  } catch (err) {
    notify("Error fetching data", "error");
    throw err;
  }
};

const OrderService = {
  findAll,
  findById,
  create,
  updateStatus,
  deleteById,
};

export default OrderService;
