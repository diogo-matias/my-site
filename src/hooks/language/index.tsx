import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { changeLanguage } from "language";
import { useEffect } from "react";

type LanguageServicePropsType = {
    updatePage: () => void;
};

export function LanguageService(props: LanguageServicePropsType) {
    const { updatePage } = props;

    const languageCode = useAppSelector((state) => state.language.languageCode);

    useEffect(() => {
        changeLanguage(languageCode);
        setTimeout(() => {
            updatePage();
        }, 100);
    }, [languageCode]);

    return null;
}
