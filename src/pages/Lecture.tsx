import APILayout from "@/components/Layout/APILayout";
import LectureHomeLayout from "@/domain/lecture/layout/LectureHomeLayout";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { modalState } from "../storage/recoil/modalState";
const Lecture = () => {
    const setModal = useSetRecoilState(modalState);
    useEffect(() => {
        setModal(false);
    }, []);
    return (
        <APILayout>
            <LectureHomeLayout />
        </APILayout>
    );
};

export default Lecture;
