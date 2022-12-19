import styled from "@emotion/styled";

const StarContainer = styled.div<{ rating: number }>`
    position: relative;
    display: flex;
    justify-content: center;
    .star-ratings-css {
        unicode-bidi: bidi-override;
        color: #c5c5c5;
        font-size: 25px;
        height: 25px;
        width: 100px;
        margin: 0 auto;
        position: relative;
        padding: 0;
        text-shadow: 0px 1px 0 #a2a2a2;
        div,
        span {
            font-size: 75% !important;
        }
    }
    .star-ratings-css-top {
        ${({ rating }) => (rating ? `width : ${rating}%;` : "0%")}
        color: #6cc9ff;
        padding: 0;
        position: absolute;
        z-index: 1;
        display: block;
        top: 0;
        left: 0;
        overflow: hidden;
        div,
        span {
            font-size: 105% !important;
        }
    }
    .star-ratings-css-bottom {
        padding: 0;
        display: block;
        z-index: 0;
        div,
        span {
            font-size: 105% !important;
        }
    }
`;

const StarScoreProgres = ({ rating }: { rating: number }) => {
    return (
        <StarContainer rating={rating}>
            <div className="star-ratings-css">
                <div className="star-ratings-css-top">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
                <div className="star-ratings-css-bottom ">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
        </StarContainer>
    );
};

export default StarScoreProgres;
