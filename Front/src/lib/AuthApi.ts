
const API_URL = `${process.env.BACKEND_URL}/auth`;
async function signup(body: Promise<any>) {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res.status === 404) {
    // This will activate the closest `error.js` Error Boundary
    console.log("prbel");
  }

  return res.json();
}

const AuthService = {
  signup,
  login,
};

export default AuthService;
