
const API_URL = `${process.env.BACKEND_URL}/products`;

async function findAll(token: string, page?: number) {


  try {
    const res = await fetch(`${API_URL}?limit=6&page=${page}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

const create = async (token: string, formData: any) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return response.json();
  } catch (err) {
    throw err;
  }
};

const update = async (token: string, formData: any, id: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    return response.json();
  } catch (err) {
    console.log("Error");
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

    if (res.status === 404) {
      console.log("Problem occurred");
    }

    return res.json();
  } catch (err) {
    throw err;
  }
};

const findById = async (id: string, token?: string) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
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
