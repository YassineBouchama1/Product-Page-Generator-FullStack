import notify from "@/hooks/useNotifaction";
import Cookies from "js-cookie";
const API_URL = "http://127.0.0.1:4000/api/v1/user";

const changePassword = async (token: string,password: string) => {
  try {
    const response = await fetch(`${API_URL}/changeMyPassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Replace with your actual token
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
