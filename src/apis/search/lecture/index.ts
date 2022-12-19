import axios from "axios";
import { useQuery } from "react-query";

const getResultByLecture = async (lectureName: string) => {
    const data = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            const result: any = [];
            res.data.map((context: any, idx: number) => {
                if (context.body.includes(lectureName))
                    result.push(context.body.slice(0, 10));
            });

            return result;
        })
        .catch((error) => {
            console.log("error", error);
        });

    return data;
};

export const useLectureResults = (lectureName: string) => {
    return useQuery(
        ["lectureKeyword", lectureName],
        () => getResultByLecture(lectureName),
        {
            enabled: !!lectureName,
            select: (data) => data.slice(0, 10),
        }
    );
};
