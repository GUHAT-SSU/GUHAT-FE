import { useQuery } from "react-query";
import Api from "..";

export const getHomeRecruitList = async () => {
    return await Api.get("/home/lecture");
};

export const getRecentRecruitList = async (page: number) => {
    return await Api.get(`/posting/lectures?sort={latest}&page=${page}`).then(
        (res) => res.data.data
    );
};

export const useRecentRecruit = (page: number) => {
    return useQuery(["recentRecruit", page], () => getRecentRecruitList(page), {
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
