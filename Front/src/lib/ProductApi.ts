const API_URL = "http://127.0.0.1:4000/api/v1/products";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTE0NDIxNDgsImV4cCI6MTY5OTIxODE0OH0.57xJEQ3WlnsPyPoD8LZfzCXsuHI9F1SbR3H_oU33pV8";
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
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: formData,
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
