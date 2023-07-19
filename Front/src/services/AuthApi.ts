import apiClient from "./baseURL";

const login = async (body: object) => {
  const response = await apiClient.post("/auth/login", body);
  return response.data;
};

const signup = async (body: object) => {
  const response = await apiClient.post("/auth/signup", body);
  return response.data;
};

const getdataTest = async (): Promise<any> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response;
};

const AuthService = {
  signup,
  login,
  getdataTest,
};

export default AuthService;
