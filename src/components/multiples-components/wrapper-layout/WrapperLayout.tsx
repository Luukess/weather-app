import * as React from "react";
import { useMemo, useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { sxWrapperLayout } from "./WrapperLayout.style";
import Header from "../header/Header";
import { ThemeContext } from "../../../contexts/theme-context/themeContext";
import { darkTheme, lightTheme } from "../../../config/theme/theme";

type Props = {
  children?: React.ReactNode;
};

const WrapperLayout: React.FC<Props> = ({ children }) => {
  const modeFromStorage = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    modeFromStorage === "dark" ? true : false
  );
  console.log(isDarkMode);
  const themeContextValues = useMemo(
    (): {
      isDarkMode: boolean;
      setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    } => ({ isDarkMode, setIsDarkMode }),
    [isDarkMode, setIsDarkMode]
  );

  return (
    <>
      <ThemeContext.Provider value={themeContextValues}>
        <ThemeProvider
          theme={!themeContextValues.isDarkMode ? lightTheme : darkTheme}
        >
          <CssBaseline />
          <Box sx={sxWrapperLayout.mainAppBox}>
            <Header />
            {children}
          </Box>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default WrapperLayout;
