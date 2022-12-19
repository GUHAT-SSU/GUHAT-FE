import {
    errorState,
    loadingMessage,
    loadingState,
} from "@/storage/recoil/loadingState";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoadingContainer } from "./LoadingLayout.style";

const LoadingLayout = ({ msg }: { msg?: string }) => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [loadingMsg, setLoadingMsg] = useRecoilState(loadingMessage);
    const errorMsg = useRecoilValue(errorState);
    const [timeout, setTimoutState] = useState<ReturnType<
        typeof setTimeout
    > | null>(null);
    const [message, setMessage] = useState<string | null>(
        msg ? msg : "Loading..."
    );
    const loadingRef = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: loadingRef.current!!,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../../assets/loading.json"),
        });
        if (loading) {
            if (timeout !== null) {
                let state = setTimeout(() => {
                    setMessage(
                        "서버 요청이 많아 대기 시간이 길어지고 있습니다..."
                    );
                }, 5000);
                setTimoutState(state);
            }

            if (timeout) clearTimeout(timeout);
        } else {
            if (timeout) clearTimeout(timeout);
            setLoadingMsg("");
        }
    }, [loading]);

    useEffect(() => {}, [errorMsg]);
    useEffect(() => {}, [loadingMsg]);
    return (
        <>
            {loading || errorMsg ? (
                <LoadingContainer>
                    <div className="loading-img" ref={loadingRef}></div>
                    {errorMsg ? (
                        <h1>{errorMsg}</h1>
                    ) : loadingMsg ? (
                        <h1>{loadingMsg}</h1>
                    ) : (
                        <h1>{message}</h1>
                    )}
                </LoadingContainer>
            ) : null}
        </>
    );
};

export default LoadingLayout;
