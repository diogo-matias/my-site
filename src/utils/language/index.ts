import * as languages from "../../language/languages";

export function selectLanguage(languageCode?: string) {
    let lang = languageCode;

    if (!languageCode) {
        lang = navigator.language.toLowerCase();
    }

    switch (lang) {
        case "pt-br":
            return languages.ptBr;

        default:
            return languages.enUs;
    }
}
