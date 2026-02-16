export const getButtonBackground = (geo: string) => {
    switch (geo) {
        case 'ru':
            return `linear-gradient(to right, #FF8D6B, #FFBA47)`;
        case 'en':
            return `linear-gradient(to right, #47A1FF, #6BFF8D)`;
        case 'tr':
            return `linear-gradient(to right, #8D47FF, #FF6BCD)`; // Пример для третьего языка
        default:
            return `linear-gradient(to right, #FF8D6B, #FFBA47)`;
    }
};

export const getWrapperBackground = (geo: string) => {
    switch (geo) {
        case 'en':
            return `linear-gradient(to right, #1F0102 63%, #5D0606)`;
        case 'tr':
            return `linear-gradient(to right, #011F02 63%, #065D06)`;
        default:
            return `linear-gradient(to right, #02011F 63%, #06225D)`;
    }
};