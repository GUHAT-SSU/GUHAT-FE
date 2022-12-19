import { updateIntro } from "@/apis/profile";
import InputFiled from "@/components/InputBox/InputFiled";
import { loadingState } from "@/storage/recoil/loadingState";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRecoilState } from "recoil";

const AboutmeContainer = styled.div<{ mode: number }>`
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0rem 6rem;

    background-color: white;
    ${({ mode }) =>
        mode
            ? `background: #E6E6EE;
border: 2px solid #999999;`
            : ``}
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    .aboutme-nickname {
        width: 100%;
        margin-left: 10rem;
        left: 10rem;
        font-size: 2rem;
        font-weight: 600;
    }
    .aboutme-comment {
        margin-left: 10rem;
        margin-top: 1rem;
        font-size: 1.5rem;
        font-family: 500;
        textarea {
            height: 4rem !important;
            font-size: 1.4rem;
            font-weight: 600;
            border: none !important;
            padding: 1rem !important;
            text-decoration: underline;
        }
    }
    .aboutme-label {
        width: 100%;
        margin-top: 3rem;
        font-size: 1.5rem;
        font-family: 500;
    }
    .aboutme-content {
        margin-top: 1rem;
        width: 100%;
        font-size: 1.2rem;
        margin-bottom: 5rem;

        textarea {
            height: 10rem !important;
            padding: 2rem 2rem;
            line-height: 2rem;
            font-size: 1.1rem;
        }
    }
`;
const MyProfileImgWrapper = styled.div`
    position: relative;
    height: 7rem;
    top: 5rem;

    .circle {
        width: 6rem;
        height: 6rem;
    }
    .main-circle {
        position: absolute;
        left: 0;
        background: #f4f4f4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8rem;
    }
    .sub-circle {
        width: 3rem;
        height: 3rem;
        position: absolute;
        bottom: 1rem;
        left: 5rem;
        background: rgba(198, 231, 250, 1);
        border-radius: 8rem;
    }
`;
const EditWrapper = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

interface Props {
    nickname?: string;
    introduction?: string;
    detail?: string;
}

const AboutMeLayout = ({ ...props }) => {
    const MODE_VIEW = 0;
    const MODE_EDIT = 1;
    const [mode, setMode] = useState(MODE_VIEW);

    const [loading, setLoading] = useRecoilState(loadingState);

    const [about, setAbout] = useState(props.detail);
    const [intro, setIntro] = useState(props.introduction);

    // useEffect(() => {
    //     console.log(mode);
    // }, [mode]);
    console.log("proifle", props);
    const onClickSubmit = () => {
        setLoading(true);
        updateIntro(intro, about).then((res) => {
            console.log(res);
            setLoading(false);
            setMode((prev) => (prev ? MODE_VIEW : MODE_EDIT));
        });
    };
    return (
        <AboutmeContainer mode={mode}>
            <MyProfileImgWrapper>
                <div className="circle sub-circle"></div>
                <div
                    className="circle main-circle"
                    style={{
                        backgroundImage: `url(${props.profileImg})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                ></div>
            </MyProfileImgWrapper>
            <div className="aboutme-nickname"> {props.nickname}</div>

            {mode === MODE_VIEW ? (
                <>
                    <div className="aboutme-comment">"{intro}"</div>

                    <div className="aboutme-label">ABOUT ME</div>
                    <div className="aboutme-content">{about}</div>
                </>
            ) : (
                <>
                    <div className="aboutme-comment">
                        {" "}
                        <InputFiled
                            text={intro}
                            type="text"
                            handler={setIntro}
                        />
                    </div>
                    <div className="aboutme-label">ABOUT ME</div>
                    <div className="aboutme-content">
                        <InputFiled
                            text={about}
                            type="text"
                            handler={setAbout}
                        />
                    </div>
                </>
            )}
        </AboutmeContainer>
    );
};

export default AboutMeLayout;
