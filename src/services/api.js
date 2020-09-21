import axios from "axios";

const api = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_PRODUCTION_API_URL
            : process.env.REACT_APP_DEV_API_URL,
});

api.interceptors.request.use(async (config) => {
    let token = window.localStorage.getItem("token");
    if (token) {
        token = JSON.parse(token);
        config.headers.Authorization = `Bearer ${token.access_token}`;
    }

    return config;
});

export default api;
