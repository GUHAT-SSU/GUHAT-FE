import { useQuery } from "react-query";
import Api from "../index";

export const postValidation = async (lectureId: string) => {
    return await Api.get(`/lecture/${lectureId}/review/validation`);
};

export const createReview = async (lectureId: string, body: any) => {
    return await Api.post(`/lecture/${lectureId}/review/new`, body);
};
export const createReviewFile = async (
    lectureId: string,
    reviewId: string | number,
    body: FormData
) => {
    return await Api.post(
        `/lecture/${lectureId}/review/new/file?reviewId=${reviewId}`,
        body,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
};

export const getRecentReviews = async () => {
    return await Api.get("/home/review");
};

export const getRecentReviewList = async (page: number) => {
    return await Api.get(`/posting/lectures?sort={latest}&page=${page}`).then(
        (res) => res.data.data
    );
};

export const useRecentReview = (page: number) => {
    return useQuery(["recentReview", page], () => getRecentReviewList(page), {
        enabled: !!page,
        select: (data: any[]) =>
            data.map((item: any, idx: number) => {
                return {
                    id: item.id,
                    isOwner: item.isMine,
                    title: item.title,
                    detail: item.detail,
                    total: item.total,
                    current: item.current,
                    endDate: item.endDate,
                    createdAt: item.createdAt,
                    lectureName: item.lecture.name,
                    type: item.type,
                    professor: item.lecture.professors,
                    writer: item.writer,
                };
            }),
    });
};

export const getReview = async (
    id: string | null,
    lectureId: string | null
) => {
    if (id && lectureId)
        return await Api.get(`/lecture/${lectureId}/review/${id}`);
};

export const createReviewComment = async (
    id: string,
    lectureId: string,
    comment: any
) => {
    return await Api.post(
        `/lecture/${lectureId}/review/${id}/comment`,
        comment
    );
};

export const getReviewComment = async (id: string, lectureId: string) => {
    return await Api.get(`/lecture/${lectureId}/review/${id}/comment`).then(
        (res) => res.data.data
    );
};
