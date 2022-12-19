import Error404 from "@/assets/404.png";
import MainLayout from "../components/Layout/MainLayout";
const NotFound = () => {
    return (
        <MainLayout>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5rem",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    style={{
                        marginTop: "20rem",
                        width: "20%",
                    }}
                    src={Error404}
                    alt="404"
                ></img>
                <h1
                    style={{
                        fontSize: "2.5rem",
                    }}
                >
                    찾을 수 없는 페이지
                </h1>
            </div>
        </MainLayout>
    );
};

export default NotFound;
