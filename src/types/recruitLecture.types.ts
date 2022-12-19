import { Ilecture } from "./lecture.types";
import { IUser } from "./user.type";
export interface recuritLecture {
    lecture: Ilecture | null;
    writerId: string;
    writer: IUser | null;
    recruitTitle: string;
    endDate: string | null;
    detail: string | null;
    status: string | null;
    viewCount: number | null;
    totalMember: number | null;
    currentMember: number | null;
}

export interface RecruitViewResponse {
    isOwner: boolean;
    isApply: string;
    title: string;
    writer: any;
    date: string;
    lecture: object;
    priority: string;
    endDate: string;
    Roles: any[];
    detail: string;
    piriority: string;
    createdAt: string;
    status: string;
}

export interface IRecruit {
    id: number;
    title: string; // 공지 제목
    time: [];
    professor: [] | string | any;
    type: string | "major" | "elective";
    writer: IUser;
    endDate: string;
    lecture: Ilecture;
    detail: string;
}

export interface IRecruitItem {
    id: number;
    lecture: Ilecture;
    title: string; // 공지 제목
    type: string | "major" | "elective";
    writer: IUser;
    endDate: string;
    detail: string;
    viewCount: number;
    total: number;
    current: number;
}
