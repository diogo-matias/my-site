import { selectLanguage } from "utils/language";

let STRINGS = selectLanguage();

function changeLanguage(languageCode: string) {
    STRINGS = selectLanguage(languageCode);
}

export { STRINGS, changeLanguage };
