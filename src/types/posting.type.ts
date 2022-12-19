export interface requestPosting {
    title: string;
    endDate: string;
    detail: string;
    priority: string;
    status?: "open";
    period: string;
    lecture_id: number;
    role: any[];
    chatLink?: string | "";
    viewCnt?: 0;
}
