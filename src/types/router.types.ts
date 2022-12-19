import { ReactNode } from "react";

export default interface routerType {
    name: string;
    path: string;
    component: ReactNode;
    exact?: boolean;
}
