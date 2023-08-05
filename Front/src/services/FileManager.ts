async function findAll(page?: any) {
  const res = await fetch(
    `http://127.0.0.1:4000/api/v1/uploader?limit=8&page=${page}`,
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

const findById = async (id: any) => {};

const create = async (formData: any) => {
  const res = await fetch("http://127.0.0.1:4000/api/v1/uploader", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGJkNDkzNGYxZWYxOGFkMmUwYTNiOGQiLCJpYXQiOjE2OTEyMzg0NzgsImV4cCI6MTY5OTAxNDQ3OH0.0DKS5MiWyy9vC7ovBB5ztIqalNZv6g37lSoy7oa8OJ0",
    },
    body: formData,
  });
  if (res.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
};

const update = async (id: any, body: object) => {};

const deleteById = async (id: any) => {
  const res = await fetch(`http://127.0.0.1:4000/api/v1/uploader/${id}`, {
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

const FileManagerServeice = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};

export default FileManagerServeice;
