import { ReactNode } from "react";
import { MainLayoutContainer } from "./MainLayout.style";
interface Props {
    children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
    return <MainLayoutContainer>{children}</MainLayoutContainer>;
};

export default MainLayout;
