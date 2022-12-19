import moment from "moment";
import { Cookies } from "react-cookie";
import { refreshTokenType } from "../types/token.type";
const cookies = new Cookies();

export const setRefreshToken = (refreshToken: refreshTokenType) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 6); // today.setDate(today.getDate() + 7);
    console.log(new Date(expireDate));

    //더 짧게 설정
    localStorage.setItem(
        "expiresAt",
        moment().add(6, "day").format("yyyy-MM-DD HH:mm:ss")
        //moment().add(1, "hour").format("yyyy-MM-DD HH:mm:ss")
    );
    console.log(
        `new Exipre date : ${moment()
            .add(1, "day")
            .format("yyyy-MM-DD HH:mm:ss")}`
    );

    return cookies.set("refresh_token", refreshToken, {
        sameSite: "strict",
        path: "/",
        expires: new Date(expireDate),
        // httpOnly: true,
    });
};

export const getCookieToken = () => {
    return cookies.get("refresh_token");
};

export const removeCookieToken = () => {
    return cookies.remove("refresh_token", { sameSite: "strict", path: "/" });
};
