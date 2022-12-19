import {
    getCookieToken,
    removeCookieToken,
    setRefreshToken,
} from "@/storage/cookie";
import { getAccessToken } from "@apis/auth";
import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";

const refresh = async (
    axiosConfig: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
    const refreshToken = getCookieToken();
    const expireAt = localStorage.getItem("expiresAt");
    let token = await getAccessToken();

    // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
    console.log(
        `expired? :${expireAt} /${moment(expireAt).diff(moment()) < 0}`
    );

    console.log(`token? :${token} / refresh : ${refreshToken}`);
    if (token && refreshToken && moment(expireAt).diff(moment()) < 0) {
        const body = {
            refreshToken: refreshToken,
        };

        // 토큰 갱신 서버통신
        await axios
            .post("/auth/refresh", body, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                    "Access-Control-Allow-Origin": "*",
                },
                withCredentials: true,
                baseURL: process.env.AUTH_BASE_URL,
            })
            .then((res) => {
                console.log(res.data);
                if (refreshToken === res.data.data.refreshToken) {
                    console.log("refresh 만료는 아직입니다");
                }
                setRefreshToken(res.data.data.refreshToken);
            });
    }

    axiosConfig.headers!.Authorization = token ? `Bearer ${token}` : "";

    return axiosConfig;
};

const refreshErrorHandle = (err: any) => {
    // Cookie.remove("refreshToken");
    removeCookieToken();
};

export { refresh, refreshErrorHandle };
