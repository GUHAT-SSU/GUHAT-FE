export const debounce = (callback: any, duration: number) => {
    let timer: any;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), duration);
    };
};
