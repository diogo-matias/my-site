import { LanguageStrings } from "language/languages/en-us";

export const COMPANIES = (STRINGS: LanguageStrings) => {
    return [
        {
            name: "Growdev",
            description: STRINGS.ABOUT.GROWDEV_DESCRIPTION,
            link: "https://growdev.com.br",
            logoUrl: "/images/growdev.png",
        },
        {
            name: "Arezzo",
            description: STRINGS.ABOUT.AREZZO_DESCRIPTION,
            link: "https://arezzo.com.br",
            logoUrl: "/images/arezzo.png",
        },
    ];
};
