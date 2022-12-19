import ViewCountIcon from "../../../assets/viewCount.svg";
import { ViewCountWrap } from "./ViewCount.style";
const ViewCount = ({ count, type }: { count: number; type?: string }) => {
    return (
        <ViewCountWrap type={type}>
            <img src={ViewCountIcon}></img>
            {count}
        </ViewCountWrap>
    );
};

export default ViewCount;
