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