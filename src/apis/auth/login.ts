import axios from "axios";
export const login = async (id: string, pw: string) => {
    return await axios.post(
        "/auth/login",
        { userId: id, password: pw },
        {
            baseURL: process.env.REACT_APP_AUTH_BASE_URL,
            timeout: 100000,
            params: {},
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
        }
    );
};
