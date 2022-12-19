export const b64ToBlob = (byteData: string) => {
    const byteCharacters = atob(byteData);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray]);
    const blobUrl = window.URL.createObjectURL(blob);

    return blobUrl;
};
