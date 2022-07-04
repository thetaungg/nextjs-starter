import axios from "axios";

import { apiUrl } from "@/utils/constants";

export const createAxiosInstance = (token = "") => {
    return axios.create({
        baseURL: apiUrl,
        headers: {
            Authorization: token ? `Bearer ${token}` : false,
        },
    });
};

export const endpoints = {};
