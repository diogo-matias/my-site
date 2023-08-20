import { Interface } from "readline";

export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            REACT_APP_API_BASE_URL: string;
            REACT_APP_GOOGLE_API_KEY: string;
            REACT_APP_GOOGLE_BASE_API_URL: string;
        }
    }
}
