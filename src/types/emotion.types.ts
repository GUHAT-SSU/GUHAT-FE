export const emotionType = (id: number) => {
    if (id === 1) {
        return "Love.png";
    } else if (id === 2) {
        return "Smiling.png";
    } else if (id === 3) {
        return "Happy.png";
    } else if (id === 4) {
        return "Crying.png";
    } else return "Angry.png";
};
