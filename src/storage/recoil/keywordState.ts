import { atom } from "recoil";

export const keywordState = atom({
    key: "Recoil-keywordStore",
    default: false,
});

export const searchState = atom({
    key: "Recoil-searchStore",
    default: "",
});
