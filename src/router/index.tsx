import { getCookieToken } from "@/storage/cookie";
import { keywordState, searchState } from "@/storage/recoil/keywordState";
import { errorState, loadingState } from "@/storage/recoil/loadingState";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import routerType from "../types/router.types";
import pageData from "./pageData";

export const Router = () => {
    const pageRoutes = pageData.map(({ name, path, component }: routerType) => {
        return (
            <Route
                key={name}
                path={`/${path}`}
                element={
                    path.includes("login") ? (
                        component
                    ) : (
                        <PrivateRoute Component={component} />
                    )
                }
            />
        );
    });
    return <Routes>{pageRoutes}</Routes>;
};

export default Router;

export function PrivateRoute({ Component }: React.ReactNode | any) {
    const setErrorState = useSetRecoilState(errorState);
    const setLoadingState = useSetRecoilState(loadingState);
    const setKeyword = useSetRecoilState(keywordState);
    const setSeach = useSetRecoilState(searchState);
    setLoadingState(true);
    setErrorState(null);
    setKeyword(false);
    setSeach("");

    const auth = getCookieToken();

    console.log("isAuthentic", auth);
    if (!auth) {
        alert("로그인이 필요합니다");
    }

    return auth ? Component : <Navigate to="/login" />;
}
