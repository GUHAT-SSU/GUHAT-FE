import {
    RecruitContentDDay,
    RecruitContentDetail,
    RecruitContentTitle,
    RecruitContentWrap,
} from "./RecruitContent.style";

interface Props {
    title: string;
    detail: string;
    endDate?: string;
    children: React.ReactNode;
}

const RecruitContent = ({ title, detail, endDate, children }: Props) => {
    return (
        <RecruitContentWrap>
            <RecruitContentTitle>{title}</RecruitContentTitle>
            <RecruitContentDetail>{detail}</RecruitContentDetail>
            {children}
            <RecruitContentDDay>{endDate}</RecruitContentDDay>
        </RecruitContentWrap>
    );
};

export default RecruitContent;
