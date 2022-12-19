export interface IUser {
    studentId: string | number;
    name?: string;
    grade?: string | null;
    semester?: string;
    group?: string | number;
    univ?: string;
    nickname: string | null;
    profileImg?: string | null;
    level: string | number | null;
}
