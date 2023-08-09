import notify from "@/hooks/useNotifaction";

async function findAll(limit?, page?) {
  const res = await fetch(
    `http://127.0.0.1:4000/api/v1/Orders?limit=${limit}&page=${page}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTE0NDIxNDgsImV4cCI6MTY5OTIxODE0OH0.57xJEQ3WlnsPyPoD8LZfzCXsuHI9F1SbR3H_oU33pV8",
      },
    }
  );
  if (res.status === 404) {
    console.log("prbel");
  }

  return res.json();
}

const create = async (formData: any) => {
  try {
    const response = await fetch(`http://127.0.0.1:4000/api/v1/Orders`, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTE0NDIxNDgsImV4cCI6MTY5OTIxODE0OH0.57xJEQ3WlnsPyPoD8LZfzCXsuHI9F1SbR3H_oU33pV8",
      },
      body: formData,
    });

    return response.json();
  } catch (err) {
    notify("error fetch", "error");
    throw err;
  }
};

const updateStatus = async (id: any, formData: any) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:4000/api/v1/Orders/${id}/statusOrder`,
      {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTE0NDIxNDgsImV4cCI6MTY5OTIxODE0OH0.57xJEQ3WlnsPyPoD8LZfzCXsuHI9F1SbR3H_oU33pV8",
        },
        body: formData,
      }
    );

    return response.json();
  } catch (err) {
    notify("error fetch", "error");
    throw err;
  }
};

const deleteById = async (id: any) => {
  const res = await fetch(`http://127.0.0.1:4000/api/v1/Orders/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",

      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTE0NDIxNDgsImV4cCI6MTY5OTIxODE0OH0.57xJEQ3WlnsPyPoD8LZfzCXsuHI9F1SbR3H_oU33pV8",
    },
  });
  if (res.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
};

const findById = async (id: string) => {
  try {
    const response = await fetch(`http://127.0.0.1:4000/api/v1/Orders/${id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTE0NDIxNDgsImV4cCI6MTY5OTIxODE0OH0.57xJEQ3WlnsPyPoD8LZfzCXsuHI9F1SbR3H_oU33pV8",
      },
    });

    return response.json();
  } catch (err) {
    notify("error fetch", "error");
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
