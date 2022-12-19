export const getApplicants = (recruitId: number | string): any[] => {
    //API

    return [
        {
            roleId: 1,
            title: "프론트",
            applicant: [
                {
                    id: "21929", //studentId
                    nickname: "닉네임front1",
                    level: 1,
                },
                {
                    id: "120222",
                    nickname: "닉네임front2",
                    level: 1,
                },
                {
                    id: "1202212",
                    nickname: "닉네임front3",
                    level: 3,
                },
            ],
        },
        {
            roleId: 3,
            title: "기획",
            applicant: [],
        },

        {
            roleId: 6,
            title: "백엔드",
            applicant: [
                {
                    id: "20222232",
                    nickname: "닉네임b1",
                    level: 1,
                },
                {
                    id: "202232522",
                    nickname: "닉네임b2",
                    level: 2,
                },
                {
                    id: "2032222",
                    nickname: "닉네임b3",
                    level: 3,
                },
                {
                    id: "2212222",
                    nickname: "닉네임b4",
                    level: 4,
                },
            ],
        },
    ];
};

export const getMembers = (recruitId: string): any[] => {
    //API

    return [
        {
            id: "20222222", //studentId
            nickname: "닉네임front1",

            profileImg: null,
        },
        {
            id: "2022232",
            nickname: "닉네임3",
            profileImg: null,
        },
        {
            id: "2022232",
            nickname: "닉네임6",
            profileImg: null,
        },
        null,
        null,
    ];
};

interface IupdateMember {
    roleId: number | string;
    title?: string;
    member: any[];
}

export const updateMember = (body: IupdateMember[]): boolean => {
    setTimeout(() => {
        console.log("멤버 업데이트", body);
    }, 3000);

    return true;
};
