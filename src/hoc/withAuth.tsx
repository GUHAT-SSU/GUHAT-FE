import { Route } from "react-router-dom";

import Landing from "@/pages/Landing";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../storage/atom/tokenState";
// @ts-ignore
export const withAuth = (Component) => (props) => {
    const [accessToken] = useRecoilState(accessTokenState);

    useEffect(() => {
        console.log(accessToken);
        if (!accessToken) {
            // getAccessToken().then((newAccessToken) => {
            //     if (!newAccessToken) {
            //         alert("로그인 후 이용해주세요.");
            //         router.push("/login");
            //     }
            // });
            alert("로그인 후 이용해주세요.");
            <Route path="/login" element={<Landing />} />;
        } else {
            console.log("token is here", accessToken);
        }
    }, []);

    return <Component {...props} />;
};
