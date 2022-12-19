import { useQuery } from "react-query";
import Api from "..";

export const getRecentReviewList = async (page: number) => {
    return await Api.get(`/posting/review/all?sort=latest&page=${page}`).then(
        (res) => res.data.data
    );
};

export interface IReviewHistory {
    lecture?: any;
    id: number;
    title: string;
    reviewLevel: string;
    year: string;
    semester: string;
    memberNum: number | string;
    fileCnt: number | string;
    detail: string;
    nickname: string;
    writerLevel: number | string;
    viewCnt: number;
    likeCnt: number | string;
    createdAt?: string;
    isOwner: boolean;

    clickListener?: () => void;
}

export const useRecentReview = (page: number) => {
    return useQuery(["recentReviews", page], () => getRecentReviewList(page), {
        enabled: !!page,
        select: (data: any[]) =>
            data.map((item: any, idx: number) => {
                return {
                    ...item.review,
                    lecture: item.lecture,
                };
            }),
    });
};
