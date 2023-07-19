import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:4000/api/v1",
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhmNTE0ODdjOTY1NzFkZDQ2ZDU4MDMiLCJpYXQiOjE2ODc0NDMwNzEsImV4cCI6MTY5NTIxOTA3MX0.FzlHREnhnowr9jIINH72dR0qy0Jajh5Mg_F3OBxJ4mI`,
    },
});

export default apiClient;
