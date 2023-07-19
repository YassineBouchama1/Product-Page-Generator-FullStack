import apiClient from "./baseURL";

const findAll = async () => {
    const response = await apiClient.get("/tutorials");
    return response.data;
};

const findById = async (id: any) => {
    const response = await apiClient.get(`/tutorials/${id}`);
    return response.data;
};

const create = async (body:object) => {
    const response = await apiClient.post("/tutorials",body );
    return response.data;
};

const update = async (id: any, body:object) => {
    const response = await apiClient.put<any>(`/tutorials/${id}`, body);
    return response.data;
};

const deleteById = async (id: any) => {
    const response = await apiClient.delete<any>(`/tutorials/${id}`);
    return response.data;
};

const ProductService = {
    findAll,
    findById,
    create,
    update,
    deleteById,
};

export default ProductService;
