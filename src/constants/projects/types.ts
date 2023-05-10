import { Badge } from "components/projectCard/types";

export type CardPropsType = {
    imageUrl: string;
    title: string;
    githubLink: string;
    redirectLink?: string;
    badges: Badge[];
};
