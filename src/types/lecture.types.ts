export interface Ilecture {
    lectureId: number;
    name?: string;
    professors?: string[] | null;
    semester?: string | null;
    univ?: string | null;
    major?: string | null;
    group?: string | null;
    schedule?: any[] | null;
    year?: string;
}
