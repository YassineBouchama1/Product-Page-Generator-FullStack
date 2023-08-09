import notify from "@/hooks/useNotifaction";

const API_URL = "http://127.0.0.1:4000/api/v1/Orders";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTE0NDIxNDgsImV4cCI6MTY5OTIxODE0OH0.57xJEQ3WlnsPyPoD8LZfzCXsuHI9F1SbR3H_oU33pV8";
async function findAll(limit?: number, page?: number) {
  try {
    const res = await fetch(`${API_URL}?limit=${limit}&page=${page}`, {
      cache: "no-store",
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
    notify("Error fetching data", "error");
    throw err;
  }
};

//Update Status Order 
const updateStatus = async (id: any, data: any) => {
  try {
    const response = await fetch(`${API_URL}/${id}/status`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ status: "Confirmed" }),
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
