import { displayLevel } from "@/util/displayLevel";
import { useState } from "react";
import {
    ProfileImageWrapper,
    ProfileItemDetail,
    ProfileItemSubTitle,
    ProfileItemWrap,
    ProfileKeyword,
    ProfileKeywordWrapper,
} from "./Profileitem.style";

const ProfileSearchItem = ({ ...props }) => {
    const [hide, setHide] = useState<boolean>(false);
    return (
        <>
            {" "}
            {props && props.user ? (
                <ProfileItemWrap
                    onMouseEnter={() => {
                        setHide(true);
                    }}
                    onMouseLeave={() => {
                        setHide(false);
                    }}
                >
                    <div className="default-view">
                        <ProfileImageWrapper image={props.user.profileImg} />
                        <ProfileItemSubTitle>
                            {props.user.nickname}
                        </ProfileItemSubTitle>
                        <ProfileItemDetail>
                            {displayLevel(props.user.level)}
                        </ProfileItemDetail>
                        <ProfileItemDetail className="intro">
                            {props?.introduction}
                        </ProfileItemDetail>
                        <div className="keyword-preview">
                            {props?.skill?.slice(0, 3).map((s: any) => (
                                <>
                                    {" "}
                                    <ProfileKeyword>{s}</ProfileKeyword>
                                </>
                            ))}
                        </div>
                    </div>
                    {hide ? (
                        <>
                            {" "}
                            <ProfileKeywordWrapper>
                                {props?.skill?.map((s: any) => (
                                    <>
                                        {" "}
                                        <ProfileKeyword>{s}</ProfileKeyword>
                                    </>
                                ))}
                            </ProfileKeywordWrapper>
                        </>
                    ) : null}
                </ProfileItemWrap>
            ) : null}
        </>
    );
};

export default ProfileSearchItem;
