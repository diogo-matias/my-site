import { LanguageStrings } from "language/languages/en-us";
import { CardPropsType } from "./types";

// https://simpleicons.org/ -> Icons

export const CARDS_INFO = (STRINGS: LanguageStrings): CardPropsType[] => {
    return [
        {
            imageUrl: "/images/ecommerce2.png",
            githubLink: "https://github.com/diogo-matias/e-commerce",
            redirectLink: "https://e-commerce-diogo-matias.vercel.app/",
            title: "Fullstack Ecommerce",
            description: STRINGS.PROJECTS.DESCRIPTION_ECOMMERCE,
            badges: [
                {
                    logo: "react",
                    text: "React",
                },
                {
                    logo: "tailwindcss",
                    text: "tailwind",
                },
                {
                    logo: "typescript",
                    text: "typescript",
                },
                {
                    logo: "axios",
                    text: "axios",
                },
                {
                    logo: "REDUX",
                    text: "Redux",
                },
                {
                    logo: "vercel",
                    text: "vercel",
                },
                {
                    logo: "express",
                    text: "express",
                },
                {
                    logo: "sequelize",
                    text: "sequelize",
                },
                {
                    logo: "postgresql",
                    text: "postgres",
                },
            ],
        },
        {
            imageUrl: "/images/bible.png",
            redirectLink: "https://bible-diogo-matias.vercel.app/",
            title: "Bible.com",
            githubLink: "https://github.com/diogo-matias/bible",
            description: STRINGS.PROJECTS.DESCRIPTION_BIBLE,
            badges: [
                {
                    logo: "Typescript",
                    text: "Typescript",
                },
                {
                    logo: "REDUX",
                    text: "REDUX",
                },
                {
                    logo: "styled-components",
                    text: "Styled components",
                },
                {
                    logo: "mui",
                    text: "Material UI",
                },
                {
                    logo: "React",
                    text: "React JS",
                },
                {
                    logo: "reactrouter",
                    text: "Router dom",
                },
                {
                    logo: "axios",
                    text: "AXIOS",
                },
                {
                    logo: "vercel",
                    text: "vercel",
                },
            ],
        },
        {
            imageUrl:
                "https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F2f49650ed42b1-Para-que-e-usado-o-JavaScript.jpg",
            redirectLink: "https://forge-code.vercel.app/quiz",
            title: "Javascript Quiz",
            githubLink: "https://github.com/diogo-matias",
            description: STRINGS.PROJECTS.DESCRIPTION_QUIZ,
            badges: [
                {
                    logo: "next.js",
                    text: "Next",
                },
                {
                    logo: "Typescript",
                    text: "Typescript",
                },
                {
                    logo: "REDUX",
                    text: "REDUX",
                },

                {
                    logo: "React",
                    text: "React JS",
                },

                {
                    logo: "vercel",
                    text: "vercel",
                },
                {
                    logo: "tailwind CSS",
                    text: "Tailwind",
                },
            ],
        },
    ];
};
