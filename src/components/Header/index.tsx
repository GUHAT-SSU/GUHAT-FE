import { useEffect, useState } from "react";

import ProfileIcon from "@/assets/header_profile.svg";
import ScheduleIcon from "@/assets/header_schedule.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderIcon, HeaderWrap, IconWrapper, Title } from "./Header.style";
import PostButton from "./PostButton";
import SearchBar from "./SearchBar";

type HeaderProps = {
    title?: string | undefined;
    color?: string | undefined;
};

function Header({ title }: HeaderProps) {
    const [isSSR, setIsSSR] = useState(true);
    const navigator = useNavigate();
    const location = useLocation();

    const onClickTitle = () => {
        navigator("/");
    };

    useEffect(() => {
        setIsSSR(false);
    }, []);

    return (
        <>
            {" "}
            {!location.pathname.includes("login") ? (
                <HeaderWrap>
                    {!isSSR && (
                        <>
                            {title && (
                                <>
                                    <Title onClick={onClickTitle}>
                                        {title}
                                    </Title>
                                    {!location.pathname.includes("login") ? (
                                        <>
                                            {" "}
                                            <SearchBar />
                                            <IconWrapper>
                                                <HeaderIcon
                                                    img={ProfileIcon}
                                                    onClick={() =>
                                                        navigator("/mypage")
                                                    }
                                                />
                                                <HeaderIcon
                                                    img={ScheduleIcon}
                                                />

                                                <PostButton />
                                            </IconWrapper>
                                        </>
                                    ) : null}
                                </>
                            )}
                        </>
                    )}
                </HeaderWrap>
            ) : null}
        </>
    );
}

export default Header;
