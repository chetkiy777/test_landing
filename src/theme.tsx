import { createTheme } from "@mui/material";

export const getThemeByGeo = (geo: string) => {
    const colors: Record<string, string> = {
        ru: "#ff9800",
        en: "#00bcd4",
        de: "#4caf50",
    };

    return createTheme({
        palette: {
            primary: {
                main: colors[geo] || "#ff9800",
            },
        },
        typography: {
            fontFamily: "'Montserrat', sans-serif",
        },
    });
};
