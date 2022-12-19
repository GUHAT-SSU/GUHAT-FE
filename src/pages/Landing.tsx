import { login } from "@/apis/auth/login";
import MainButton from "@/components/Button";
import InputFiled from "@/components/InputBox/InputFiled";
import APILayout from "@/components/Layout/APILayout";
import { accessTokenState } from "@/storage/atom/tokenState";
import { removeCookieToken, setRefreshToken } from "@/storage/cookie";
import { loadingMessage, loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
    LandingBgLayout,
    LandingLayout,
    LoginFormLayout,
    LoginImgLayout,
} from "../domain/landing/landing.style";
import { refreshTokenType } from "../types/token.type";

const Landing = () => {
    const navigator = useNavigate();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [loadingMsg, setLoadingMsg] = useRecoilState(loadingMessage);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    useEffect(() => {
        setLoading(false);
        setModalVisible(false);
    }, []);

    const onClickLogin = () => {
        removeCookieToken();
        setLoadingMsg("유세인트 접속 중...");
        if (id && pw && !loading) {
            setLoading(true);
            login(id, pw)
                .then((res) => {
                    alert("로그인 성공");
                    successLogin(
                        res.data.data.accesToken,
                        res.data.data.refreshToken
                    );
                    setTimeout(() => {
                        setLoading(false);
                        navigator("/");
                    }, 1000);
                })
                .catch((error) => {
                    if (error.response.status > 400) {
                        alert(error.response.data.message);
                    }
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                });
        }
    };

    const successLogin = (access: string, refresh: refreshTokenType) => {
        setRefreshToken(refresh);
        setAccessToken(access);
    };

    return (
        <APILayout modal={null}>
            <LandingLayout>
                <LandingBgLayout>
                    <h1 className="logo-title">GUHAT</h1>
                    <div className="logo-subtitle">
                        <h1>숭실대생을 위한</h1>
                        <h1>팀플 서포트 서비스 플랫폼</h1>
                    </div>
                    <button className="logo-button">GUHAT을 소개합니다</button>
                </LandingBgLayout>
                <LoginFormLayout>
                    <h1>U-saint 계정으로 시작하기</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            onClickLogin();
                        }}
                    >
                        <div
                            style={{
                                display: "flex",

                                flexDirection: "column",
                                justifyContent: "center",
                                width: "30rem",
                                gap: "1rem",
                                margin: "0 auto",
                            }}
                        >
                            <InputFiled
                                text={id}
                                handler={setId}
                                hint="Usaint ID"
                            />
                            <InputFiled
                                text={pw}
                                handler={setPw}
                                hint="Usaint Password"
                                type="password"
                            />

                            <MainButton
                                width="100%"
                                clickListener={onClickLogin}
                                disabled={!id && !pw}
                            >
                                로그인
                            </MainButton>
                        </div>
                    </form>
                    <LoginImgLayout />
                </LoginFormLayout>
            </LandingLayout>
        </APILayout>
    );
};

export default Landing;
