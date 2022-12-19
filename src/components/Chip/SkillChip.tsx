import styled from "@emotion/styled";
import themes from "@styles/themes";

const SkillChipWrapper = styled.button`
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    height: 2.6rem;
    text-align: center;
    border-radius: 2rem;
    border: 0px solid gray;
    background-color: ${themes.colors.black_500};
    color: white;
    display: flex;
    font-size: 1rem;
    .tag {
        color: ${themes.colors.gray_100};
        margin-right: 0.2rem;
    }
`;

const SkillChip = ({ text }: { text: string }) => {
    return (
        <SkillChipWrapper>
            <p className="tag">#</p>

            {text}
        </SkillChipWrapper>
    );
};

export default SkillChip;
