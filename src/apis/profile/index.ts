import { IUserState, userState } from "@/storage/recoil/userState";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import Api from "../index";

export const getPortfolio = async () => {
    return await Api.get("/profile").then((res) => res.data.data);
};
export const useGetMyPortfolio = (successHandler: (d: any) => void) => {
    return useQuery(["my-portfolio"], () => getPortfolio(), {
        select: (data: any[]) => data,
        onSuccess: (data: any) => successHandler(data),
    });
};

export const getMyRecruitPost = async (page: number) => {
    return await Api.get(`/profile/lecture/my?page=${page}`)
        .then((res) => res.data.data)
        .catch((e) => console.log(e));
};

export const useGetMyRecruitPost = (page: number) => {
    return useQuery(
        ["profile-recentRecruit", page],
        () => getMyRecruitPost(page),
        {
            enabled: !!page,
            select: (data: any[]) =>
                data.map((item: any, idx: number) => {
                    return {
                        id: item.id,
                        isOwner: item.isMine | item.isOwner,
                        isApply: item.isApply,
                        status: item.status,
                        title: item.title,
                        detail: item.detail,
                        type: item.type,
                        total: item.total,
                        current: item.current,
                        endDate: item.endDate,
                        createdAt: item.createdAt,
                        lectureName: item.lecture.name,
                        professor: item.lecture.professors,
                    };
                }),
        }
    );
};

export const getMyReviewPost = async (page: number) => {
    return await Api.get(`/profile/review/my?page=${page}`)
        .then((res) => res.data.data)
        .catch((e) => console.log(e));
};

export const useGetMyReviewPost = (page: number) => {
    return useQuery(
        ["profile-recentReview", page],
        () => getMyReviewPost(page),
        {
            enabled: !!page,
            select: (data: any[]) =>
                data.map((item: any, idx: number) => {
                    return {
                        lecture: item.lecture,
                        ...item.review,
                    };
                }),
        }
    );
};

export const uploadFiiles = async (profile: FormData) => {
    return await Api.post("profile/file", profile, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteProfile = async (path: string) => {
    const file = path;
    return await Api.post("profile/file/delete", { file: file });
};

export const uploadFile = async (file: FormData) => {
    try {
        const { data } = await Api.post("/upload", file);
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const updateProfileMode = async (mode: string) => {
    return await Api.patch("profile/mode?mode=" + mode);
};

export const updateProfile = async (profile: FormData, nickname: string) => {
    return await Api.post("user?nickname=" + nickname, profile).then((res) => {
        return res;
    });
};

export const getProfile = async () => {
    return await Api.get("home/user/").then((res) => {
        console.log(res);
        return res.data.data;
    });
};

export const useGetMyProfile = () => {
    return useQuery(["my-profile"], () => getProfile(), {
        select: (data: any[]) => data,
    });
};

export const useSaveProfile = (data: IUserState) => {
    const profile = useSetRecoilState(userState);
    profile(data);
};

export const updateIntro = (intro: string, detail: string) => {
    return Api.patch("/profile/intro", {
        introduction: intro ? intro : "",
        detail: detail ? detail : "",
    });
};

export const updateDetail = (skill: string[], personality: number[]) => {
    return Api.patch("/profile/detail", { skill, personality });
};

export const getMemberProfile = async (id: number | string) => {
    return await Api.get(`/project/profile/${id}`).then((res) => res.data.data);
};

export const writeMemberComment = async (
    body: any,

    profileId: any
) => {
    return await Api.post(`/project/profile/${profileId}/review/new`, body);
};
