import { CARDS_INFO } from "@constants/projects";
import { CardPropsType } from "@constants/projects/types";

export type Badge = {
    text: string;
    logo: string;
    color?: string;
    logoColor?: string;
};

export type ProjectCardPropsType = {
    cardsInfo: any;
};
