import Api from "..";
import { requestPosting } from "../../types/posting.type";
import AuthApi from "../authApi";

export const requestSchedule = async () => {
    return await AuthApi.post("user/schedule");
};

export const loadSchedule = async () => {
    return await AuthApi.get("user/schedule");
};

export const submitPosting = async (body: requestPosting) => {
    return await Api.post(
        "/posting/lecture",
        { ...body, viewCnt: 0, status: "open" },
        {
            baseURL: process.env.RECAT_APP_BASE_URL,
        }
    );
};

export const closeRecruit = async (postId: number | string) => {
    return await Api.post(`/project/create?postId=${postId}`);
};
