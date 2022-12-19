import { useQuery } from "react-query";
import Api from "../../index";

const getResultByKeyword = async (keyword: string, option: string) => {
    let op;
    if (option === "수업명") op = "lecture";
    else if (option === "교수님") op = "professor";
    else op = "stack";
    console.log("request uri", keyword);

    const data = await Api.get(
        `/search?keyword=${encodeURIComponent(keyword)}&&option=${op}`
    )
        .then((res) => {
            let result: any = [];
            result = res.data.data.map((context: any, idx: number) => {
                return context;
            });

            return result.slice(0, 20);
        })
        .catch((error) => {
            console.log("error", error);
        });

    return data;
};

export const useKeywordResults = (keyword: string, option: string) => {
    return useQuery(
        ["keyword", keyword, option],
        () => getResultByKeyword(keyword, option),
        {
            enabled: !!keyword && keyword !== "",
            select: (data) => data,
        }
    );
};
