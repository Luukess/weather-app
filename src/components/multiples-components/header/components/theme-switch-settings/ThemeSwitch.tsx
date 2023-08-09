import * as React from "react";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { sxThemeSwitchStyles } from "./ThemeSwitch.style";
import {
  ThemeContext,
  contextTypeTheme,
} from "../../../../../contexts/theme-context/themeContext";

const ThemeSwitch: React.FC = () => {
  const getThemeFromStorage: string | null = localStorage.getItem("theme");
  const [selectedTheme, setSelectedTheme] = useState<string>(
    getThemeFromStorage === "dark" ? "dark" : "light"
  );

  const themeContextValues: contextTypeTheme | null = useContext(ThemeContext);

  const handleSelectTheme = (
    event: React.MouseEvent<HTMLElement>,
    newSelectedTheme: string
  ): void => {
    if (newSelectedTheme !== null) {
      setSelectedTheme(newSelectedTheme);
    }
  };

  useEffect((): void => {
    localStorage.setItem("theme", selectedTheme);
    themeContextValues?.setIsDarkMode(selectedTheme === "dark" ? true : false);
  }, [selectedTheme]);

  return (
    <>
      <Typography>Mode</Typography>
      <Box component="div" sx={sxThemeSwitchStyles.boxButtonsContainer}>
        <ToggleButtonGroup
          color="primary"
          value={selectedTheme}
          exclusive
          onChange={handleSelectTheme}
          aria-label="theme-platform"
        >
          <ToggleButton sx={sxThemeSwitchStyles.themeButtons} value="light">
            <WbSunnyOutlinedIcon sx={sxThemeSwitchStyles.buttonsIcons} /> Light
          </ToggleButton>
          <ToggleButton sx={sxThemeSwitchStyles.themeButtons} value="dark">
            <DarkModeOutlinedIcon sx={sxThemeSwitchStyles.buttonsIcons} /> Dark
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

export default ThemeSwitch;
