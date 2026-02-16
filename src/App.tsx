import { useParams } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getThemeByGeo } from "./theme";
import Hero from "./components/Hero";
import FooterBlock from "./components/FooterBlock";

export default function App() {
  const { geo = "ru" } = useParams();

  const theme = getThemeByGeo(geo);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hero geo={geo} />
        <FooterBlock geo={geo} />
      </ThemeProvider>
  );
}
