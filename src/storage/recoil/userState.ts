import { atom } from "recoil";

export interface IUserState {
    id: string;
    nickname?: string;
    name?: string;
    grade?: string;
    univ?: string;
    major?: string;
    semester?: string;
    level?: number;
    reviewScore?: number;
    score?: number;
    profileImg: string | null;
    currentProject?: number | string;
}

export const userState = atom<IUserState | null>({
    key: "Recoil-userStore",
    default: null,
});
