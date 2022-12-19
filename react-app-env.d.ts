/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test";
        PUBLIC_URL: string;
        REACT_APP_TEST: string;
        BASE_URL: string;
        REACT_APP_BASE_URL: string;
        AUTH_BASE_URL: string;
        REACT_APP_AUTH_BASE_URL: string;
        REACT_APP_CURRENT_URL: string;
    }

    interface Process {
        env: ProcessEnv;
    }

    declare module "*.bmp" {
        const src: string;
        export default src;
    }

    declare module "*.gif" {
        const src: string;
        export default src;
    }

    declare module "*.jpg" {
        const src: string;
        export default src;
    }

    declare module "*.jpeg" {
        const src: string;
        export default src;
    }

    declare module "*.png" {
        const src: string;
        export default src;
    }

    declare module "*.svg" {
        import * as React from "react";

        export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

        const src: string;
        export default src;
    }

    declare module "*.module.css" {
        const classes: { [key: string]: string };
        export default classes;
    }

    declare module "*.module.scss" {
        const classes: { [key: string]: string };
        export default classes;
    }

    declare module "*.module.sass" {
        const classes: { [key: string]: string };
        export default classes;
    }
}
