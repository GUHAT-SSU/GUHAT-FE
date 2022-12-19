import axios from "axios";

import { refresh, refreshErrorHandle } from "../lib/refresh";

const AuthApi = axios.create({
    baseURL: process.env.REACT_APP_AUTH_BASE_URL,
    timeout: 100000,
    params: {},
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

AuthApi.interceptors.request.use(refresh, refreshErrorHandle);

export default AuthApi;
