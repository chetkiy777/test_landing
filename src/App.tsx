import { useParams } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getThemeByGeo } from "./theme";
import Hero from "./components/Hero";
import DownloadBlock from "./components/DownloadBlock";
import {GeoSwitcher} from "./components/GeoSwitcher";

export default function App() {
  const { geo = "ru" } = useParams();

  const theme = getThemeByGeo(geo);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GeoSwitcher />
        <Hero geo={geo} />
        <DownloadBlock geo={geo} />
      </ThemeProvider>
  );
}
