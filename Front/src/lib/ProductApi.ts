async function findAll(page?) {
  const res = await fetch(
    `http://127.0.0.1:4000/api/v1/Products?limit=6&page=${page}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",

        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTEyMzg0NzgsImV4cCI6MTY5OTAxNDQ3OH0.0DKS5MiWyy9vC7ovBB5ztIqalNZv6g37lSoy7oa8OJ0",
      },
    }
  );
  if (res.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
}

async function findById(id: any) {
  const res = await fetch(`http://127.0.0.1:4000/api/v1/Products/${id}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",

      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTEyMzg0NzgsImV4cCI6MTY5OTAxNDQ3OH0.0DKS5MiWyy9vC7ovBB5ztIqalNZv6g37lSoy7oa8OJ0",
    },
  });
  if (res.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log("error");
  }

  return res.json();
}

export const create = async (formData: any) => {
  try {
    const response = await fetch(`http://127.0.0.1:4000/api/v1/products`, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTEyMzg0NzgsImV4cCI6MTY5OTAxNDQ3OH0.0DKS5MiWyy9vC7ovBB5ztIqalNZv6g37lSoy7oa8OJ0",
      },
      body: formData,
    });

    return response.json();
  } catch (err) {
    throw err;
  }
};

export const update = async (formData: any, id: any) => {
  console.log(id);
  console.log(formData);
  try {
    const response = await fetch(
      `http://127.0.0.1:4000/api/v1/products/${id}`,
      {
        cache: "no-store",
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTEyMzg0NzgsImV4cCI6MTY5OTAxNDQ3OH0.0DKS5MiWyy9vC7ovBB5ztIqalNZv6g37lSoy7oa8OJ0",
        },
        body: formData,
      }
    );

    return response.json();
  } catch (err) {
    throw err;
  }
};

const deleteById = async (id: any) => {
  const res = await fetch(`http://127.0.0.1:4000/api/v1/Products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",

      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTEyMzg0NzgsImV4cCI6MTY5OTAxNDQ3OH0.0DKS5MiWyy9vC7ovBB5ztIqalNZv6g37lSoy7oa8OJ0",
    },
  });
  if (res.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
};

const ProductService = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};

export default ProductService;
