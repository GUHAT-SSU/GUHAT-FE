function displayedAt(createdAt: string) {
    const start: any = new Date(createdAt);
    const end: any = new Date(); // 현재 날짜

    const diff = (end - start) / 1000; // 경과 시간

    const times = [
        { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
        { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
        { name: "일", milliSeconds: 60 * 60 * 24 },
        { name: "시간", milliSeconds: 60 * 60 },
        { name: "분", milliSeconds: 60 },
    ];

    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds);
        if (betweenTime > 0) {
            return `${betweenTime}${value.name} 전`;
        }
    }
    return "방금 전";
}

export default displayedAt;
