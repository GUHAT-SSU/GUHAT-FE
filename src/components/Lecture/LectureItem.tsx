import {
    LectureItemDetail,
    LectureItemSubDetail,
    LectureItemSubTitle,
    LectureItemTitle,
    LectureItemWrap,
    LectureMoreButton,
} from "./LectureItem.style";

interface Props {
    id: string | number;
    title: string;
    professor?: string[] | string;
    year: string;
    semester: string;
    time: any;
    place: string;

    clickListener: () => void;
}

const LectureItem = ({ ...props }: Props) => {
    return (
        <LectureItemWrap>
            <LectureItemTitle>{props.title}</LectureItemTitle>
            <LectureItemSubTitle>{props.professor}</LectureItemSubTitle>
            <LectureItemDetail>
                {props.year}년도 {props.semester}
            </LectureItemDetail>
            <LectureItemSubDetail>
                {props.time ? props.time.map((t: any) => <p>{t}</p>) : null}
            </LectureItemSubDetail>
            <LectureItemDetail>
                {props.place.replace("(", "").replace(")", "")}
            </LectureItemDetail>
            <LectureMoreButton onClick={props.clickListener}>
                더보기
            </LectureMoreButton>
        </LectureItemWrap>
    );
};

export default LectureItem;
