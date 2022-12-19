export const displayLevel = (level: string | number) => {
    switch (level) {
        case 0:
            return `Lv.${level} 고딩`;
        case 1:
            return `Lv.${level} 새내기`;
        case 2:
            return `Lv.${level} 대학생`;
        case 3:
            return `Lv.${level} 선배님`;
        case 4:
            return `Lv.${level} 화석`;
        case 5:
            return `Lv.${level} 예비 대학원생`;
        case 6:
            return `Lv.${level} 버스기사`;
        default:
            return `Lv.${level} 고딩`;
    }
};
