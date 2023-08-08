import * as React from "react";
import { useMemo, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { sxWrapperLayout } from "./WrapperLayout.style";
import Header from "../header/Header";
import { ThemeContext } from "../../../contexts/theme-context/themeContext";

type Props = {
  children?: React.ReactNode;
};

const WrapperLayout: React.FC<Props> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

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
        <CssBaseline />
        <Box sx={sxWrapperLayout.mainAppBox}>
          <Header />
          {children}
        </Box>
      </ThemeContext.Provider>
    </>
  );
};

export default WrapperLayout;
