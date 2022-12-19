import { IRecruitItem } from "@/types/recruitLecture.types";
import Recruit from "@components/Recruit/Card/Recruit";
import {
    RecruitingListContainer,
    RecruitingListWrapper,
} from "./RecruitingList.style";

interface Props {
    recruitingList?: IRecruitItem[];
}
const RecruitingList = ({ recruitingList }: Props) => {
    return (
        <RecruitingListContainer>
            <RecruitingListWrapper>
                {recruitingList
                    ? recruitingList.map((recruit, idx) => {
                          return <Recruit key={recruit.id} recruit={recruit} />;
                      })
                    : null}
            </RecruitingListWrapper>
        </RecruitingListContainer>
    );
};

export default RecruitingList;
