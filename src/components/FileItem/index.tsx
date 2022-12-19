import DownloadIcon from "@/assets/download.svg";
import PDFIcon from "@/assets/pdfIcon.svg";
import XIcon from "@assets/close.svg";
import styled from "@emotion/styled";

const FileItemLayout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    border: 2px solid gray;
    border-radius: 1rem;
    background: #f6f6f6;
    border: 2px solid #bcbcbc;
    align-items: center;
    img {
        cursor: pointer;
    }
    .file-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-left: 1rem;
        overflow: hidden;

        h1 {
            font-weight: 700;
            font-size: 1.2rem;
        }
        p {
            color: darkgray;
            font-size: 0.8rem;
        }
    }
`;
const FileItem = ({
    file,
    mode = "view",
    deleteListener,
}: {
    file?: any;
    mode?: string;
    deleteListener?: (url: string) => void;
}) => {
    const onDownload = () => {
        console.log(file);
        if (file.location) window.open(file.location);
        else if (!file.name && file.includes("https")) window.open(file);
        else {
            const objectURL = window.URL.createObjectURL(file);
            console.log(objectURL);
            window.open(objectURL);
        }
    };

    const onDelete = () => {
        deleteListener?.(file.location ? file.location : file);
    };

    return (
        <FileItemLayout>
            {file ? (
                mode === "edit" ? (
                    <>
                        <img src={PDFIcon} alt="pdf 아이콘" />
                        <div className="file-content" onClick={onDownload}>
                            <h1>
                                {file.originalname
                                    ? file.originalname
                                    : file.name
                                    ? file.name
                                    : file.slice(file.indexOf("_") + 1)}
                            </h1>
                            <p>{file.size}KB</p>
                        </div>

                        <img
                            src={XIcon}
                            alt="pdf 아이콘"
                            onClick={onDelete}
                            style={{ width: "1rem", marginRight: "1rem" }}
                        />
                    </>
                ) : (
                    <>
                        <img src={PDFIcon} alt="pdf 아이콘" />
                        <div className="file-content">
                            <h1>
                                {file.originalname
                                    ? file.originalname
                                    : file.name
                                    ? file.name
                                    : file.slice(file.indexOf("_") + 1)}
                            </h1>
                            <p>{file.size ? `${file.size}KB` : ""}</p>
                        </div>
                        <img
                            src={DownloadIcon}
                            alt="pdf 아이콘"
                            onClick={onDownload}
                        />
                    </>
                )
            ) : null}
        </FileItemLayout>
    );
};

export default FileItem;
