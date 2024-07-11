import notify from "@/hooks/useNotifaction";

const API_URL = "http://127.0.0.1:4000/api/v1/Orders";

async function findAll(token: string, limit?: number, page?: number) {
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
        "Content-Type": "application/json",
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
const updateStatus = async (token: string, orderId: any, status: any) => {
  try {
    const response = await fetch(`${API_URL}/${orderId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Replace with your actual token
      },
      body: JSON.stringify({ status }), // Convert the status to JSON
    });

    return response.json();
  } catch (err) {
    notify("Error fetching data", "error");
    throw err;
  }
};

const deleteById = async (token: string, id: any) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
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
};

const findById = async (token: string, id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
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
