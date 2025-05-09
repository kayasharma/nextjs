import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../themes";
import Layout from "../components/Layout";
import { ThemeProviderCustom } from "../context/ThemeContext";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");
  const [primaryColor, setPrimaryColor] = useState("#2196f3"); // Default blue

  const theme = useMemo(
    () => getTheme(mode, primaryColor),
    [mode, primaryColor]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProviderCustom primaryColor={primaryColor}>
        <Layout
          mode={mode}
          setMode={setMode}
          primaryColor={primaryColor}
          setPrimaryColor={setPrimaryColor}
        >
          <Component
            {...pageProps}
            mode={mode}
            setMode={setMode}
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
          />
        </Layout>
      </ThemeProviderCustom>
    </ThemeProvider>
  );
}
