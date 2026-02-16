import { translations } from "./translations";

export const useTranslation = (geo: string) => {
    return translations[geo as keyof typeof translations] || translations.ru;
};

