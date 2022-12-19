import MainButton from "@/components/Button";
import FileItem from "@/components/FileItem";
import styled from "@emotion/styled";

import { deleteProfile, uploadFiiles } from "@/apis/profile";
import UploadImg from "@/assets/upload.svg";
import { loadingMessage, loadingState } from "@/storage/recoil/loadingState";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

const PortfolioListcontainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0;
    margin-bottom: 1rem;
    max-height: 20rem;
    overflow-y: auto;
    position: relative;
    .file-content-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        padding: 0;
        gap: 1rem;
    }
`;

interface Props {
    mode: number;
    files?: any[];
}

const MODE_VIEW = 0;
const MODE_EDIT = 1;

const PortFolioLayout = ({ mode, files }: Props) => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [loadingMsg, setLoadingMsg] = useRecoilState(loadingMessage);

    const [buttonLoading, setBtnLoading] = useState(false);

    const fileRef = useRef<HTMLInputElement>(null);
    const [pathFile, setPathFile] = useState<string[]>(
        files ? files.map((f) => f.file) : []
    );

    const onClickUplod = () => {
        if (fileRef) fileRef.current!!.click();
    };

    useEffect(() => {}, [pathFile]);
    useEffect(() => {}, [loading]);
    const fileHandleChange = (e: any) => {
        const files = [...e.target.files];
        const profile = new FormData();
        files.forEach((element: File) => {
            profile.append("profile", element);
        });
        setBtnLoading(true);
        uploadFiiles(profile)
            .then((res: any) => {
                const result = res.data.data;
                setBtnLoading(false);
                setPathFile(result);
            })
            .catch((err: any) => console.log(err));
    };

    const onClickDelete = (file: string, index: number) => {
        pathFile.splice(index, 1);
        setPathFile([...pathFile]);
        setLoading(true);
        deleteProfile(file)
            .then((res: any) => {
                console.log(res);
                console.log(pathFile);
                setLoading(false);
            })
            .catch((err: any) => console.log(err));
    };

    return (
        <div>
            <PortfolioListcontainer>
                <div className="file-content-wrapper">
                    {pathFile?.map((file, index) => (
                        <FileItem
                            key={file}
                            file={file}
                            mode={mode ? "edit" : "view"}
                            deleteListener={(path) =>
                                onClickDelete(path, index)
                            }
                        />
                    ))}
                </div>
            </PortfolioListcontainer>
            {mode ? (
                <>
                    <MainButton
                        width="50%"
                        clickListener={onClickUplod}
                        disabled={buttonLoading}
                    >
                        {buttonLoading ? "업로드 중" : " 파일 업로드"}
                        <img
                            src={UploadImg}
                            alt="업로드이미지"
                            style={{
                                width: "1.3rem",
                                marginLeft: "1rem",
                            }}
                        />
                    </MainButton>

                    <input
                        multiple
                        ref={fileRef}
                        type="file"
                        style={{ display: "none" }}
                        onChange={fileHandleChange}
                    />
                </>
            ) : null}
        </div>
    );
};

export default PortFolioLayout;
