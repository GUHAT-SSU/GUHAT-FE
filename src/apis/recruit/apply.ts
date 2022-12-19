import Api from "..";

export const requestApply = async (
    roleId: number | string,
    postId: number | string
) => {
    console.log("api/지원하기", roleId);
    return await Api.post(`/posting/lecture/apply`, { roleId, postId });
};

interface Iupdate {
    roleId: number | string;
    postId: number | string;
    member: any;
}

export const updateApply = async (request: Iupdate[]) => {
    console.log(request);
    return await Api.post(`/posting/lecture/member`, {
        members: request,
    });
};
