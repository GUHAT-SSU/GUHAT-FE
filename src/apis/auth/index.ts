import { getCookieToken, setRefreshToken } from "@/storage/cookie";
import axios from "axios";

// @ts-ignore
const getAccessToken = async () => {
    const refreshToken = getCookieToken();

    let token = "";
    let alertCheck = true;
    if (refreshToken) {
        const body = {
            refreshToken: refreshToken,
        };
        // 토큰 갱신 서버통신
        token = await axios
            .post(`/auth/token`, body, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                withCredentials: true,
                baseURL: process.env.REACT_APP_AUTH_BASE_URL,
            })
            .then((res) => {
                console.log("token 달라", res.data.data);

                let res_refreshToken = res.data.data.refreshToken;

                if (res_refreshToken && refreshToken !== res_refreshToken)
                    setRefreshToken(refreshToken);
                return res.data.data.accessToken;
            })
            .catch((error) => {
                if (error.response.data.message === "회원정보 없음") {
                    //removeCookieToken();
                }
                console.log(error);
            });
        return token;
    } else return token;
};

export { getAccessToken };
