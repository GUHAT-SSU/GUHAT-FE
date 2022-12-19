import Api from "..";

export const getLecture = async (lectureId: number | string) => {
    return await Api.get(`/lecture?lectureId=${lectureId}`).then(
        (res) => res.data.data
    );
};

export const getLectureRecruits = async (
    lectureId: number | string,
    page?: number
) => {
    return await Api.get(
        `lecture/${lectureId}/recruits?sort=latest&page=${page ? page : 1}`
    ).then((res) => {
        const result = res.data.data;
        return result.map((i: any) => {
            return {
                id: i.id,
                title: i.title,
                writer: i.writer,
                time: i.lecture.schedule,
                year: i.lecture.year,
                semester: i.lecture.semester,
                lectureName: i.lecture.name,
                detail: i.detail,
                total: i.total,
                professor: i.lecture.professor,
                ...i,
            };
        });
    });
};

export const getLectureReviews = async (
    lectureId: number | string,
    page?: number
) => {
    return await Api.get(
        `lecture/${lectureId}/review/all?page=${page ? page : 1}`
    ).then((res) => {
        console.log("get response", res);
        const result = res.data.reviewList;
        return result.map((i: any) => {
            return {
                lecture: res.data.lecture,
                ...i,
            };
        });
    });
};
