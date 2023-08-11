import notify from "@/hooks/useNotifaction";
import Cookies from "js-cookie";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGQ2NjZhZWRjZTk3NjM5MTBhMTZkYTkiLCJpYXQiOjE2OTE3NzI2MDEsImV4cCI6MTY5OTU0ODYwMX0.VHYXOZFOiNU7pI9mmLOujVC0MCSoZ31dS9cQdZ3vcP8";
const API_URL = "http://127.0.0.1:4000/api/v1/user";

const changePassword = async (password: string) => {
  try {
    const response = await fetch(`${API_URL}/changeMyPassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`, // Replace with your actual token
      },
      body: JSON.stringify({ password }), // Convert the status to JSON
    });

    return response.json();
  } catch (err) {
    notify("Error fetching data", "error");
    throw err;
  }
};

const UserService = {
  changePassword,
};

export default UserService;
