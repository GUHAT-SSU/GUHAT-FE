import Api from "..";

export const getMyAllPost = async () => {
    return await Api.get("/home/all").then((res) => {
        return res;
    });
};
