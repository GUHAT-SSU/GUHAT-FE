import { Ilecture } from "./lecture.types";
import { IUser } from "./user.type";
export interface IReview {
    id: number;
    title: string;
    detail: string;
    likeCount: number;
    lecture: Ilecture;
    writer: IUser;
}
