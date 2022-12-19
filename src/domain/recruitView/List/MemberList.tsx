import MemberCard from "@/components/Member/MemberCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MemberListLayout } from "./MemberList.style";

interface Prop {
    name: string;
    list: any[];
    max: number;
    canAccess?: boolean;
}

const MemberList = ({ name, list, max, canAccess }: Prop) => {
    const [members, setMembers] = useState<any | null>([]);
    const navigator = useNavigate();
    useEffect(() => {
        const init = Array.from({ length: max }, () => null);
        list.forEach((i, idx) => {
            init[idx] = i;
        });
        setMembers(init);
    }, []);

    const onClickMember = (profileId: number) => {
        navigator("/profile/" + profileId);
    };
    return (
        <MemberListLayout>
            <h1>{name}</h1>
            <div className="member-list">
                {members
                    ? members.map((mem: any, idx: number) => {
                          return (
                              <MemberCard
                                  clickListener={() => {
                                      if (mem) onClickMember(mem?.profile?.id);
                                  }}
                                  disabled={
                                      canAccess &&
                                      mem?.profile?.mode === "private"
                                  }
                                  key={"profile" + idx}
                                  width={"7rem"}
                                  member={
                                      mem && mem.status === "success"
                                          ? mem.user.nickname
                                          : null
                                  }
                                  profileImg={
                                      mem && mem.status === "success"
                                          ? mem.user.profileImg
                                          : null
                                  }
                              />
                          );
                      })
                    : null}
            </div>
        </MemberListLayout>
    );
};

export default MemberList;
