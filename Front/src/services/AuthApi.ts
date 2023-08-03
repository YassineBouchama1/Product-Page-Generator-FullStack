import apiClient from "./baseURL";

async function signup(body: Promise<any>) {
  const res = await fetch("http://127.0.0.1:4000/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
    body: JSON.stringify(body),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status === 400) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
}



async function login(body: Promise<any>) {
  const res = await fetch("http://127.0.0.1:4000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
    body: JSON.stringify(body),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status === 400) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
}


const AuthService = {
  signup,
};

export default AuthService;
