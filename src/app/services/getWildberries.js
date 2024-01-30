import api from "./api";

export const productWildberries = async (token) => {
  try {
    const response = await api.get("/api/v1/wildberries/products/?limit=20", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
