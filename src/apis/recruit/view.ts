import { RecruitViewResponse } from "@/types/recruitLecture.types";
import { useQuery } from "react-query";
import Api from "..";

export const getRecruitPost = async (id: number | string) => {
    return await Api.get(`/posting/lecture/${id}`).then((res) => {
        console.log(res);
        return res.data.data;
    });
};
export const useGetRecruitPost = (id: number | string) => {
    return useQuery(["RecruitPostDetail", id], () => getRecruitPost(id), {
        enabled: !!id && id !== 0,
        select: (data: RecruitViewResponse) => data,
    });
};
