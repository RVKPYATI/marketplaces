import api from "./api";

export const login = async (username, password) => {
  try {
    const response = await api.post("/api/v1/account/login/", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await api.post("/api/v1/account/token/refresh/", {
      refresh: refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
